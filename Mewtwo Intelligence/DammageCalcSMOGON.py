"""
DammageCalcSMOGON.py

Ce module agit comme une interface entre le projet et le serveur local
hébergeant l'API officielle du calculateur de dégâts Smogon (https://www.npmjs.com/package/@smogon/calc).

Son rôle est de fournir des résultats **fiables, conformes et exacts** pour le format Gen 2 Stadium OU,
en s'appuyant sur le moteur de calcul de Pokémon Showdown via un appel HTTP.

Il constitue le **point de vérité pour tous les calculs de dégâts utilisés dans les IA**, en intégrant :
- les boosts de statistiques (ex: +2 attaque),
- les statuts (paralysie, brûlure),
- les interactions de type complexes (y compris immunités),
- la gestion réelle des dégâts min/max avec randomisation Gen 2.

Ce module remplace entièrement les calculs internes simplifiés de `DammageCalc.py`,
et doit être utilisé **chaque fois qu’un score de dégâts doit influencer une décision stratégique**.

Utilisé dans :
- `DammagePredict.py` → simulation de tours
- `simulate_turn()` → application d’un move offensif
- évaluation des interactions entre actions possibles

Configuration requise :
- serveur Node.js actif en local sur http://localhost:3001
- démarré avec l’API Smogon `@smogon/calc` exposée via un middleware
"""

import requests
import time
from requests.adapters import HTTPAdapter
from urllib3.util.retry import Retry

# Initialisation de la session HTTP persistante
session = requests.Session()
adapter = HTTPAdapter(pool_connections=100, pool_maxsize=100, max_retries=3)
session.mount("http://", adapter)

# Variables globales pour éviter le spam de requêtes trop rapprochées
last_call = 0
min_delay = 0.001

def calculate_showdown_damage(gen, attacker, defender, move, battle=None):
    """
    Calcule les dégâts infligés par une attaque dans le format Gen 2, en appelant l’API officielle Showdown.

    Cette fonction est le cœur du système d’évaluation des actions offensives de l’IA.
    Elle permet d’obtenir un résultat fiable intégrant tous les paramètres du jeu :
    statut du lanceur, boosts actifs, type, attaque, défense, et move utilisé.

    Elle retourne un dictionnaire contenant au minimum les champs 'min' et 'max',
    représentant les bornes du roll de dégâts possible sur l’adversaire.

    La fonction applique une régulation légère pour éviter les appels trop rapprochés
    en série (temps minimum entre deux requêtes contrôlé par `min_delay`).

    Args:
        gen (int): Génération du format à simuler (doit être 2 dans ce projet).
        attacker: Objet Pokémon attaquant, contenant .name, .status, .boosts
        defender: Objet Pokémon défenseur, contenant .name, .status, .boosts
        move: Objet move ou structure contenant l’attribut .id ou .name
        battle: (Optionnel) contexte de combat, non utilisé ici.

    Returns:
        dict: Dictionnaire contenant au moins {"min": int, "max": int}, voire d'autres métriques selon l'API.
              Si l’appel échoue, retourne {"min": 0, "max": 0}.
    """
    global last_call

    def extract_boosts(poke):
        return getattr(poke, "boosts", {"atk": 0, "def": 0, "spa": 0, "spd": 0, "spe": 0})

    # Extraction du nom de l'attaque (identifiant normalisé ou nom brut)
    move_name = getattr(move, "id", None) or getattr(move, "name", None)
    if not move_name:
        print("Move non spécifié correctement:", move)
        return {"min": 0, "max": 0}

    # [CAS Dream Eater] et que la cible n'est pas endormie, on retourne 0
    if move_name.lower() == "dreameater":
        status = getattr(defender, "status", None)
        if status != "slp":
            return {"min": 0, "max": 0}

    # Constitution du payload envoyé au serveur
    payload = {
        "attacker": {
            "name": attacker.name,
            "species": attacker.name,
            "boosts": extract_boosts(attacker),
            "status": getattr(attacker, "status", None)
        },
        "defender": {
            "name": defender.name,
            "species": defender.name,
            "boosts": extract_boosts(defender),
            "status": getattr(defender, "status", None)
        },
        "move": {
            "name": move_name
        },
        "gen": gen
    }

    # Régulation de la fréquence des appels
    now = time.perf_counter()
    elapsed = now - last_call
    if elapsed < min_delay:
        time.sleep(min_delay - elapsed)
    last_call = time.perf_counter()

    # Appel HTTP à l’API locale
    try:
        res = session.post("http://localhost:3001/calc", json=payload, timeout=2)
        return res.json() if res.status_code == 200 else {"min": 0, "max": 0}
    except Exception as e:
        print(f"API DamageCalc: exception {e}")
        return {"min": 0, "max": 0}
