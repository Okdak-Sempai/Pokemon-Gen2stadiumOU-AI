"""
BaseStatsLoader.py

Ce module permet de récupérer les points de vie maximaux (HP) des Pokémon à partir des fichiers
de sets utilisés dans le format Gen 2 Stadium OU. Il est utilisé pour reconstruire l'état de
l'équipe adverse dans un combat, lorsque les données des PV ne sont pas explicitement fournies
par l'API du simulateur.

Le module repose sur l'analyse des fichiers `.txt` situés dans le dossier gen2_boxes_inorder,
contenant les sets de 24 Pokémon par boîte (au format Showdown). Un système de cache interne
évite la relecture des fichiers pour les espèces déjà traitées.
"""

import os
import re

# Dossier contenant les fichiers de boîtes Showdown
BOX_DIR = "gen2_boxes_inorder"
cached_hp = {}

def extract_hp_from_set(block: str) -> int:
    """
       Extrait le nombre de PV depuis un bloc de texte décrivant un set Pokémon.

       La fonction recherche une ligne contenant les statistiques calculées (ex : "283 / 186 / 160 / ..."),
       située trois lignes après la ligne contenant "IVs:" dans le format standard des exports Showdown.
       Elle tente de parser la première valeur de cette ligne comme étant les PV.

       Args:
           block (str): Bloc de texte correspondant à un Pokémon (nom, moves, IVs, stats...).

       Returns:
           int: Valeur entière correspondant aux PV maximaux du Pokémon.
                Retourne 300 si l'extraction échoue ou si le format est incorrect.
       """

    # Expression régulière capturant la 4e ligne après "IVs:" (insensible à la casse)
    match = re.search(r'(?i)IVs:.*\n.*\n.*\n(.*)', block)
    if match:
        line = match.group(1).strip()
        parts = line.split('/')
        if len(parts) >= 1:
            try:
                return int(parts[0])
            except:
                return 300
    return 300  # fallback

def get_pokemon_max_hp(species: str) -> int:
    """
    Récupère les PV maximaux d’un Pokémon donné, en analysant les fichiers de sets disponibles.

    La fonction recherche un bloc dont le nom de Pokémon correspond à `species` (ligne d'en-tête),
    puis applique `extract_hp_from_set()` pour extraire la valeur.
    Une fois obtenue, la valeur est mémorisée dans le cache pour les appels suivants.

    Args:
        species (str): Nom du Pokémon (insensible à la casse).

    Returns:
        int: PV maximaux calculés pour ce Pokémon. Retourne 300 si l'espèce est absente des fichiers.

    Remarques:
        Cette fonction est principalement utilisée dans BattleState pour reconstruire les PV de
        l’équipe adverse, lorsque ces informations ne sont pas explicitement fournies par le simulateur.
        Elle permet à l’IA de raisonner avec une approximation cohérente dès le premier tour.
    """

    # Retourne immédiatement la valeur en cache si déjà chargée
    species = species.lower()
    if species in cached_hp:
        return cached_hp[species]

    # Parcours de tous les fichiers .txt dans le dossier des boîtes
    for filename in os.listdir(BOX_DIR):
        if filename.endswith(".txt"):
            with open(os.path.join(BOX_DIR, filename), encoding="utf-8") as f:
                # Séparation par double saut de ligne = 1 set
                blocks = f.read().strip().split("\n\n")
                for block in blocks:
                    # Match par nom d'espèce au début du bloc
                    if block.lower().startswith(species):
                        hp = extract_hp_from_set(block)
                        # Stockage dans le cache
                        cached_hp[species] = hp
                        return hp
    # Valeur par défaut
    return 300
