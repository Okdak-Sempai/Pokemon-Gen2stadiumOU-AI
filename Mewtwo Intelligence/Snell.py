"""
Snell.py

Ce module définit une [IA] de combat Pokémon basée sur poke-env, utilisée dans le format
[Gen 2] Stadium OU. Il implémente la classe `Snell`, qui hérite de `poke_env.player.Player`,
et permet à une IA de :
- recevoir les états de combat à chaque tour,
- mettre à jour sa représentation interne de l’état (`BattleState`),
- convertir l’état observé en un état simulable (`SimulatedBattleState`),
- choisir une action (attaque ou switch) selon une stratégie définie (naïve, simplet, minmax...).

Cette IA utilise :
- un modèle de log (`battle_chat.log`) pour détecter les actions passées de l'adversaire,
- l’API Smogon (`DammageCalcSMOGON.py`) pour évaluer les dégâts réels des attaques,
- un arbre de décision (`DammagePredict.py`) pour simuler plusieurs tours à l’avance,
- des fichiers d’équipe (`TeamManager.py`) pour charger dynamiquement les équipes valides.

La classe est utilisée comme bot dans les fichiers :
- `Mewtwo.py` : pour lancer des duels entre IA.
- `generate_ai_teams.py` : pour tester la robustesse des stratégies.

Stratégies implémentées :
- "naive"     : sélection aléatoire.
- "simplet"   : MinMax de profondeur 1.
- "minmax"    : MinMax brut avec exploration complète.
- "minmaxalphabeta" : MinMax avec élagage alpha-bêta et filtrage dynamique des branches.

Fichiers de sauvegarde :
- chaque tour simulé est enregistré dans un fichier JSON (un par stratégie),
  permettant d’analyser les décisions et les branches explorées.
"""

import asyncio
import json
import os
import time
from poke_env.player import Player
from poke_env.environment.abstract_battle import AbstractBattle
import BattleState
from TeamManager import create_team
from DammageCalcSMOGON import calculate_showdown_damage
from DammagePredict import minmax, minmax_alphabeta
from log_watcher import watch_moves_from_log, get_moves_by_pokemon
from sentence_transformers import SentenceTransformer, util
from difflib import get_close_matches
import unicodedata
from DammagePredict import DEFAULT_MINMAX_KEEP_RATIO

# Modèle de vectorisation utilisé pour associer les noms d’attaques observés aux noms normalisés
model = SentenceTransformer("all-MiniLM-L6-v2")

def remove_problematic_chars(text):
    """
       Nettoie une chaîne de caractères en supprimant les caractères de contrôle non imprimables.
       Utilisé pour éviter les erreurs d’écriture dans les fichiers JSON ou les logs.
    """
    return ''.join(c for c in text if unicodedata.category(c)[0] != 'C' or c == '\n')

class Snell(Player):
    """
    Implémentation principale d'une IA Pokémon basée sur poke-env pour le format Gen 2 Stadium OU.

    Cette classe hérite de `poke_env.player.Player` et est instanciée en tant que bot Showdown.
    Elle représente un joueur IA capable d'interagir avec un combat en temps réel, de traiter
    l’état observé à chaque tour, de construire une représentation simulable, et de choisir
    une action stratégique.

    Le cœur de la logique de décision se trouve dans la méthode `choose_move`, qui sélectionne
    un move en fonction de la stratégie spécifiée.

    Trois stratégies de décision sont prises en charge :
    - "simplet" : MinMax de profondeur 1, sans élagage.
    - "minmax" : MinMax standard avec exploration exhaustive de l'arbre de décision.
    - "minmaxalphabeta" : MinMax avec élagage alpha-bêta et réduction dynamique des branches
                          selon le nombre de Pokémon restants et un ratio `keep_ratio`.

    La stratégie "naive" n’est pas une stratégie réelle, mais une valeur par défaut utilisée
    pour signaler une absence de logique IA spécifique. Dans ce cas, la fonction `choose_random_move`
    peut être appelée si aucun état n'est construit.

    Attributs principaux :
    - `state` : instance de BattleState (vue réelle).
    - `simulated_state` : instance de SimulatedBattleState (copie modifiable pour simulations).
    - `strategy` : stratégie sélectionnée ("simplet", "minmax", etc.).
    - `depth` : profondeur de recherche utilisée pour l'arbre MinMax.
    - `keep_ratio` : ratio de filtrage des branches conservées (utilisé en alpha-bêta).
    - `real_start_time` : temps du premier tour pour mesurer la durée réelle d’un match.
    - `last_seen_log_count` : pointeur de position dans le log pour lire uniquement les nouvelles lignes.
    """
    def __init__(self, *args, strategy="naive", depth=2,keep_ratio: float = DEFAULT_MINMAX_KEEP_RATIO, **kwargs):
        """
        Initialise l'IA Snell avec une stratégie spécifique, une profondeur de recherche et une équipe.

        L’équipe est soit fournie en argument via `team`, soit générée dynamiquement depuis `TeamManager`.

        Args:
            strategy (str): Nom de la stratégie à utiliser. Doit être l'une des suivantes :
                            "naive", "simplet", "minmax", "minmaxalphabeta".
            depth (int): Profondeur de recherche utilisée par MinMax.
            keep_ratio (float): Pourcentage des meilleures actions conservées en alpha-bêta (filtrage).
            kwargs: Arguments transmis à la classe Player, notamment account_configuration et team.
        """

        # Force le format de combat à Gen 2 Stadium OU
        kwargs["battle_format"] = "gen2stadiumou"

        # Chargement de l’équipe à utiliser (si non fournie)
        self.my_team_txt = kwargs.get("team", create_team())
        kwargs["team"] = self.my_team_txt

        # Initialisation de la classe Player
        super().__init__(*args, **kwargs)

        # Initialisation des attributs d’état
        self.state = None
        self.simulated_state = None
        self.strategy = strategy
        self.depth = max(1, depth)
        self.last_seen_log_count = 0
        self.keep_ratio = keep_ratio
        self.real_start_time = None

    def flush_log_file(self):
        """
        Réinitialise le fichier de log `battle_chat.log` en le vidant de tout son contenu.

        Cette méthode est appelée automatiquement au début de chaque match (tour 1)
        afin de garantir que seules les lignes de log du match en cours soient analysées
        lors de la surveillance des attaques passées.

        Elle est essentielle pour que le décrément automatique des PP par détection textuelle
        (via `watch_moves_from_log` et `get_moves_by_pokemon`) ne soit pas faussé par des traces
        de combats précédents.

        Ce fichier est ensuite alimenté automatiquement par le simulateur Showdown.
        """
        open("battle_chat.log", "w", encoding="utf-8").close()

    def choose_move(self, battle: AbstractBattle):
        """
        Point d’entrée principal appelé à chaque tour pour sélectionner une action (attaque ou switch).

        Cette méthode implémente la logique de prise de décision complète de l’IA en fonction :
        - des informations observées dans le combat (`battle`) ;
        - de la stratégie choisie lors de l’instanciation ;
        - de l’état simulé reconstruit à partir des informations précédentes ;
        - des résultats passés (PP, actions, log surveillé) pour ajuster le modèle.

        Étapes internes :
        1. Enregistre le temps du premier tour (pour évaluer les performances).
        2. Vide les logs si c’est le début du match.
        3. Initialise et met à jour l’état réel (`BattleState`), puis reconstruit une copie simulable.
        4. Surveille les logs texte pour décrémenter les PP en fonction des attaques observées.
        5. Selon la stratégie choisie :
           - simule tous les coups possibles (simplet / minmax / alphabeta),
           - évalue les états futurs,
           - sélectionne l’action avec le meilleur score.
        6. Retourne l’ordre correspondant à l’action sélectionnée.

        En cas d’erreur (move introuvable, switch indisponible), un fallback vers `choose_random_move` est utilisé.

        Args:
            battle (AbstractBattle): Instance fournie automatiquement par poke-env à chaque tour.

        Returns:
            BattleOrder: Action à exécuter (attaque ou switch), ou mouvement aléatoire si aucun choix valide.
        """

        # Enregistrement du temps de début du match pour mesurer la durée totale à la fin
        if battle.turn == 1 and self.real_start_time is None:
            self.real_start_time = time.perf_counter()

        # Affichage du contexte de tour dans la console pour traçabilité
        print(f"\nTour {battle.turn} | Stratégie: {self.strategy.upper()} | [TAG] {battle.battle_tag}")
        print(f"https://localhost-8001.psim.us/{battle.battle_tag}")

        # Si c’est le tout début du match (tour 1), on réinitialise le fichier de log texte
        if battle.turn == 1:
            self.flush_log_file()

        # Si les deux Pokémon actifs ne sont pas encore révélés, on ne peut rien faire
        if not battle.active_pokemon or not battle.opponent_active_pokemon:
            print("En attente du début du match réel (team preview)...")
            return self.choose_random_move(battle)

        # Si l'état initial n'a pas encore été construit, on le fait une seule fois
        if self.state is None:
            self.state = BattleState.BattleState(battle)
            self.simulated_state = self.state.get_simulation_state()

        # Mise à jour de l'état avec les nouvelles informations du tour actuel
        self.state.update()


        # Traitement du log texte pour mettre à jour les PP des attaques utilisées

        # Lecture du fichier de log depuis la dernière position connue
        all_log_moves = watch_moves_from_log()
        log_moves = get_moves_by_pokemon(all_log_moves[self.last_seen_log_count:])

        # Pour chaque camp ("p1a", "p2a"), on décrémente les PP du Pokémon qui a attaqué
        for side, mons in log_moves.items():
            team = self.state.team1 if side == "p1a" else self.state.team2
            for raw_mon_name, used_moves in mons.items():
                # Normalisation du nom de Pokémon (pour corriger les accents ou variantes typographiques)
                normalized = raw_mon_name.lower().replace("’", "").replace("'", "").replace(" ", "")
                possible_keys = list(team.keys())
                # Recherche de la meilleure correspondance par similarité (ex : "farfetchd" ≈ "farfetch’d")
                match_key = get_close_matches(normalized, possible_keys, n=1, cutoff=0.6)
                if not match_key:
                    continue
                mon_data = team[match_key[0]]

                # Pour chaque attaque utilisée, décrément du PP du move le plus similaire dans le set connu
                for used_move in used_moves:
                    used_move_lower = used_move.lower()
                    candidate_names = [m["name"].lower() for m in mon_data["moves"].values()]

                    if not candidate_names:
                        print(
                            f"Aucun move enregistré pour {raw_mon_name} côté {side}, impossible de décrémenter '{used_move}'")
                        continue

                    # Encodage et calcul de similarité entre l'attaque utilisée et celles du set
                    embeddings = model.encode([used_move_lower] + candidate_names)
                    sim_scores = util.cos_sim(embeddings[0], embeddings[1:])[0]

                    if sim_scores.numel() == 0:
                        print(
                            f"Aucune similarité calculable entre '{used_move_lower}' et les moves de {raw_mon_name}")
                        continue

                    # Sélection de l'attaque la plus proche (par similarité vectorielle) et décrément du PP
                    best_idx = sim_scores.argmax().item()
                    best_key = list(mon_data["moves"].keys())[best_idx]
                    mon_data["moves"][best_key]["pp"] = max(0, mon_data["moves"][best_key]["pp"] - 1)



        # Conversion de l’état mis à jour en une version simulable (copiable pour exploration)
        self.simulated_state = self.state.get_simulation_state()



        # Bloc de sélection d’action via arbre de décision [STRATEGIES]
        if self.strategy in ["minmax", "minmaxalphabeta","simplet"]:
            start = time.perf_counter()

            if self.strategy == "minmax":
                # MinMax brut sans élagage
                score, action, full_tree, best_path = minmax(
                    self.simulated_state, depth=self.depth, tour=battle.turn
                )
                save_folder = "minmax"
            elif self.strategy == "minmaxalphabeta":
                # MinMax avec élagage Alpha-Bêta, et filtrage dynamique selon `keep_ratio`
                alive_count = self.simulated_state.count_total_alive_pokemons()
                score, action, full_tree, best_path = minmax_alphabeta(
                    self.simulated_state, depth=self.depth, tour=battle.turn, alive_count=alive_count, keep_ratio=self.keep_ratio
                )
                save_folder = "minmaxalphabeta"
            elif self.strategy == "simplet":
                # Stratégie fixe : MinMax profondeur 1
                score, action, full_tree, best_path = minmax(self.simulated_state, depth=1, tour=battle.turn)
                save_folder = "simplet"

            # Sauvegarde de l’arbre JSON dans un dossier spécifique à la stratégie
            os.makedirs(save_folder, exist_ok=True)
            # Ajoute suffixe unique basé sur le nom de l'utilisateur (ex: Snell_Lv2_B → _Lv2_B)
            suffix = self.username.replace("Snell", "").replace(" ", "")  # _Lv2_B
            path = os.path.join(save_folder, f"turn_{battle.turn}_{self.strategy}{suffix}.json")

            with open(path, "w", encoding="utf-8") as f:
                json.dump(full_tree, f, indent=2, ensure_ascii=False)

            t_exec = time.perf_counter() - start

            print(f"Simulation profondeur {self.depth} | Durée: {t_exec:.2f}s")

            # Affichage du chemin choisi dans l’arbre (meilleure séquence d’actions sur plusieurs tours)
            log_line = []
            subtree = full_tree
            active_bot = self.simulated_state.active1
            active_adv = self.simulated_state.active2

            for i, (bot_action, adv_action) in enumerate(best_path, 1):
                subtree = subtree.get(f"{bot_action}|{adv_action}", {})
                score_i = subtree.get("score") if isinstance(subtree, dict) else None

                bot_name = self.simulated_state.team1.pokemons[active_bot].name
                adv_name = self.simulated_state.team2.pokemons[active_adv].name

                if bot_action.startswith("SWITCH:"):
                    bot_desc = f"SWITCH→{bot_action.split(':')[1].capitalize()}"
                else:
                    bot_desc = f"{bot_name}→{adv_name}({bot_action})"

                if adv_action.startswith("SWITCH:"):
                    adv_desc = f"SWITCH→{adv_action.split(':')[1].capitalize()}"
                else:
                    adv_desc = f"{adv_name}→{bot_name}({adv_action})"

                log_line.append(f"T{i}: B:{bot_desc} | A:{adv_desc} | S:{score_i:.1f}" if score_i is not None else f"T{i}: B:{bot_desc} | A:{adv_desc}")

                if bot_action.startswith("SWITCH:"):
                    active_bot = bot_action.split(":")[1].lower()
                if adv_action.startswith("SWITCH:"):
                    active_adv = adv_action.split(":")[1].lower()

            print(" > " + " || ".join(log_line))
            safe_score = 0.0 if score in (-float("inf"), float("inf")) or not isinstance(score, (int, float)) else score
            print(f"Action jouée: {action} | Score final: {safe_score:.2f}")

            if not isinstance(action, str):
                print("[WARNING] Aucune action valide détectée, fallback aléatoire.")
                return self.choose_random_move(battle)


            # Traduction de l'action sélectionnée en commande poke-env
            if action.startswith("SWITCH:"):
                species = action.split(":")[1]
                for switch in battle.available_switches:
                    if switch.species.lower() == species:
                        return self.create_order(switch)
                print("Switch non trouvé, fallback aléatoire.")
                return self.choose_random_move(battle)

            for move in battle.available_moves:
                if move.id == action:
                    return self.create_order(move)

            # Si aucune stratégie définie ou état non initialisé correctement
            print("Move introuvable, fallback aléatoire.")
            return self.choose_random_move(battle)