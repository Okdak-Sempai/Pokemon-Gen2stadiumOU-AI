"""
DammageCalc.py

Ce module fournit les outils nécessaires pour réaliser des calculs de dégâts et des opérations associées
dans le cadre d’un combat Pokémon Gen 2 Stadium OU. Il repose sur les règles spécifiques à la deuxième
génération, en intégrant la table de types, la classification physique/spéciale des attaques,
et une version simplifiée de la formule de dégâts.

Le module est utilisé dans le système de décision de l’IA pour :
- évaluer la dangerosité d’un move sur un Pokémon adverse,
- estimer l’efficacité d’un type contre un autre,
- identifier si un move est de catégorie physique ou spéciale,
- récupérer les statistiques modifiées ou reconstruites d’un Pokémon.

Ce module est utilisé par :
- `DammagePredict.py` dans la fonction `simulate_turn` pour appliquer des dégâts simulés,
- l'initialisation des arbres de décision pour affecter un score à chaque action possible.

Les données sont conformes au format [Gen 2] Stadium OU, sans objets tenus, avec IV fixes à 30
et EV à 17424 pour tous les calculs statistiques.
"""

import math
from typing import List, Dict

# Table des multiplicateurs de types selon le tableau de la Gen 2
# Les types non explicitement listés sont considérés comme ayant une efficacité de 1.0
GEN2_TYPE_CHART = {
    "normal": {"rock": 0.5, "ghost": 0.0, "steel": 0.5},
    "fighting": {"normal": 2.0, "rock": 2.0, "steel": 2.0, "ice": 2.0, "dark": 2.0, "ghost": 0.0, "flying": 0.5, "poison": 0.5, "bug": 0.5, "psychic": 0.5},
    "flying": {"fighting": 2.0, "bug": 2.0, "grass": 2.0, "rock": 0.5, "steel": 0.5, "electric": 0.5},
    "poison": {"grass": 2.0, "bug": 2.0, "poison": 0.5, "ground": 0.5, "rock": 0.5, "ghost": 0.5, "steel": 0.0},
    "ground": {"poison": 2.0, "rock": 2.0, "steel": 2.0, "fire": 2.0, "electric": 2.0, "bug": 0.5, "grass": 0.5, "flying": 0.0},
    "rock": {"flying": 2.0, "bug": 2.0, "fire": 2.0, "ice": 2.0, "fighting": 0.5, "ground": 0.5, "steel": 0.5},
    "bug": {"grass": 2.0, "psychic": 2.0, "dark": 2.0, "fighting": 0.5, "flying": 0.5, "poison": 0.5, "ghost": 0.5, "steel": 0.5, "fire": 0.5},
    "ghost": {"ghost": 2.0, "psychic": 2.0, "dark": 0.5, "normal": 0.0},
    "steel": {"rock": 2.0, "ice": 2.0, "steel": 0.5, "fire": 0.5, "water": 0.5, "electric": 0.5},
    "fire": {"bug": 2.0, "steel": 2.0, "grass": 2.0, "ice": 2.0, "rock": 0.5, "fire": 0.5, "water": 0.5, "dragon": 0.5},
    "water": {"rock": 2.0, "ground": 2.0, "fire": 2.0, "water": 0.5, "grass": 0.5, "dragon": 0.5},
    "grass": {"rock": 2.0, "ground": 2.0, "water": 2.0, "flying": 0.5, "poison": 0.5, "bug": 0.5, "steel": 0.5, "fire": 0.5, "grass": 0.5, "dragon": 0.5},
    "electric": {"flying": 2.0, "water": 2.0, "grass": 0.5, "electric": 0.5, "dragon": 0.5, "ground": 0.0},
    "psychic": {"fighting": 2.0, "poison": 2.0, "psychic": 0.5, "steel": 0.5, "dark": 0.0},
    "ice": {"flying": 2.0, "ground": 2.0, "grass": 2.0, "dragon": 2.0, "steel": 0.5, "fire": 0.5, "water": 0.5, "ice": 0.5},
    "dragon": {"dragon": 2.0, "steel": 0.5},
    "dark": {"ghost": 2.0, "psychic": 2.0, "fighting": 0.5, "dark": 0.5, "steel": 0.5}
}

# Complétion du tableau : tout type non spécifié hérite de l’efficacité neutre (1.0)
for atk in GEN2_TYPE_CHART:
    for def_type in GEN2_TYPE_CHART:
        GEN2_TYPE_CHART[atk].setdefault(def_type, 1.0)

# Base stats officielles
GEN2_BASE_STATS_RAW = \
    {
    "houndoom": {"hp": 75, "atk": 90, "def": 50, "spa": 110, "spd": 80, "spe": 95},
    "seadra": {"hp": 55, "atk": 65, "def": 95, "spa": 95, "spd": 45, "spe": 85},
}

# Ensemble des types considérés comme physiques en Gen 2
PHYSICAL_TYPES_GEN2 = {
    "normal", "fighting", "flying", "poison", "ground", "rock", "bug", "ghost", "steel"
}

def is_physical_gen2(move) -> bool:
    """
    Indique si une attaque est de catégorie physique selon la logique Gen 2.

    En deuxième génération, la catégorie d'une attaque dépend uniquement de son type :
    certains types sont physiques (utilisent l'attaque et la défense), d'autres sont spéciaux.

    Args:
        move: Objet move ayant un attribut 'type' (ex: 'fire', 'rock', ...)

    Returns:
        bool: True si l'attaque est de type physique, False sinon.
    """
    return move.type in PHYSICAL_TYPES_GEN2

def compute_stat(base: int, is_hp: bool = False) -> int:
    """
    Calcule une statistique finale d'un Pokémon au niveau 100, en appliquant les formules standardisées Gen 2.

    Les formules tiennent compte des IV, EV et niveau, fixés par convention à :
    - IV = 30
    - EV = 17424
    - Niveau = 100

    Ces valeurs sont les mêmes pour tous les Pokémon dans ce projet, conformément au format Stadium OU.

    Args:
        base (int): Statistique de base du Pokémon (valeur officielle).
        is_hp (bool): Indique si la statistique à calculer est celle des PV.

    Returns:
        int: Statistique finale calculée pour le niveau 100.
    """
    if is_hp:
        return ((2 * base + 15) * 100) // 100 + 110
    else:
        return ((2 * base + 15) * 100) // 100 + 5

def get_stat(pokemon, stat: str) -> int:
    """
    Récupère une statistique (HP, attaque, défense, etc.) calculée pour un Pokémon donné.

    Cette fonction extrait la statistique de base à partir d'une table interne (GEN2_BASE_STATS_RAW),
    puis appelle `compute_stat()` pour obtenir la valeur finale selon les paramètres du projet.

    Args:
        pokemon: Objet représentant le Pokémon, doit avoir un nom (name).
        stat (str): Nom de la statistique à récupérer (ex: 'hp', 'atk', 'spa', ...)

    Returns:
        int: Valeur entière de la statistique calculée.
    """
    base_stats = GEN2_BASE_STATS_RAW.get(pokemon.name.lower(), {})
    base = base_stats.get(stat, 50)
    return compute_stat(base, is_hp=(stat == "hp"))

def get_type_modifier(move_type, defender_types: List[str]) -> float:
    """
    Calcule le multiplicateur de type d'une attaque contre un ou plusieurs types défensifs.

    Cette fonction applique le tableau d’efficacité de la Gen 2 à une combinaison move → défenseur.

    Args:
        move_type: Type de l’attaque (ex: 'electric', 'ice', ...).
        defender_types (List[str]): Liste des types du Pokémon cible (généralement 1 ou 2).

    Returns:
        float: Multiplicateur total (ex: 2.0, 0.5, 0.0, etc.).
    """
    modifier = 1.0
    move_type = move_type.name.lower() if hasattr(move_type, 'name') else str(move_type).lower()
    for def_type in defender_types:
        def_type = def_type.name.lower() if hasattr(def_type, 'name') else str(def_type).lower()
        modifier *= GEN2_TYPE_CHART.get(move_type, {}).get(def_type, 1.0)
    return modifier

def calculate_gen2_stadium_damage(battle, attacker, defender, move) -> Dict[str, List[int]]:
    """
    Calcule une estimation simplifiée des dégâts infligés par une attaque en Gen 2 Stadium OU.

    Cette fonction est utilisée à titre de placeholder ou pour des cas de fallback.
    Les vrais calculs précis sont assurés par l’API node.js appelée dans DammageCalcSMOGON.py.

    Args:
        battle: Objet de combat (non utilisé dans cette version).
        attacker: Objet représentant le Pokémon attaquant.
        defender: Objet représentant le Pokémon défenseur.
        move: Objet représentant l'attaque utilisée.

    Returns:
        dict: Dictionnaire contenant deux valeurs : dégâts minimum et maximum.
    """
    RANDOM_RANGE = list(range(217, 256))
    STAB_MULTIPLIER = 1.5
    CRIT_MULTIPLIER = 2.0
    # Implémentation simplifiée à compléter selon besoin
    return {"min": 10, "max": 20}
