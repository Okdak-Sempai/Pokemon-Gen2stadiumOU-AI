"""
DammagePredict.py

Ce module contient l’ensemble des outils de simulation, d’évaluation et de recherche stratégique
utilisés par les IA du projet Pokémon Stadium 2 (notamment Snell_Lv1, Lv2, Lv3).

Il est central dans le système de décision, car il fournit :
- une fonction de simulation de tour (`simulate_turn`) pour appliquer deux actions (bot + adversaire)
  à un état de combat simulé (`SimulatedBattleState`),
- une fonction d’évaluation (`evaluate_from_perspective`) qui attribue un score heuristique à un état donné,
- un moteur MinMax complet (`minmax`) et une version optimisée avec élagage (`minmax_alphabeta`) pour explorer
  toutes les combinaisons d’actions possibles.

Les IA utilisent ces fonctions pour anticiper les conséquences de leurs choix et sélectionner
la meilleure action selon la stratégie choisie (simplet, minmax, alphabeta...).

Ce module ne repose sur aucune prédiction probabiliste : il explore exhaustivement les combinaisons
d’actions possibles (attaque/attaque, switch/attaque, etc.), en simulant les effets tour par tour.

Les dégâts sont calculés via `calculate_showdown_damage` depuis `DammageCalcSMOGON.py`, garantissant une précision maximale.
Le module tient également compte des immunités, priorités, statuts, et règles de Gen 2 Stadium.

Fonctions principales :
- simulate_turn : applique une paire d’actions à un état.
- evaluate_from_perspective : évalue stratégiquement un état.
- minmax / minmax_alphabeta : explorent les arbres de décision.

Utilisé par :
- Snell.py (dans choose_move)
- pour générer les arbres et sélectionner le meilleur chemin d’action.
"""

import copy
import os
import json
import shutil
from DammageCalcSMOGON import calculate_showdown_damage
from DammageCalc import get_stat, get_type_modifier
from BattleState import SimulatedBattleState
from typing import List, Tuple, Dict, Any, Optional
from copy import deepcopy

# MOVES DICT

# Attaques nécessitant un tour de chargement (Gen 2)
two_turn_moves = {
    "solarbeam", "fly", "dig", "skullbash", "razorwind", "skyattack"
}
# Attaques nécessitant un tour de recharge après utilisation (Gen 2)
needs_recharge_after = {
    "hyperbeam"
}

# Pondération par défaut utilisée pour MinMaxAlphaBeta (modifiable dynamiquement)
DEFAULT_MINMAX_KEEP_RATIO = 0.80

def simulate_turn(state: SimulatedBattleState, my_action: str, opp_action: str) -> SimulatedBattleState:
    """
    Applique une paire d’actions (bot et adversaire) à un état de combat simulé.

    Cette fonction simule un tour de combat complet sans exécuter un vrai match.
    Elle est utilisée par l’IA pour explorer les conséquences de chaque combinaison d’actions possibles.

    Elle modifie une copie de l’état passé en paramètre :
    - applique les effets des attaques (en utilisant calculate_showdown_damage)
    - gère les switchs de Pokémon
    - respecte l’ordre d’initiative (vitesse + priorité)
    - prend en compte les immunités et le système de préparation/recharge des attaques à 2 tours.

    Elle retourne un nouvel objet SimulatedBattleState représentant l’état après exécution des deux actions.

    Args:
        state (SimulatedBattleState): État initial à partir duquel simuler.
        my_action (str): Action choisie par le bot (nom d’une attaque ou "SWITCH:<species>").
        opp_action (str): Action choisie par l’adversaire.

    Returns:
        SimulatedBattleState: Nouvel état après application des deux actions.
    """

    # On copie profondément l’état pour le modifier sans altérer l’original
    new_state = state.copy()

    def switch_pokemon(team, species):
        # Normalisation du nom de Pokémon (sans apostrophe, majuscules, espaces)
        normalized = species.lower().replace("’", "").replace("'", "").replace(" ", "")
        team_keys = [k.lower().replace("’", "").replace("'", "").replace(" ", "") for k in team.pokemons.keys()]
        name_map = dict(zip(team_keys, team.pokemons.keys()))

        # Vérification que le Pokémon à envoyer est bien présent dans l'équipe
        if normalized not in name_map:
            raise KeyError(
                f"[simulate_turn] SWITCH vers '{species}' impossible : nom introuvable dans l'équipe ({list(team.pokemons.keys())})")

        # Le Pokémon choisi est placé en tête de l'équipe (actif)
        true_name = name_map[normalized]
        team.pokemons = {
            true_name: team.pokemons[true_name],
            **{k: v for k, v in team.pokemons.items() if k != true_name}
        }

    def get_priority_tuple(move_name, mon):
        """
        Retourne un tuple (priorité, vitesse) pour déterminer l'ordre d'action.
        - Les switchs sont considérés comme ayant une priorité neutre (0) et vitesse de base.
        - Les attaques utilisent leur priorité réelle et la statistique de vitesse du Pokémon.

        Args:
            move_name (str): Nom du move ou switch (ex: "flamethrower", "SWITCH:Butterfree")
            mon (SimulatedPokemon): Pokémon qui exécute l'action

        Returns:
            tuple: (priorité, vitesse) pour trier les actions
        """
        if move_name.startswith("SWITCH:"):
            # Switch = priorité neutre, mais vitesse pour ordre
            return (0, mon.stats.get("spe", 0))

        move = mon.moves.get(move_name)
        if move is None:
            # Move inconnu : on le fait passer après tout (ex: 0 de prio, 0 de speed)
            return (0, 0)

        priority = move.get("priority", 0)
        speed = mon.stats.get("spe", 0)
        return (priority, speed)

    def apply_move(attacker, defender, move_id):
        # ⏸ Gestion recharge post-Hyper Beam
        if hasattr(attacker, "charging_move") and attacker.charging_move == "__RECHARGE__":
            attacker.charging_move = None
            return

        # Récupère le move depuis la table des attaques connues de l'attaquant
        move = attacker.moves.get(move_id)
        # Cas d'invalidité :
        # - move non trouvé (erreur de nom ou move non connu dans le set)
        # - le move n’a plus de PP → ne peut plus être utilisé
        # - le défenseur est déjà KO → inutile d’attaquer
        if not move or move["pp"] <= 0 or defender.current_hp <= 0:
            return

        # Si le type du move est totalement inefficace (immunité)
        if get_type_modifier(move["type"], [defender.stats.get("type1", "normal")]) == 0.0:
            return  # inutile, donc on le joue pas

        # Cas où le lanceur est en cours de chargement d’une autre attaque
        if hasattr(attacker, "charging_move") and attacker.charging_move:
            if attacker.charging_move == move_id:
                # Tour 2 : on exécute l’attaque
                attacker.charging_move = None
            else:
                # Il tente un autre move pendant le chargement -> fail
                return

        # Si l'attaque est une attaque à 2 tours (ex: SolarBeam)
        elif move_id in two_turn_moves:
            # Tour 1 : préparation, pas d’effet immédiat
            attacker.charging_move = move_id
            return

        # Décrément du PP
        move["pp"] = max(0, move["pp"] - 1)

        # Move sans puissance (ex: Haze, statut sans dégâts)
        if move.get("power", 0) == 0:
            return

        # Calcul des dégâts avec le simulateur Smogon
        dmg_info = calculate_showdown_damage(
            gen=2,
            attacker=attacker,
            defender=defender,
            move=type("MoveObj", (), {"id": move["name"]}),
            battle=None
        )

        # On prend une moyenne entre le roll min et max pour une estimation simple
        damage = int((dmg_info.get("min", 0) + dmg_info.get("max", 0)) / 2)
        defender.current_hp = max(0, defender.current_hp - damage)

    ### Execution d'un tour complet.

    # Vérifie si chaque camp effectue un switch
    bot_switch = my_action.startswith("SWITCH:")
    adv_switch = opp_action.startswith("SWITCH:")
    # Application des switchs si présents
    if bot_switch:
        new_state.active1 = my_action.replace("SWITCH:", "").lower()
        switch_pokemon(new_state.team1, new_state.active1)
    if adv_switch:
        new_state.active2 = opp_action.replace("SWITCH:", "").lower()
        switch_pokemon(new_state.team2, new_state.active2)

    # Cas du clash d'attaques
    if not bot_switch and not adv_switch:
        mon1 = new_state.team1.pokemons[new_state.active1]
        mon2 = new_state.team2.pokemons[new_state.active2]
        move1 = mon1.moves.get(my_action)
        move2 = mon2.moves.get(opp_action)

        # On récupère les tuples (priorité, vitesse) pour les deux Pokémon
        p1 = get_priority_tuple(my_action, mon1)
        p2 = get_priority_tuple(opp_action, mon2)

        # Celui qui a la plus grande priorité agit en premier
        if p1 > p2:
            apply_move(mon1, mon2, my_action)
            if mon2.current_hp > 0:
                apply_move(mon2, mon1, opp_action)
        else:
            apply_move(mon2, mon1, opp_action)
            if mon1.current_hp > 0:
                apply_move(mon1, mon2, my_action)

    #Cas Attaque contre switch, switch contre attaque
    elif not bot_switch:
        mon1 = new_state.team1.pokemons[new_state.active1]
        mon2 = new_state.team2.pokemons[new_state.active2]
        apply_move(mon1, mon2, my_action)
    elif not adv_switch:
        mon1 = new_state.team1.pokemons[new_state.active1]
        mon2 = new_state.team2.pokemons[new_state.active2]
        apply_move(mon2, mon1, opp_action)

    # On retourne l’état modifié après application du tour simulé
    return new_state


def evaluate_from_perspective(state: SimulatedBattleState, bot: bool = True) -> float:
    """
    Évalue un état de combat simulé du point de vue d’un joueur (bot ou adversaire),
    en attribuant un score stratégique heuristique.

    Cette fonction est utilisée dans l’arbre MinMax pour évaluer la qualité d’un état
    après avoir simulé un tour de combat. Le score repose sur plusieurs critères
    combinés de manière additive.

    Composants de l’heuristique :

    1. Ratio de PV moyen :
        - Calculé comme la moyenne des HP restants / HP max pour chaque Pokémon vivant.
        - Différence entre le ratio de l’équipe du joueur et celui de l’adversaire, pondérée sur 100.

    2. Pression offensive :
        - Moyenne des dégâts infligés par les moves disponibles du Pokémon actif sur l’adversaire actif.
        - Bonus si la pression dépasse certains seuils (0.3, 0.5).

    3. Stabilité défensive :
        - Si aucune attaque adverse ne dépasse 30% de nos PV, +10 points.

    4. Létalité potentielle :
        - Si un move avec PP peut mettre KO l’adversaire actif, +50 points.

    5. Dommages maximaux :
        - Bonus progressif en fonction du meilleur move offensif disponible.

    6. Avantage numérique :
        - +2.75 points par Pokémon adverse déjà mis KO.

    7. Sanctions :
        - Pénalité si aucun move ne fait de dégâts utiles.
        - Pénalité proportionnelle au nombre d’adversaires encore vivants si aucun move exploitable.
        - Sanction pour inactivité offensive malgré une position sûre.

    8. Opportunisme :
        - Bonus si l’adversaire est < 20% PV et que l’on dispose d’un move infligeant > 30%.

    Cette fonction est purement déterministe et conçue pour refléter l’avantage structurel
    d’un état à un instant donné, sans anticipation probabiliste des tours futurs.

    Args:
        state (SimulatedBattleState): État simulé à évaluer.
        bot (bool): True si on évalue depuis le point de vue du bot, False pour l’adversaire.

    Returns:
        float: Score numérique global représentant la qualité de l’état.
    """

    # Sélection des équipes selon la perspective choisie
    team = state.team1 if bot else state.team2
    foe = state.team2 if bot else state.team1
    # Noms des Pokémon actifs des deux camps
    active_name = state.active1 if bot else state.active2
    foe_name = state.active2 if bot else state.active1

    mon = team.pokemons[active_name]
    opp = foe.pokemons[foe_name]

    def team_hp_ratio(team):
        # Calcule la moyenne des ratios HP actuels / HP max sur tous les Pokémon vivants de l’équipe
        ratios = [pk.current_hp / pk.max_hp for pk in team.pokemons.values() if pk.max_hp > 0]
        return sum(ratios) / len(ratios) if ratios else 0.0

    # Ratios HP moyen pour le camp du joueur et celui de l’adversaire
    team_ratio = team_hp_ratio(team)
    foe_ratio = team_hp_ratio(foe)

    # Pression offensive : moyenne des dégâts possibles des attaques disponibles (normalisés)
    offensive_pressure = sum(
        ((mv.get("dmg", 0) / opp.max_hp) if opp.max_hp > 0 else 0)
        for mv in mon.moves.values()
        if mv["pp"] > 0
    ) / max(1, len(mon.moves))

    # Stabilité défensive : aucune attaque adverse ne fait plus de 30% de nos PV
    defensive_stability = opp.max_hp > 0 and all(
        mv.get("dmg", 0) < mon.max_hp * 0.3
        for mv in opp.moves.values()
        if mv["pp"] > 0
    )

    # Score initial : différence de ratio HP multipliée par 100
    score = (team_ratio - foe_ratio) * 100

    # Bonus si la pression offensive est notable
    if offensive_pressure > 0.3:
        score += 20
    if offensive_pressure > 0.5:
        score += 35
    if defensive_stability:
        score += 19

    # Sanction en cas d’inertie stratégique : pas de pression et pas de danger
    if offensive_pressure < 0.2 and defensive_stability:
        score -= 15

    # Bonus si un move disponible peut mettre KO l’adversaire actif
    for mv in mon.moves.values():
        if mv["pp"] > 0 and mv.get("dmg", 0) >= opp.current_hp:
            score += 60
            break

    # BONUS : inciter dynamiquement à attaquer selon le move le plus puissant disponible
    if opp.max_hp > 0:
        best_damage_ratio = max(
            (mv.get("dmg", 0) / opp.max_hp for mv in mon.moves.values() if mv["pp"] > 0),
            default=0
        )
        score += 10 * best_damage_ratio

    # Bonus par Pokémon adverse déjà éliminé
    fainted_count = sum(1 for p in foe.pokemons.values() if p.current_hp == 0)
    score += fainted_count * 10

    # PÉNALITÉ : move sélectionné fait strictement rien (ex: Haze sans statuts, Flash sur paralysé...)
    useless_moves = [mv for mv in mon.moves.values() if mv["pp"] > 0 and mv.get("dmg", 0) == 0]
    if len(useless_moves) == len(mon.moves):
        score -= 25

    # Opportunisme : l’adversaire est à <20% et on a un move de pression
    if opp.current_hp < mon.max_hp * 0.2 and offensive_pressure > 0.3:
        score += 20

    # Pénalité si on n’a aucun move utile avec puissance ET dégâts
    no_real_dmg_moves = [
        mv for mv in mon.moves.values()
        if mv["pp"] > 0 and mv.get("power", 0) > 0 and mv.get("dmg", 0) > 0
    ]

    if not no_real_dmg_moves:
        remaining_foe = sum(1 for p in foe.pokemons.values() if p.current_hp > 0)
        malus = remaining_foe * 3.5  # 1 poke = -3.5, 6 pokes = -21
        score -= malus

    return round(score, 2)




def evaluate_interaction(
    state: SimulatedBattleState,
    bot_action: str,
    adv_action: str
) -> Dict[str, Any]:
    """
       Simule une interaction complète entre une action choisie par le bot (attaque ou switch)
       et une action supposée de l’adversaire, puis évalue l’état résultant pour les deux camps.

       Cette fonction est utilisée à chaque nœud de l’arbre MinMax pour explorer toutes les branches
       possibles à un tour donné. Elle applique une paire (bot_action, adv_action) sur l’état courant,
       puis calcule :
       - l’état du combat après exécution
       - un score heuristique pour le bot (évaluation stratégique de la position obtenue)
       - un score pour l’adversaire
       - un score net différentiel (positif si l’échange est favorable au bot).

       Détail du calcul :
       1. simulate_turn(...) : applique les deux actions sur une copie profonde de l’état simulé.
       2. evaluate_from_perspective(bot=True) : attribue un score heuristique au bot en prenant
          en compte PV restants, pression offensive, présence de menaces létales, et stabilité.
       3. evaluate_from_perspective(bot=False) : score équivalent pour l’adversaire.
       4. Différentiel pondéré :
           - Le score net est calculé comme `(score_bot - score_adv) * ratio`
           - ratio = max(1.0, nb_pokémon_vivants_bot / nb_pokémon_vivants_adversaire)
           - Ce facteur accentue la valeur des échanges positifs lorsqu'on est en surnombre.

       Retour :
           Le résultat est un dictionnaire contenant l’état résultant, les deux actions,
           les scores bruts des deux camps, et le score net.

       Exemple de structure retournée :
           {
               "state": SimulatedBattleState,
               "score_bot": 45.5,
               "score_adv": 28.0,
               "net": 22.5,
               "bot_action": "flamethrower",
               "adv_action": "SWITCH:Gengar"
           }

       Args:
           state (SimulatedBattleState): État initial du combat simulé.
           bot_action (str): Action du bot (ex: "thunderbolt" ou "SWITCH:Snorlax").
           adv_action (str): Action de l’adversaire simulée en face.

       Returns:
           Dict[str, Any]: Résultat complet de l’interaction : état simulé, scores, et actions.
       """
    # Simule le tour complet avec les deux actions
    next_state = simulate_turn(state, bot_action, adv_action)

    # Évalue les deux perspectives sur le nouvel état
    score_bot = evaluate_from_perspective(next_state, bot=True)
    score_adv = evaluate_from_perspective(next_state, bot=False)

    # Nombre de Pokémon encore en vie dans chaque équipe (important pour le ratio)
    bot_alive = sum(1 for p in state.team1.pokemons.values() if p.current_hp > 0)
    adv_alive = sum(1 for p in state.team2.pokemons.values() if p.current_hp > 0)

    # Ratio de supériorité numérique : favorise le bot si en surnombre
    ratio = max(1.0, bot_alive / max(1, adv_alive))

    # Calcul du score net : écart pondéré entre les deux évaluations
    net_advantage = (score_bot - score_adv) * ratio

    # Retourne un dictionnaire complet contenant toutes les informations de l’interaction
    return {
        "state": next_state,
        "score_bot": score_bot,
        "score_adv": score_adv,
        "net": net_advantage,
        "bot_action": bot_action,
        "adv_action": adv_action
    }

def generate_all_interactions(state: SimulatedBattleState) -> List[Dict[str, Any]]:
    """
    Génère et évalue toutes les interactions possibles entre les actions du bot et celles
    de l’adversaire à partir d’un état simulé.

    Cette fonction est le point d’entrée de l’arbre de décision MinMax : elle explore toutes
    les combinaisons (bot_action, adv_action) autorisées à ce tour et appelle
    `evaluate_interaction()` pour chacune, afin d’enregistrer :
        - l’état résultant de l’interaction simulée
        - le score du bot
        - le score de l’adversaire
        - un score net différentiel

    Traitement particulier :
    - Si le bot a ≥ 2 Pokémon encore vivants :
        - on filtre les attaques qui sont jugées inutiles :
            - moves avec power <= 1
            - moves totalement inefficaces (immunité défensive adverse)
        - Cela empêche l’IA de choisir des attaques passives ou nulles alors qu’elle a des ressources.

    Structure de retour :
        Liste de dictionnaires contenant :
            {
                "state": SimulatedBattleState après simulation,
                "score_bot": score brut du bot,
                "score_adv": score brut de l’adversaire,
                "net": score différentiel pondéré,
                "bot_action": str,
                "adv_action": str
            }

    Args:
        state (SimulatedBattleState): État du combat au début du tour.

    Returns:
        List[Dict[str, Any]]: Liste des interactions simulées (une par couple d’actions valides).
    """

    # Initialise la liste des interactions possibles pour ce tour
    interactions = []

    # Récupère toutes les actions légales disponibles pour le bot
    bot_actions = state.get_legal_actions(bot=True)
    # Récupère toutes les actions possibles pour l’adversaire
    adv_actions = state.get_legal_actions(bot=False)

    # Si le bot a encore au moins deux Pokémon → on peut filtrer les moves faibles ou inutiles
    bot_alive = sum(1 for p in state.team1.pokemons.values() if p.current_hp > 0)
    if bot_alive <= 1:
        def is_move_valid(action):
            # Switchs toujours autorisés
            if action.startswith("SWITCH:"):
                return False

            # Récupération du Pokémon actif
            active_name = state.active1
            active = state.team1.pokemons.get(active_name)
            if not active:
                return False

            # Vérification du move
            move = active.moves.get(action)

            # Move sans puissance (ex: statut, Splash, etc.)
            if not move:
                return False
            if move.get("power", 0) <= 1:
                return False

            # Vérification immunité : si le move est totalement inefficace contre l’adversaire
            defender = state.team2.pokemons.get(state.active2)
            if defender:
                modifier = get_type_modifier(move["type"], [defender.stats.get("type1", "normal")])
                if modifier == 0.0:
                    return False
            return True

        # Filtrage des actions faibles/inutiles
        bot_actions = [a for a in bot_actions if is_move_valid(a)]

    # Produit cartésien des actions : chaque paire (bot_action, adv_action) est évaluée
    for bot_action in bot_actions:
        for adv_action in adv_actions:
            interaction_result = evaluate_interaction(state, bot_action, adv_action)
            interactions.append(interaction_result)

    return interactions

def minmax(state: SimulatedBattleState, depth: int = 2, tour: int = 1) -> Tuple[float, str, Dict[str, Any], List[Tuple[str, str]]]:
    """
    Explore récursivement l’arbre des décisions possibles à partir d’un état donné
    en simulant chaque combinaison d’actions simultanées (bot vs adversaire),
    jusqu’à une profondeur spécifiée.

    Contrairement à un algorithme MinMax classique où les joueurs agissent l’un après l’autre,
    ici chaque nœud de l’arbre représente une **interaction simultanée** :
        → Le bot choisit une action (attaque ou switch)
        → L’adversaire aussi
        → Les deux sont appliquées en même temps via `simulate_turn`

    Ce modèle correspond au format Showdown : **les ordres sont choisis simultanément, mais résolus
    selon la priorité des moves et la vitesse**, ce qui génère un arbre de type "matrice" :
        - 4 actions du bot × 4 actions adverses → 16 branches par niveau (ou plus avec les switchs).

    L’algorithme fonctionne de manière descendante :
    - à chaque niveau, il génère toutes les interactions (`generate_all_interactions`)
    - pour chaque interaction, il simule l’état résultant
    - il appelle `minmax` récursivement jusqu’à la profondeur cible
    - puis il remonte le meilleur score (maximisant pour le bot)

    Le meilleur chemin est sauvegardé et retourné pour permettre à l’IA de suivre
    la séquence optimale calculée.

    Args:
        state (SimulatedBattleState): État actuel du combat simulé.
        depth (int): Profondeur maximale de l'arbre (en nombre de tours simulés).
        tour (int): Numéro du tour (utilisé pour initialiser le dossier de sauvegarde).

    Returns:
        Tuple contenant :
            - best_score (float) : score final retenu pour l’action choisie
            - best_action (str)  : move ou switch choisi pour le bot à ce tour
            - tree (dict)        : arbre complet des évaluations
            - best_path (List[Tuple[str, str]]) : suite optimale d’actions (bot, adv) jusqu’à la feuille
    """

    # Initialisation du dossier de sortie à la racine de l’arbre (tour 1 uniquement)
    # Ce bloc supprime l’ancien dossier "minmax/" (contenant les arbres précédents) et recrée un dossier vide pour stocker les nouveaux résultats simulés de ce match.
    if tour == 1:
        output_dir = "minmax"
        if os.path.exists(output_dir):
            shutil.rmtree(output_dir)
        os.makedirs(output_dir, exist_ok=True)

    # Cas terminal : on évalue simplement l’état (pas d’action à choisir ici)
    if depth == 0:
        score = evaluate_from_perspective(state, bot=True)
        return score, "", {}, []


    # Initialisation des structures de résultat
    tree = {}
    best_action = None
    best_score = -float("inf")
    best_path = []

    bot_actions = state.get_legal_actions(bot=True)
    if not bot_actions:
        return 0.0, "none", {}, []

    # Génère toutes les combinaisons d’actions bot × adv (simultané)
    all_interactions = generate_all_interactions(state)

    # Parcours chaque interaction simulée
    for interaction in all_interactions:
        bot_action = interaction["bot_action"]
        adv_action = interaction["adv_action"]
        next_state = interaction["state"]

        # Appel récursif : si profondeur > 1, on redescend l’arbre
        if depth > 1:
            sub_score, _, subtree, subpath = minmax(next_state, depth - 1, tour)
        else:
            sub_score = interaction["net"]
            subtree = {}
            subpath = []

        # Clé de branche unique = action_bot|action_adv
        key = f"{bot_action}|{adv_action}"
        tree[key] = {
            "score": sub_score,
            "subtree": subtree,
            "best_path": subpath
        }

        # Arborescence secondaire indexée par action du bot
        if bot_action not in tree:
            tree[bot_action] = {}
        tree[bot_action][key] = tree[key]


    # Regroupement des interactions par action du bot
    grouped_by_bot: Dict[str, List[Tuple[str, float, Dict[str, Any], List[Tuple[str, str]]]]] = {}
    for key, data in tree.items():
        if "|" not in key:
            continue
        bot_action, adv_action = key.split("|")
        grouped_by_bot.setdefault(bot_action, []).append((adv_action, data["score"], data["subtree"], data["best_path"]))


    # Sélection prudente : pour chaque action du bot, on prend son pire cas adverse
    # Puis on choisit le bot_action dont le pire cas est le moins mauvais
    for bot_action, sublist in grouped_by_bot.items():
        # On suppose que l’adversaire choisit le pire pour nous
        worst_case = min(sublist, key=lambda x: x[1])
        worst_adv_action, score, _, subpath = worst_case

        if score > best_score:
            best_score = score
            best_action = bot_action
            best_path = [(bot_action, worst_adv_action)] + subpath

    return best_score, best_action, tree, best_path

def minmax_alphabeta(state: SimulatedBattleState, depth: int, tour: int, alive_count: Optional[int] = None, keep_ratio: float = 0.25):
    """
    Variante optimisée de l’algorithme MinMax appliquée à des décisions simultanées (bot vs adversaire),
    avec une réduction du nombre d’interactions explorées par élagage probabiliste.

    Contrairement au MinMax traditionnel :
    - les deux joueurs choisissent leurs actions en même temps
    - les branches de l’arbre sont construites à partir du produit cartésien des actions
    - l’exploration n’est pas séquentielle mais matricielle (toutes les paires d’actions sont simulées)

    Dans cette version :
    - on ne réalise **pas de vrai élagage alpha-bêta structurel** (comme dans un arbre séquentiel),
    - on applique plutôt un **filtrage a priori** des branches à explorer :
        • on groupe les interactions par action du bot,
        • pour chaque action, on prend le **pire cas (adversaire le plus dangereux)**,
        • on conserve uniquement les `keep_ratio` meilleures actions bot (au sens du pire cas).

    Cela réduit le nombre total de branches explorées **sans jamais modifier l’ordre d’évaluation**.

    Ce filtre est appliqué **uniquement si le nombre total de Pokémon vivants est > 6** (mi-match),
    pour éviter une perte de qualité en début ou fin de combat.

    Args:
        state (SimulatedBattleState): État simulé à la racine de l’arbre.
        depth (int): Profondeur maximale de l’arbre (en nombre de tours à simuler).
        tour (int): Numéro du tour (non utilisé ici mais requis pour homogénéité).
        alive_count (int): Nombre total de Pokémon vivants dans les deux camps (pour activer le filtre).
        keep_ratio (float): Proportion d’actions du bot à conserver (filtrage)

    Returns:
        Tuple contenant :
            - best_score (float) : score maximal atteint selon la politique prudente,
            - best_action (str)  : action du bot à exécuter (attaque ou switch),
            - tree (dict)        : arbre JSON complet des branches explorées,
            - best_path (List[Tuple[str, str]]) : chemin optimal des paires (bot, adv) retenues.
    """

    # Cas terminal : plus de profondeur à explorer donc on évalue l’état actuel
    if depth == 0:
        score = evaluate_from_perspective(state, bot=True)
        return score, "", {}, []

    tree = {}
    best_action = None
    best_score = -float("inf")
    best_path = []

    # Actions disponibles pour le bot
    bot_actions = state.get_legal_actions(bot=True)
    if not bot_actions:
        return -500.0, "none", {}, []

    # Génère toutes les paires d’interactions (bot × adv)
    all_interactions = generate_all_interactions(state)


    # Si le combat est en milieu de partie (suffisamment de Pokémon vivants), on filtre les actions bot
    if alive_count is not None and alive_count > 6:
        # Regroupement des interactions par action du bot
        grouped = {}
        for interaction in all_interactions:
            bot_action = interaction["bot_action"]
            grouped.setdefault(bot_action, []).append(interaction)

        # Évaluation "minimale" (pire cas) de chaque action bot
        bot_scores = {}
        for bot_action, inter_list in grouped.items():
            worst = min(inter_list, key=lambda x: x["net"])
            bot_scores[bot_action] = worst["net"]

        # Sélection des meilleurs (keep_ratio%) actions bot selon ce score
        sorted_actions = sorted(bot_scores.items(), key=lambda x: x[1], reverse=True)
        keep_count = max(1, int(len(sorted_actions) * keep_ratio))
        selected_bot_actions = set(k for k, _ in sorted_actions[:keep_count])

        filtered_interactions = [i for i in all_interactions if i["bot_action"] in selected_bot_actions]
    else:
        filtered_interactions = all_interactions

    # Parcours chaque interaction simulée
    for interaction in filtered_interactions:
        bot_action = interaction["bot_action"]
        adv_action = interaction["adv_action"]
        next_state = interaction["state"]

        # Appel récursif : si profondeur > 1, on redescend l’arbre
        if depth > 1:
            sub_score, _, subtree, subpath = minmax_alphabeta(next_state, depth - 1, tour, alive_count, keep_ratio)
        else:
            sub_score = interaction["net"]
            subtree = {}
            subpath = []

        # Clé de branche unique = action_bot|action_adv
        key = f"{bot_action}|{adv_action}"
        tree[key] = {
            "score": sub_score,
            "subtree": subtree,
            "best_path": subpath
        }

        # Arborescence secondaire indexée par action du bot
        if bot_action not in tree:
            tree[bot_action] = {}
        tree[bot_action][key] = tree[key]

    # Regroupement des interactions par action du bot
    grouped_by_bot = {}
    for key, data in tree.items():
        if "|" not in key:
            continue
        bot_action, adv_action = key.split("|")
        grouped_by_bot.setdefault(bot_action, []).append((adv_action, data["score"], data["subtree"], data["best_path"]))

    # Sélection prudente : pour chaque action du bot, on prend son pire cas adverse
    # Puis on choisit le bot_action dont le pire cas est le moins mauvais
    for bot_action, sublist in grouped_by_bot.items():
        worst_case = min(sublist, key=lambda x: x[1])
        worst_adv_action, score, _, subpath = worst_case

        if score > best_score:
            best_score = score
            best_action = bot_action
            best_path = [(bot_action, worst_adv_action)] + subpath

    return best_score, best_action, tree, best_path

