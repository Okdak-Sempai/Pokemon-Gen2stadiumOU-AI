"""
generate_ai_teams.py

Ce script permet de générer automatiquement plusieurs équipes valides pour le format Gen 2 Stadium OU,
destinées à être utilisées par les IA lors des simulations ou des tournois.

Il utilise la fonction `create_team()` définie dans `TeamManager.py`, qui sélectionne 6 Pokémon
depuis le pool autorisé (hors banlist), et produit un texte d’équipe compatible avec Showdown.

À l’exécution, le script génère N équipes (défini par `NUM_TEAMS`), les enregistre individuellement
dans des fichiers texte distincts, puis les regroupe dans un fichier de synthèse `team1_5.txt`.

Structure de sortie :
- Dossier `AI_TEAMS/`
    ├── team1.txt
    ├── team2.txt
    ├── ...
    └── team1_5.txt ← concaténation de toutes les équipes

Ce fichier est utile pour :
- préparer les fichiers d’équipes des IA à l’avance (batch training),
- distribuer un set commun d’équipes pour comparer les performances entre IA.

Le format produit est strictement compatible avec le simulateur Showdown.

Exécution directe :
    python generate_ai_teams.py
"""

import os
from TeamManager import create_team

# Dossier de sortie contenant les équipes générées
OUTPUT_DIR = "AI_TEAMS"
# Nombre d’équipes à générer (peut être modifié pour créer plus de variété)
NUM_TEAMS = 5

def generate_teams():
    """
    Génère plusieurs équipes aléatoires à partir du pool légal de Pokémon,
    et les enregistre dans des fichiers texte.

    Pour chaque équipe :
    - le fichier `teamX.txt` est créé (où X = 1 à NUM_TEAMS),
    - toutes les équipes sont également regroupées dans un seul fichier `team1_5.txt`.

    Ce fichier peut ensuite être utilisé comme source pour les IA en tournoi ou test de robustesse.
    """
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    all_teams = []
    for i in range(1, NUM_TEAMS + 1):
        team_txt = create_team()
        all_teams.append(team_txt)
        file_path = os.path.join(OUTPUT_DIR, f"team{i}.txt")
        with open(file_path, "w", encoding="utf-8") as f:
            f.write(team_txt)

    merged_path = os.path.join(OUTPUT_DIR, "team1_5.txt")
    with open(merged_path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(all_teams))

    print(f"{NUM_TEAMS} équipes sauvegardées dans {OUTPUT_DIR}/")
    print(f"Fichier global créé : {merged_path}")

if __name__ == "__main__":
    generate_teams()
