"""
BattleState.py

Ce module définit les structures de données utilisées pour représenter un état complet de combat Pokémon
dans le format [Gen 2] Stadium OU. Il fournit à la fois :

- une vue "temps réel" du combat (classe BattleState) alimentée à chaque tour à partir de `poke-env`
- une vue "simulée" (classe SimulatedBattleState) utilisée par les IA pour explorer les conséquences
  d'une action via MinMax, sans affecter la vraie partie.

Le module est essentiel pour :
- synchroniser l'état observé depuis le simulateur avec les structures IA (via la méthode update)
- convertir l’état courant en un état clonable, manipulable pour simulations
- suivre les PV, statuts, boosts, PP et attaques de chaque Pokémon

Utilisé notamment dans :
- Snell.py → chargement initial de l’état
- DammagePredict.py → simulation et évaluation d’actions
"""

import sys
import os
from poke_env.environment import AbstractBattle
from poke_env.environment.move import Move
from MoveResolver import get_moves_for_pokemon
from BaseHP import get_pokemon_max_hp
from typing import Optional, List

# Ajout du dossier courant au path pour éviter les erreurs d'import relatif
sys.path.append(os.path.dirname(__file__))

def find_opponent_key(species: str, team: dict) -> Optional[str]:
    """
    Recherche la clé d'un Pokémon adverse à partir de son nom d'espèce.

    Cette fonction est utilisée dans des contextes où un nom d'espèce observé (souvent
    dans les logs du simulateur ou via une détection floue) doit être associé à une
    entrée spécifique dans le dictionnaire de l'équipe adverse. Cela permet par exemple
    de décrémenter correctement les PP d'une attaque utilisée.

    Args:
        species (str): Nom d'espèce à rechercher (en minuscules ou insensible à la casse).
        team (dict): Dictionnaire représentant l'équipe adverse.

    Returns:
        Optional[str]: Clé du Pokémon correspondant si trouvée, sinon None.
    """
    species = species.lower()
    for key in team.keys():
        if key.lower().endswith(species):
            return key
    return None

class MoveData:
    """
    Structure représentant un move d’un Pokémon, avec PP, puissance, précision, type, catégorie et priorité
    Utilisée dans les états simulés.
    """
    def __init__(self, name, pp, power, accuracy=100, move_type="normal", category="physical", priority=0):
        self.name = name
        self.pp = pp
        self.power = power
        self.accuracy = accuracy
        self.type = move_type
        self.category = category
        self.priority = priority

    def copy(self):
        """
        Crée une copie indépendante du move (utilisé dans les clones d’états simulés).
        """
        return MoveData(
            self.name,
            self.pp,
            self.power,
            self.accuracy,
            self.type,
            self.category,
            self.priority
        )

class PokemonData:
    """
    Structure représentant un Pokémon dans un état simulé.
    Contient ses PV, statuts, boosts, attaques, confusion et autres états.
    """
    def __init__(self, name, current_hp, max_hp, status, moves, confused=False, boosts=None, stats=None,charging_move=None):
        self.name = name
        self.current_hp = current_hp
        self.max_hp = max_hp
        self.status = status
        self.confused = confused
        # Chaque move est une instance de MoveData
        self.moves = {k: v.copy() for k, v in moves.items()}
        self.boosts = boosts or {"atk": 0, "def": 0, "spa": 0, "spd": 0, "spe": 0}
        self.stats = stats or {"atk": 50, "def": 50, "spa": 50, "spd": 50, "spe": 50}
        self.charging_move = charging_move


    def copy(self):
        """
        Retourne une copie indépendante du Pokémon.
        """
        return PokemonData(
            self.name,
            self.current_hp,
            self.max_hp,
            self.status,
            self.moves,
            self.confused,
            self.boosts.copy(),
            self.stats.copy(),
            charging_move=self.charging_move
        )


class Team:
    """
    Conteneur pour une équipe complète de Pokémon (6 maximum).
    """
    def __init__(self, pokemons: dict):
        # Les Pokémon sont stockés par nom (clé) → PokémonData (valeur)
        self.pokemons = {name: poke.copy() for name, poke in pokemons.items()}

    def copy(self):
        """
        Retourne une copie indépendante de l’équipe.
        """
        return Team(self.pokemons)

class SimulatedBattleState:
    """
    Représente un état de combat abstrait, utilisé exclusivement pour les simulations
    d'actions et la prise de décision par les intelligences artificielles (MinMax, Alpha-Beta).

    Cette structure est dérivée de l’état réel observé dans BattleState, mais peut être modifiée,
    clonée ou altérée librement pour évaluer les conséquences d’une action sans affecter la partie en cours.

    Elle contient :
    - deux objets Team représentant les équipes du bot et de l’adversaire, avec tous leurs Pokémon,
    - un attribut 'weather' pouvant être utilisé pour les conditions climatiques
    - deux identifiants (active1 et active2) désignant les Pokémon actuellement en combat.

    Cette classe est utilisée comme point d’entrée dans les fonctions :
    - simulate_turn(state, ...) : pour appliquer une action et générer un nouvel état.
    - evaluate_from_perspective(state, ...) : pour attribuer un score heuristique à un état donné.
    - minmax(...), minmax_alphabeta(...) : pour explorer récursivement tous les états futurs possibles.

    Les objets SimulatedBattleState sont copiés en profondeur (deepcopy) à chaque nœud de l’arbre d’analyse.
    """
    def __init__(self, team1: Team, team2: Team, weather: str = "", active1: str = None, active2: str = None):
        self.team1 = team1
        self.team2 = team2
        self.weather = weather
        self.active1 = active1
        self.active2 = active2

    def copy(self):
        """
        Retourne une copie indépendante de l’état simulé.
        """
        return SimulatedBattleState(
            self.team1.copy(),
            self.team2.copy(),
            self.weather,
            self.active1,
            self.active2
        )

    def get_legal_actions(self, bot: bool = True) -> List[str]:
        """
        Retourne la liste complète des actions valides pour le joueur concerné dans l'état simulé actuel.

        Cette méthode est utilisée par les algorithmes de décision (MinMax, Alpha-Beta, ou stratégie simple)
        pour déterminer quelles actions un joueur peut effectivement exécuter à un tour donné.
        Elle permet de générer l'ensemble des transitions d'état possibles à partir de l'état courant.

        Une action peut être :
        - une attaque (ex : "flamethrower"), si le Pokémon actif est en état de combattre et possède du PP,
        - un changement de Pokémon (ex : "SWITCH:Snorlax"), si un ou plusieurs membres de l'équipe ne sont pas KO.

        Cette fonction est appelée à chaque nœud de l'arbre de recherche simulé dans le module `DammagePredict.py`.

        Args:
            bot (bool): True pour calculer les actions du bot (équipe 1), False pour l'adversaire (équipe 2).

        Returns:
            List[str]: Liste de chaînes représentant les actions légales disponibles à ce tour.
        """
        actions = []
        # Sélection de l'équipe concernée
        team = self.team1 if bot else self.team2
        active = self.active1 if bot else self.active2
        mon = team.pokemons.get(active)

        # Si le Pokémon actif est KO ou manquant, proposer uniquement les switchs possibles
        if not mon or mon.current_hp <= 0:
            return [f"SWITCH:{name}" for name, poke in team.pokemons.items()
                    if name != active and poke.current_hp > 0]

        # Sinon, proposer les attaques disponibles (avec PP > 0)
        for move_id, move_data in mon.moves.items():
            if move_data.get("pp", 0) > 0:
                actions.append(move_id)

        # Proposer les switchs uniquement s’il y a au moins un Pokémon vivant autre que l’actif
        can_switch = any(name != active and poke.current_hp > 0 for name, poke in team.pokemons.items())
        if can_switch:
            for name, poke in team.pokemons.items():
                if name != active and poke.current_hp > 0:
                    actions.append(f"SWITCH:{name}")

        return actions

    def count_total_alive_pokemons(self) -> int:
        """
        Compte le nombre total de Pokémon non KO dans les deux équipes.

        Cette méthode est utilisée dans les fonctions d'élagage (ex : MinMax Alpha-Beta)
        pour adapter dynamiquement le nombre de branches à explorer en fonction de l’avancement du match.

        Elle est aussi utilisée comme indicateur de progression stratégique (fin de partie approchée).

        Returns:
            int: Nombre total de Pokémon ayant des PV strictement positifs dans les deux équipes.
        """
        team1_alive = sum(1 for p in self.team1.pokemons.values() if p.current_hp > 0)
        team2_alive = sum(1 for p in self.team2.pokemons.values() if p.current_hp > 0)
        return team1_alive + team2_alive

    def __str__(self):
        """
        Génère une représentation textuelle complète de l’état simulé.

        Cette méthode est principalement utilisée pour le débogage, l'affichage de résumés entre les tours,
        ou la vérification manuelle des états pendant l'entraînement ou la compétition entre IA.

        Elle liste tous les Pokémon de chaque équipe, leur statut (PV, état, confusion),
        ainsi que leurs attaques et PP restants.

        Returns:
            str: Représentation textuelle de l’état complet (équipe bot + équipe adverse).
        """
        def team_str(team, label):
            lines = [f"\ud83d\udccb \u00c9QUIPE {label.upper()}"]
            for mon in team.pokemons.values():
                move_str = " ".join([f"[{m.name} {m.pp}PP]" for m in mon.moves.values()])
                status = f" [{mon.status}]" if mon.status else ""
                confusion = " \ud83e\udde0" if mon.confused else ""
                lines.append(f"{mon.name.capitalize()} ({mon.current_hp}/{mon.max_hp}){status}{confusion} {move_str}")
            return "\n".join(lines)

        return f"{team_str(self.team1, 'BOT')}\n\n{team_str(self.team2, 'ADVERSE')}"

class BattleState:
    """
    Représente l'état réel d'un combat Pokémon en cours, tel qu'observé via le simulateur poke-env.

    Cette structure synchronise à chaque tour les informations fournies par le simulateur
    (AbstractBattle) avec des structures Python standard. Elle prépare les données pour
    des analyses ultérieures, notamment pour la conversion vers un état simulé.

    Elle conserve pour chaque équipe :
    - la liste des Pokémon connus,
    - les PV actuels et max,
    - les statuts (paralysé, empoisonné, etc.),
    - les boosts de statistiques,
    - les attaques apprises et leurs PP restants.

    Elle est utilisée à chaque tour dans Snell.py pour mettre à jour la représentation interne
    de l'état de combat avant prise de décision.
    """

    def __init__(self, battle: AbstractBattle):
        """
        Initialise l'objet avec un objet AbstractBattle provenant du simulateur.

        Args:
            battle (AbstractBattle): Objet représentant l'état de combat actuel fourni par poke-env.
        """
        self.battle = battle
        self.team1 = {}
        self.team2 = {}
        self.update()

    def update(self):
        """
        Met à jour les informations de combat en extrayant les données du simulateur.

        Cette méthode est appelée à chaque début de tour, ou dès qu’un événement de combat
        modifie l’état connu (KO, switch, attaque, etc.).

        Pour chaque Pokémon observé :
        - enregistre ses PV, statuts, boost et confusion,
        - recopie ses attaques et leurs PP si connues (pour l’équipe du joueur),
        - reconstitue les PV max et attaques connues (pour l’adversaire),
          y compris à partir des fichiers `.txt` en cas de données manquantes.

        Les données sont stockées sous forme de dictionnaires (`team1`, `team2`).
        """
        # Équipe du joueur (team1)
        old_team1 = self.team1
        self.team1 = {}
        for mon in self.battle.team.values():
            mon_key = mon.species.lower()
            moves = {}

            # Récupération des attaques connues et PP actuels
            for move in mon.moves.values():
                previous_pp = old_team1.get(mon_key, {}).get("moves", {}).get(move.id, {}).get("pp", move.current_pp)
                moves[move.id] = \
                {
                    "name": move.id.capitalize(),
                    "pp": previous_pp,
                    "power": move.base_power,
                    "accuracy": move.accuracy,
                    "type": move.type.name,
                    "category": move.category.name if move.category else "physical",
                    "priority": move.priority,
                }

            # Stockage des données du Pokémon dans team1
            self.team1[mon_key] = \
            {
                "name": mon.species.capitalize(),
                "current_hp": mon.current_hp,
                "max_hp": mon.max_hp,
                "status": mon.status.name if mon.status else "",
                "confused": hasattr(mon, "volatiles") and "confusion" in mon.volatiles,
                "moves": moves,
                "boosts": mon.boosts if hasattr(mon, "boosts") else {"atk": 0, "def": 0, "spa": 0, "spd": 0, "spe": 0}
            }

        # Équipe adverse (team2)
        old_team2 = self.team2
        self.team2 = {}

        for key, mon in self.battle.opponent_team.items():
            species = mon.species.lower()
            raw_moves = get_moves_for_pokemon(species)
            moves = {}

            # Récupération des attaques connues et PP actuels
            for move_name in raw_moves:
                move_obj = Move(move_name.lower(), gen=2)
                prev_pp = old_team2.get(species, {}).get("moves", {}).get(move_name.lower(), {}).get("pp", move_obj.max_pp)
                moves[move_name.lower()] = {
                    "name": move_name,
                    "pp": prev_pp,
                    "power": move_obj.base_power or 0,
                    "accuracy": move_obj.accuracy,
                    "type": move_obj.type.name,
                    "category": move_obj.category.name if move_obj.category else "physical",
                    "priority": move_obj.priority,
                }

            # Si les PV max ne sont pas connus, on les reconstitue à partir des fichiers de sets
            max_hp = mon.max_hp if mon.max_hp else get_pokemon_max_hp(species)
            current_hp = mon.current_hp if mon.current_hp is not None else max_hp
            status = mon.status.name if mon.status else ""
            confused = hasattr(mon, "volatiles") and "confusion" in mon.volatiles

            self.team2[species] = {
                "name": species.capitalize(),
                "current_hp": current_hp,
                "max_hp": max_hp,
                "status": status,
                "confused": confused,
                "moves": moves,
                "boosts": mon.boosts if hasattr(mon, "boosts") else {"atk": 0, "def": 0, "spa": 0, "spd": 0, "spe": 0}
            }

        # Pokémon vus uniquement à la prévisualisation
        # Exemple : l’adversaire a montré 6 Pokémon à l’écran, mais certains ne sont pas encore entrés en jeu (Même si on a déjà les sets)
        for name in self.battle.teampreview_opponent_team:
            species = name.species.lower()

            # On n’ajoute que les Pokémon qui n’ont pas encore été observés directement
            if species not in self.team2:
                raw_moves = get_moves_for_pokemon(species)
                moves = {}
                for move_name in raw_moves:
                    move_obj = Move(move_name.lower(), gen=2)
                    moves[move_name.lower()] = {
                        "name": move_name,
                        "pp": move_obj.max_pp,
                        "power": move_obj.base_power or 0,
                        "accuracy": move_obj.accuracy,
                        "type": move_obj.type.name,
                        "category": move_obj.category.name if move_obj.category else "physical",
                        "priority": move_obj.priority,
                    }

                self.team2[species] = {
                    "name": species.capitalize(),
                    "current_hp": get_pokemon_max_hp(species),
                    "max_hp": get_pokemon_max_hp(species),
                    "status": "",
                    "confused": False,
                    "moves": moves,
                    "boosts": {"atk": 0, "def": 0, "spa": 0, "spd": 0, "spe": 0}
                }

    def get_simulation_state(self):
        """
        Convertit l'état actuel observé via poke-env en une instance de SimulatedBattleState.

        Cette méthode est appelée une fois par tour dans Snell.py, juste avant d’effectuer
        une simulation (via MinMax, Alpha-Beta, ou stratégie simplifiée).

        Elle permet de basculer d’une représentation "observée" à une représentation "clonable"
        qui peut être librement modifiée dans les explorations d’arbres de décision.

        Returns:
            SimulatedBattleState: État simulé prêt à être modifié et évalué.
        """
        active1 = self.battle.active_pokemon.species.lower()
        active2 = self.battle.opponent_active_pokemon.species.lower()
        team1_obj = Team({k: PokemonData(**v) for k, v in self.team1.items()})
        team2_obj = Team({k: PokemonData(**v) for k, v in self.team2.items()})
        return SimulatedBattleState(team1_obj, team2_obj, weather="", active1=active1, active2=active2)
