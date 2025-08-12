"""
TeamManager.py

Ce module est responsable du chargement, du filtrage et de la génération des équipes de Pokémon
dans le cadre du format Gen 2 Stadium OU. Il agit comme point d’entrée pour fournir des équipes
valables au simulateur, à l’IA ou pour des tests.

Le module repose sur un répertoire local nommé 'gen2_boxes_inorder' contenant des fichiers texte
suivant le format d’export de Pokémon Showdown. Chaque fichier représente une boîte de 24 Pokémon,
et chaque bloc de texte dans ces fichiers représente un set complet.

Les Pokémon listés dans les banlists sont automatiquement exclus. Les équipes générées contiennent
exclusivement des Pokémon légaux, avec un ensemble de 6 sets sélectionnés soit aléatoirement, soit
sur demande explicite.

Utilisation principale :
- `create_team()` est invoquée dans Snell.py et Mewtwo.py pour fournir une équipe légale prête à l’emploi.
- Le pool commun de sets est chargé une seule fois au démarrage et mis en cache dans `all_sets`.
"""


import os
import random

# Pokémon interdits dans le format Gen 2 Stadium OU
banned = {"mew", "mewtwo", "missingno", "celebi", "lugia", "hooh", "ho-oh"}

# Chemin du dossier contenant les boîtes
BOX_DIR = "gen2_boxes_inorder"

# Dictionnaire global contenant tous les sets valides du projet
# Clé = nom du Pokémon en minuscules, Valeur = bloc de texte Showdown complet

all_sets = {}

# Chargement initial de tous les fichiers de boîte disponibles
for filename in os.listdir(BOX_DIR):
    if filename.endswith(".txt"):
        with open(os.path.join(BOX_DIR, filename), encoding="utf-8") as f:
            blocks = f.read().strip().split("\n\n")
            for block in blocks:
                lines = block.strip().splitlines()
                if not lines:
                    continue

                # Extraction du nom du Pokémon (ligne 1)
                name = lines[0].strip().lower()

                # Exclusion si le Pokémon est banni
                if name in banned:
                    continue
                all_sets[name] = block.strip()

# Affichage du nombre de Pokémon chargés en mémoire
print(f"{len(all_sets)} Pokemon valides charges.")


# Fonction de création d'équipe
def create_team(pokemon_names=None):
    """
        Génère une équipe valide de 6 Pokémon pour le format Gen 2 Stadium OU.

        La fonction peut fonctionner selon deux modes :
        - Mode 1 : équipe aléatoire parmi tous les Pokémon valides disponibles (si `pokemon_names` est None).
        - Mode 2 : équipe définie à partir d'une liste de noms donnés (si `pokemon_names` est une liste de noms).

        Chaque set retourné respecte la structure Showdown attendue (avec IVs, moves, etc.).

        Cette fonction est utilisée dans :
        - `Snell.py` pour fournir une équipe à chaque match du bot.
        - `Mewtwo.py` pour charger les équipes des IA ou du joueur.

        Args:
            pokemon_names (List[str], optional): Liste des noms de Pokémon souhaités. Si None, sélection aléatoire.

        Returns:
            str: Une chaîne de texte composée de 6 blocs Showdown séparés par deux sauts de ligne.

        Raises:
            ValueError: Si un ou plusieurs noms spécifiés sont absents du pool de sets valides,
                        ou si le pool est insuffisant pour construire une équipe.
        """
    if pokemon_names:
        # Conversion en minuscules et vérification d'existence
        selected = [name.lower() for name in pokemon_names if name.lower() in all_sets]
        if len(selected) < len(pokemon_names):
            missing = set(pokemon_names) - set(selected)
            raise ValueError(f"Certains Pokémon sont introuvables : {', '.join(missing)}")
    else:
        available = list(all_sets.keys())
        if len(available) < 6:
            raise ValueError(f"Pas assez de Pokémon valides ({len(available)}) pour construire une équipe.")
        selected = random.sample(available, 6)

    # Construction du texte final avec les 6 sets
    return "\n\n".join([all_sets[name] for name in selected])


# Exemple d'utilisation depuis la ligne de commande (exécution directe du script)
if __name__ == "__main__":
    # Exemple aléatoire
    team_txt = create_team()

    # Exemple avec noms précis
    # team_txt = create_team(["Bulbasaur", "Charizard", "Blastoise", "Snorlax", "Gengar", "Dragonite"])

    # Sauvegarde
    with open("generated_team.txt", "w", encoding="utf-8") as f:
        f.write(team_txt)

    print("Équipe générée et enregistrée dans generated_team.txt")
