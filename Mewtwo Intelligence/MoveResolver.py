"""
MoveResolver.py

Ce module fournit les outils pour associer un nom de Pokémon à ses attaques officielles dans le format
[Gen 2] Stadium OU. Il permet de charger et de stocker l’ensemble des movesets valides extraits
depuis les fichiers de boîte au format texte (`gen2_boxes_inorder`).

Il est utilisé pour reconstituer les attaques des Pokémon adverses, notamment lorsque le simulateur
poke-env ne fournit pas directement cette information. C’est le cas pour les Pokémon de l’équipe
adverse qui ne sont pas encore entrés en jeu mais visibles dès le tour 1.

Utilisation :
- `BattleState.py` (dans `update()`) → pour construire les attaques de l’adversaire.
- En amont de toute simulation, afin que les états simulés disposent d’une liste d’attaques cohérente.

Les données sont extraites une seule fois et mises en cache globalement via `cached_movesets`.

Fichier requis : tous les `.txt` dans `gen2_boxes_inorder` contenant les sets à 4 attaques fixes.
"""

import os

# Dossier contenant les boîtes de Pokémon avec leurs attaques (format texte Showdown)
BOX_DIR = "gen2_boxes_inorder"
# Cache global des movesets : clé = nom du Pokémon, valeur = liste de ses 4 attaques
cached_movesets = {}

def load_movesets():
    """
    Charge tous les movesets disponibles à partir des fichiers texte du dossier `gen2_boxes_inorder`.

    Cette fonction est appelée une seule fois. Elle parcourt tous les fichiers `.txt`, extrait
    les noms de Pokémon et les lignes commençant par "-", qui représentent les attaques.
    Les résultats sont stockés dans le cache `cached_movesets`.

    Returns:
        dict: Dictionnaire {nom_pokemon (str): [liste des 4 attaques (str)]}
    """

    # Retourne le cache si déjà chargé
    if cached_movesets:
        return cached_movesets

    # Parcours des fichiers de sets
    for filename in os.listdir(BOX_DIR):
        if not filename.endswith(".txt"):
            continue
        with open(os.path.join(BOX_DIR, filename), encoding="utf-8") as f:
            blocks = f.read().strip().split("\n\n")
            for block in blocks:
                lines = block.strip().splitlines()
                if not lines:
                    continue

                # Ligne 0 = nom du Pokémon, lignes suivantes = attaques (préfixées par '-')
                name = lines[0].strip().lower()
                moves = [line[1:].strip() for line in lines[1:] if line.startswith("-")]
                cached_movesets[name] = moves

    return cached_movesets

def get_moves_for_pokemon(species):
    """
    Récupère la liste des attaques d’un Pokémon donné à partir du cache.

    Cette fonction est utilisée par `BattleState` pour attribuer un moveset réaliste(fixe)
    aux Pokémon adverses partiellement observés. Elle repose sur les données extraites
    de `gen2_boxes_inorder`.

    Args:
        species (str): Nom de l’espèce du Pokémon (insensible à la casse).

    Returns:
        List[str]: Liste des noms d’attaques connus pour ce Pokémon.
                   Liste vide si le Pokémon est introuvable dans les boîtes.
    """
    movesets = load_movesets()
    return movesets.get(species.lower(), [])