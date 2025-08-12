"""
Mewtwo.py

Ce module est responsable du lancement et de la gestion des matchs entre IA (Snell) dans le projet.
Il orchestre l'exécution des combats entre différentes instances d'IA ou contre des joueurs humains,
en configurant les équipes, les stratégies, et les paramètres de chaque combat.

Le fichier met en œuvre :
- La création et la gestion des IA et de leurs équipes via `TeamManager` et `Snell.py`.
- La configuration des paramètres du serveur local Showdown pour interagir avec le simulateur.
- La sauvegarde des résultats de chaque combat (victoire, durée, nombre de tours) dans un fichier CSV pour analyse.

La fonction principale de ce module est de gérer les duels entre IA et de stocker les informations des matchs pour des statistiques ultérieures.

Fichiers requis :
- `Snell.py` : contient la classe d'intelligence artificielle.
- `TeamManager.py` : pour la gestion des équipes de Pokémon.
- `BattleState.py` : pour la gestion des états de combat.
"""

import asyncio
import sys
import os
import time
import csv

from poke_env import AccountConfiguration, ServerConfiguration
from Snell import Snell
from TeamManager import create_team
import BattleState  # Important pour éviter les erreurs d'import

# Configuration serveur Showdown local
SERVER_CONFIG = ServerConfiguration("ws://127.0.0.1:8001/showdown/websocket", "")

# Dossiers pour les arbres MinMax (résultats des IA en fonction des stratégies)
SAVE_DIRS = {
    "Snell_Lv1": "simplet",
    "Snell_Lv2": "minmaxalphabeta",
    "Snell_Lv3": "minmaxalphabeta"
}

def load_team(team_path=None):
    """
    Charge une équipe de Pokémon depuis un fichier `.txt` ou génère une équipe aléatoire.

    Si un chemin de fichier est fourni, il charge l’équipe spécifiée. Sinon, il génère une équipe
    aléatoire en utilisant la fonction `create_team` de `TeamManager.py`.

    Args:
        team_path (str, optional): Chemin vers un fichier contenant les sets de Pokémon.

    Returns:
        str: Texte représentant l’équipe de Pokémon au format Showdown.
    """
    if team_path and os.path.exists(team_path):
        with open(team_path, encoding="utf-8") as f:
            return f.read().strip()
    return create_team()

def build_bot(bot_name, team_path=None,display_name=None):
    """
       Construit et configure une instance de l’IA `Snell` avec une stratégie et des paramètres adaptés
       au niveau de difficulté spécifié par le nom du bot.

       Cette fonction est le point central de configuration des IA dans ce projet. Elle détermine :
       - la stratégie de décision à utiliser,
       - la profondeur d’exploration de l’arbre MinMax,
       - le niveau de filtrage pour l’élagage alpha-bêta (`keep_ratio`),
       - l’équipe à utiliser (aléatoire ou prédéfinie),
       - l’identité visuelle du bot dans Showdown (account name).

       La logique de configuration repose sur le nom du bot fourni :

       ▸ Snell_Lv1 :
           - stratégie : "simplet"
           - profondeur : 1
           - pas d’élagage
           - but : comportement basique, 1 tour de simulation uniquement

       ▸ Snell_Lv2 :
           - stratégie : "minmaxalphabeta"
           - profondeur : 2
           - élagage activé avec `keep_ratio` = 0.8 (80 % des branches conservées)
           - but : IA intermédiaire avec meilleure anticipation et optimisation partielle

       ▸ Snell_Lv3 :
           - stratégie : "minmaxalphabeta"
           - profondeur : 3
           - élagage agressif avec `keep_ratio` = 0.25 (seulement 25 % des actions gardées)
           - but : IA optimisée pour exploration profonde en minimisant le coût computationnel

       Args:
           bot_name (str): Nom logique du bot (doit correspondre à Snell_Lv1, Snell_Lv2 ou Snell_Lv3).
           team_path (str, optional): Chemin vers un fichier `.txt` contenant l’équipe du bot.
                                      Si absent, une équipe est générée dynamiquement.
           display_name (str, optional): Nom d'affichage distinct pour Showdown (utile si deux IA
                                         partagent le même nom de base pour éviter les conflits).

       Returns:
           Snell: Instance du bot IA, prête à être lancée pour un match Showdown.

       Raises:
           ValueError: Aucun cas ici, mais des erreurs peuvent émerger si `team_path` est invalide
                       (ceci est géré en amont par `load_team()`).
       """
    team_txt = load_team(team_path)
    strategy, depth, keep_ratio = "naive", 1, 0.8
    if bot_name == "Snell_Lv1":
        strategy = "simplet"
        depth = 1
    elif bot_name == "Snell_Lv2":
        strategy = "minmaxalphabeta"
        depth = 2
        keep_ratio = 0.8
    elif bot_name == "Snell_Lv3":
        strategy = "minmaxalphabeta"
        depth = 3
        keep_ratio = 0.25

    account_name = display_name if display_name else bot_name

    bot = Snell(
        account_configuration=AccountConfiguration(account_name, None),
        server_configuration=SERVER_CONFIG,
        team=team_txt,
        strategy=strategy,
        depth=depth,
        keep_ratio=keep_ratio
    )

    # Enregistre les chemins de team pour la ligne CSV
    bot.team_file = team_path
    bot.opponent_team_file = None

    return bot


def prepare_output_folder(bot_name):
    """
    Prépare le dossier de sauvegarde des résultats du bot, et nettoie les anciens fichiers.

    Cette fonction crée le dossier de sauvegarde associé à un bot et efface les fichiers précédents
    pour éviter toute contamination des résultats précédents.

    Args:
        bot_name (str): Nom du bot pour déterminer le dossier de sauvegarde.
    """
    folder = SAVE_DIRS.get(bot_name)
    if folder:
        os.makedirs(folder, exist_ok=True)
        for file in os.listdir(folder):
            path = os.path.join(folder, file)
            if os.path.isfile(path):
                os.remove(path)

async def run_single_bot(bot_name, team_path=None):
    """
    Lance un combat opposant un bot IA (Snell) à un joueur humain nommé "Descartes01".

    Cette fonction est conçue pour des tests ou des démonstrations avec un adversaire humain fixe.
    Elle initialise une IA avec les bons paramètres (équipe, stratégie, profondeur) et lui fait envoyer
    un challenge en un contre un sur un serveur local Showdown.

    L’adversaire "Descartes01" est supposé être connecté en parallèle, prêt à accepter un match.
    Aucune stratégie n’est simulée côté adversaire ici : seul le bot est actif via `send_challenges`.

    Args:
        bot_name (str): Nom logique du bot à lancer (doit correspondre à Snell_Lv1, _Lv2, _Lv3...).
        team_path (str, optional): Chemin vers un fichier d’équipe prédéfini. Si non fourni,
                                   une équipe aléatoire sera générée.

    Side Effects:
        Envoie un challenge Showdown à "Descartes01".
        Enregistre les résultats du match dans le fichier `combat_results.csv`.
    """

    # Prépare le dossier de sauvegarde JSON pour la stratégie du bot (ex: simplet/, minmaxalphabeta/)
    prepare_output_folder(bot_name)
    # Construit et configure le bot IA (stratégie, équipe, profondeur)
    bot = build_bot(bot_name, team_path)
    # Affiche le lancement dans le terminal pour traçabilité
    print(f" {bot_name} envoi un challenge à Descartes01...")
    # Le bot initie un match 1v1 contre "Descartes01"
    await bot.send_challenges("Descartes01", 1)
    # Attente de la fin du match et enregistrement des résultats dans le CSV
    await wait_and_log_result(bot)

async def run_duel(bot1_name, bot2_name, team1_path=None, team2_path=None):
    """
    Exécute un duel entre deux bots IA, chacun basé sur la classe `Snell`.

    Cette fonction instancie deux bots, configure leurs stratégies, charge ou génère leurs équipes,
    les connecte au serveur Showdown local, et orchestre un match complet en 1v1 entre eux.

    Le duel est lancé ainsi :
    - Le bot 2 (adversaire) démarre et accepte les défis (`accept_challenges`),
    - Le bot 1 initie le challenge (`send_challenges`).

    Une fois le match terminé, les résultats sont enregistrés dans le fichier CSV
    `combat_results.csv` avec le nombre de tours, le vainqueur, la stratégie, la durée et les fichiers d’équipe utilisés.

    Particularité :
    Si les deux bots ont le même nom logique (ex : `Snell_Lv2` vs `Snell_Lv2`), des suffixes `_A` et `_B` sont
    automatiquement ajoutés à leurs noms de compte Showdown pour éviter les conflits de nom lors du match.

    Args:
        bot1_name (str): Nom logique du premier bot (ex : "Snell_Lv1").
        bot2_name (str): Nom logique du second bot.
        team1_path (str, optional): Chemin vers un fichier d’équipe pour le premier bot.
        team2_path (str, optional): Chemin vers un fichier d’équipe pour le second bot.
    """

    # Prépare les dossiers de sortie JSON (ex: minmaxalphabeta/, simplet/)
    prepare_output_folder(bot1_name)
    prepare_output_folder(bot2_name)

    # Si même stratégie → noms d'affichage différents pour éviter le conflit Showdown
    same_name = bot1_name == bot2_name
    bot1_display = bot1_name + "_A" if same_name else bot1_name
    bot2_display = bot2_name + "_B" if same_name else bot2_name

    # Construction des deux bots avec stratégies, profondeurs, équipes respectives
    bot2 = build_bot(bot2_name, team2_path, display_name=bot2_display)
    bot1 = build_bot(bot1_name, team1_path, display_name=bot1_display)

    # Enregistre les chemins d’équipes dans chaque objet bot (pour traçabilité)
    bot1.opponent_team_file = team2_path
    bot2.opponent_team_file = team1_path

    # Le bot 2 se met en écoute pour accepter un challenge
    print(f"Lancement du bot {bot2_display} en attente...")
    task2 = asyncio.create_task(bot2.accept_challenges(None, 1))

    # Petite pause pour s’assurer que bot2 est bien prêt à accepter
    await asyncio.sleep(2)

    # Le bot 1 initie le challenge Showdown vers le bot 2
    print(f"Lancement du bot {bot1_display} qui initie le combat...")
    await bot1.send_challenges(bot2_display, 1)

    # Les deux bots attendent la fin du match ; les résultats sont loggés et enregistrés
    await asyncio.gather(wait_and_log_result(bot1), wait_and_log_result(bot2))

async def wait_and_log_result(bot):
    """
    Surveille un match jusqu’à sa conclusion et enregistre les résultats du combat dans un fichier CSV.

    Cette fonction est appelée une fois qu’un match a été initié. Elle attend que le match soit enregistré
    dans la liste des combats actifs du bot (`bot.battles`), puis que le match soit terminé (`finished=True`).
    Une fois terminé, les informations suivantes sont extraites et sauvegardées :
    - identifiants et rôles des joueurs,
    - vainqueur,
    - durée réelle du match,
    - nombre de tours,
    - stratégie et profondeur utilisée,
    - identifiants des fichiers d’équipes utilisés,
    - lien de replay Showdown local.

    Les données sont enregistrées dans un fichier CSV appelé `combat_results.csv`, situé à la racine du projet.
    Ce fichier est utilisé pour faire des analyses statistiques ou récapituler les performances des IA.
    """

    # Attente tant que le bot n’a pas encore enregistré le début du combat
    while not bot.battles:
        await asyncio.sleep(1)

    # Attente supplémentaire tant que le match est encore en cours
    while any(not b.finished for b in bot.battles.values()):
        await asyncio.sleep(2)

    print("\nCombat terminé.\n")


    # Récupération de l’objet Battle final (il n’y en a qu’un dans ce contexte)
    battle = next(iter(bot.battles.values()))

    # Récupération des informations de base
    bot_username = getattr(battle, "player_username", "inconnu")
    opponent_username = getattr(battle, "opponent_username", "inconnu")
    role = getattr(battle, "player_role", "p1")
    won_flag = getattr(battle, "won", None)

    # Détermination du vainqueur selon le flag retourné par poke-env
    winner = {
        True: bot_username,
        False: opponent_username
    }.get(won_flag, "Match nul ou inconnu")


    # Affichage console pour débogage / traçabilité
    print(f"[TAG] {battle.battle_tag}")
    print(f"Moi-même ({role}): {bot_username}")
    print(f"Adversaire ({'p2' if role == 'p1' else 'p1'}): {opponent_username}")
    print(f"Vainqueur : {winner}")
    print(f"Nombre de tours : {getattr(battle, 'turn', 'inconnu')}")

    # Calcul de la durée réelle du match en secondes
    duration_seconds = time.perf_counter() - bot.real_start_time
    minutes = int(duration_seconds // 60)
    seconds = int(duration_seconds % 60)
    print(f"Durée réelle mesurée : {minutes} min {seconds} sec")

    # Fonction utilitaire pour extraire uniquement le nom du fichier équipe (pas le chemin complet)
    def extract_team_filename(path):
        return os.path.basename(path) if path else "random"

    # Récupération des chemins depuis l’objet bot
    team_file_bot = getattr(bot, "team_file", None)
    team_file_opp = getattr(bot, "opponent_team_file", None)

    # Ligne de résultat structurée pour export CSV
    result_row = {
        "bot_role": role,
        "bot_name": bot_username,
        "opponent_role": "p2" if role == "p1" else "p1",
        "opponent_name": opponent_username,
        "winner": winner,
        "turns": getattr(battle, 'turn', 'inconnu'),
        "duration": f"{minutes}m {seconds}s",
        "depth": getattr(bot, "depth", "inconnu"),
        "keep_ratio": getattr(bot, "keep_ratio", None),
        "battle_tag": battle.battle_tag,
        "replay_url": f"https://localhost-8001.psim.us/{battle.battle_tag}",
        "team_file_bot": extract_team_filename(team_file_bot),
        "team_file_opp": extract_team_filename(team_file_opp),
    }

    # Écriture ou ajout de la ligne dans le fichier CSV
    file_exists = os.path.exists("combat_results.csv")
    with open("combat_results.csv", "a", newline='', encoding="utf-8") as csvfile:
        writer = csv.DictWriter(csvfile, fieldnames=result_row.keys())
        if not file_exists:
            writer.writeheader()
        writer.writerow(result_row)

if __name__ == "__main__":
    """
        Point d’entrée principal pour exécuter un combat Pokémon dans le format Gen 2 Stadium OU.

        Ce script permet de lancer :
        - un match entre une IA et un joueur humain (identifié par défaut comme "Descartes01"),
        - un duel entre deux IA configurées différemment, avec ou sans équipes personnalisées.

        Cas d'utilisation supportés :

        1. IA contre humain (joueur Descartes01, contrôlé manuellement) :
            - python Mewtwo.py Snell_LvX
                → Lance l'IA spécifiée avec une équipe aléatoire.
            - python Mewtwo.py Snell_LvX path/to/team.txt
                → Lance l'IA avec l’équipe définie dans le fichier `team.txt`.

        2. IA contre IA :
            - python Mewtwo.py Snell_LvX Snell_LvY
                → Duel entre deux IA avec équipes aléatoires.
            - python Mewtwo.py Snell_LvX path/to/team1.txt Snell_LvY
                → Le premier bot utilise `team1.txt`, le second une équipe aléatoire.
            - python Mewtwo.py Snell_LvX path/to/team1.txt Snell_LvY path/to/team2.txt
                → Les deux bots utilisent des équipes définies.

        Noms autorisés pour les bots :
            - Snell_Lv1 : IA simplet (MinMax profondeur 1)
            - Snell_Lv2 : IA moyenne (MinMax Alpha-Bêta profondeur 2, keep_ratio=0.8)
            - Snell_Lv3 : IA avancée (MinMax Alpha-Bêta profondeur 3, keep_ratio=0.25)

        Chemins d'équipe :
            Les fichiers .txt doivent contenir exactement 6 Pokémon au format Showdown,
            et être accessibles à partir du chemin relatif ou absolu fourni.

        Résultats :
            Tous les combats sont enregistrés dans 'combat_results.csv' avec :
            - vainqueur, nombre de tours, durée, stratégie, et équipes utilisées.
        """

    # Récupération des arguments passés en ligne de commande
    args = sys.argv[1:]

    if len(args) == 1:
        asyncio.run(run_single_bot(args[0]))
    elif len(args) == 2:
        if args[1].lower().endswith(".txt") and os.path.isfile(args[1]):
            # bot vs humain, avec team définie
            asyncio.run(run_single_bot(args[0], args[1]))
        else:
            # bot vs bot
            asyncio.run(run_duel(args[0], args[1]))
    elif len(args) == 3:
        # cas : bot1 team1 bot2 (avec team2 par défaut)
        asyncio.run(run_duel(args[0], args[2], team1_path=args[1]))
    elif len(args) == 4:
        # cas : bot1 team1 bot2 team2
        asyncio.run(run_duel(args[0], args[2], team1_path=args[1], team2_path=args[3]))
    else:
        print("Mauvais usage.")
        print("Cas valides :")
        print("  python Mewtwo.py bot")
        print("  python Mewtwo.py bot team.txt")
        print("  python Mewtwo.py bot1 bot2")
        print("  python Mewtwo.py bot1 team1.txt bot2 team2.txt")
