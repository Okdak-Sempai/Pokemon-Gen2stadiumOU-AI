# Pokémon Gen2 Stadium OU AI

**Plateforme IA pour Pokémon Stadium 2 — Format [Gen 2] Stadium OU**

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Installation rapide](#installation-rapide)
- [Utilisation](#utilisation)
  - [Modes de jeu](#modes-de-jeu)
  - [Gestion et personnalisation des équipes](#gestion-et-personnalisation-des-équipes)
  - [Utilisation avancée (ligne de commande)](#utilisation-avancée-ligne-de-commande)
- [Modules principaux](#modules-principaux)
- [Notes techniques](#notes-techniques)
- [Crédits & ressources](#crédits--ressources)
- [Licence](#licence)

---

## Présentation

Ce projet propose une IA complète pour simuler et analyser des combats Pokémon Stadium 2 au format [Gen 2] Stadium OU (OverUsed, Rental). Il combine :
- Un moteur de combat local basé sur **Pokémon Showdown** ;
- Une IA Python multi-niveaux (Minimax, élagage Alpha-Bêta) via poke-env ;
- Un calculateur de dégâts fidèle à la génération 2 via une API Smogon locale ;
- Des outils de gestion, génération et validation d'équipes ;
- Des scripts batch pour automatiser l’installation et le lancement sur Windows.

Le tout est destiné à l’expérimentation, à la compétition automatisée et à l’analyse stratégique.

---

## Fonctionnalités

- **Simulation fidèle du format [Gen 2] Stadium OU** (statuts, boosts, règles, banlist, IV/EV, pas d’objets).
- **IA “Mewtwo Intelligence” :**
  - Trois niveaux de stratégie :
    - **Snell_Lv1** : heuristique simpliste (profondeur 1, avantage immédiat).
    - **Snell_Lv2** : Minimax alphabêta profondeur 2 (filtrage 80% des branches).
    - **Snell_Lv3** : Minimax alphabêta profondeur 3 (filtrage 25%, vision long terme).
- **Gestion avancée des équipes** :
  - Génération automatique ou sélection par fichier (format Showdown .txt).
  - Banlist automatisée (Mew, Celebi, etc.).
- **Calcul des dégâts précis** :
  - Appels à une API locale basée sur [@smogon/calc](https://www.npmjs.com/package/@smogon/calc) (Node.js).
  - Prise en compte des boosts, statuts, types, random rolls Gen 2.
- **Enregistrement et analyse des matchs** :
  - Résultats et logs (vainqueur, tours, durée) exportés en CSV et JSON.
  - Arbres de décision sauvegardés pour analyse post-match.
- **Automatisation du setup (Windows)** :
  - Scripts .bat pour tout installer, lancer les serveurs et afficher un menu IA.

---

## Structure du projet

```
Pokemon-Gen2stadiumOU-AI/
├─ README.md                ← ce fichier
├─ Rapport IA.pdf           ← rapport complet du projet (français)
├─ Sujet_projet.pdf         ← énoncé du sujet
├─ pokemon-showdown-master/ ← moteur Showdown Gen2 (TypeScript/JS)
├─ damage-calc/             ← API Smogon Damage Calc (Node.js)
├─ gen2_boxes_inorder/      ← sets Pokémon Gen 2 format Showdown
├─ AI_TEAMS/                ← équipes générées automatiquement
├─ Mewtwo Intelligence/
│   ├─ BaseHP.py                ← table HP de base et calcul PV max
│   ├─ BaseStatsLoader.py       ← lecture stats de base
│   ├─ BattleState.py           ← représentation état de combat
│   ├─ DammageCalc.py           ← calculateur dégâts interne (simple)
│   ├─ DammageCalcSMOGON.py     ← wrapper Python API Smogon
│   ├─ DammagePredict.py        ← moteur Minimax/AlphaBeta, simulation de tours
│   ├─ TeamManager.py           ← gestion/génération/validation d’équipes
│   ├─ MoveResolver.py          ← extraction movesets des sets Showdown
│   ├─ Snell.py                 ← classe IA principale (tous niveaux)
│   ├─ Mewtwo.py                ← orchestration matches IA vs IA/Humain, logs
│   ├─ generate_ai_teams.py     ← génération batch d’équipes
│   ├─ requirements.txt         ← dépendances Python (poke_env…)
│   ├─ start.bat, launcher.bat, start_showdown_server_start.bat, start_dammage-calc.bat, First_launch.bat ← scripts installation/lancement Windows
│   └─ ... autres scripts utiles
└─ misc/ (optionnel) ← autres scripts/config/assets
```

---

## Installation

### Prérequis

- **Windows 64 bits** (recommandé, scripts batch fournis)
- **Python 3.9** (obligatoire)
- **Node.js** (≥ v14) pour Showdown et l’API Smogon
- **Git** (optionnel, pour cloner)
- Connexion internet (installation des dépendances uniquement)

### Installation rapide

#### 1. Cloner le dépôt

```bash
git clone https://github.com/Okdak-Sempai/Pokemon-Gen2stadiumOU-AI.git
cd Pokemon-Gen2stadiumOU-AI/Mewtwo\ Intelligence
```

#### 2. Installer et builder Showdown

```bash
cd ../pokemon-showdown-master
npm install
npm run build
```

#### 3. Installer l’API Smogon Damage Calc

```bash
cd ../damage-calc
npm install
```

#### 4. Créer l’environnement Python et installer les dépendances

```bash
cd ../Mewtwo\ Intelligence
python3.9 -m venv venv
# Windows
venv\Scripts\activate.bat
# Linux/macOS
source venv/bin/activate
pip install -r requirements.txt
```

#### 5. Automatisation Windows :  
Lancez les scripts fournis :
- `First_launch.bat` (premier setup, installe Showdown)
- `launcher.bat` (tout-en-un : Damage Calc + Showdown + menu IA)

---

## Utilisation

### Modes de jeu

- **Duel IA vs Humain**  
  Sélectionnez le niveau d’IA et l’équipe (aléatoire ou fichier .txt). Une invitation apparaît sur Showdown local.
- **Duel IA vs IA**  
  Choisissez deux niveaux d’IA et les équipes (aléatoire ou fichier). Match simulé automatiquement, résultats et logs enregistrés.

### Gestion et personnalisation des équipes

- Placez vos équipes Showdown (format txt) dans `gen2_boxes_inorder/`.
- Génération automatique d’équipes possibles (`generate_ai_teams.py`).
- Les scripts proposent le choix entre équipe aléatoire ou fichier spécifique.

### Utilisation avancée (ligne de commande)

Depuis `Mewtwo Intelligence/` (environnement Python activé) :

```bash
# Lancer IA vs Humain (Snell_Lv1, équipe aléatoire)
python Mewtwo.py Snell_Lv1

# Lancer IA Snell_Lv2 vs Snell_Lv3, équipes personnalisées
python Mewtwo.py Snell_Lv2 team1.txt Snell_Lv3 team2.txt

# Lancer deux IA Snell_Lv2, équipes aléatoires
python Mewtwo.py Snell_Lv2 Snell_Lv2
```

---

## Modules principaux

- **Snell.py** : IA principale, choix stratégiques, intégration poke-env, gestion états/actions.
- **TeamManager.py** : Chargement, filtrage et génération d’équipes valides (banlist, random, .txt).
- **BattleState.py** : Représentation complète de l’état du combat (temps réel/simulé), conversion pour simulation, suivi PV/statuts/moves.
- **DammageCalcSMOGON.py** : Wrapper pour l’API locale de calcul de dégâts Smogon (Node.js).
- **DammagePredict.py** : Moteur Minimax/AlphaBeta, simulation exhaustive des tours, scoring heuristique.
- **MoveResolver.py** : Extraction des attaques des Pokémon depuis les fichiers Showdown.
- **generate_ai_teams.py** : Génère et sauvegarde des équipes IA aléatoires.
- **Scripts batch** :
  - `start.bat` : menu principal (setup, modes de jeu)
  - `launcher.bat` : lancement simultané des serveurs et du menu
  - `First_launch.bat`, `start_dammage-calc.bat`, `start_showdown_server_start.bat` : setup/serveurs

---

## Notes techniques

- **Banlist automatique** : Mew, Mewtwo, MissingNo, Celebi, Lugia, Ho-Oh exclus.
- **Format** : [Gen 2] Stadium OU (IV/EV fixes, pas d’objets, 6 Pokémon).
- **Gestion statuts, boosts, random Gen2** : prise en compte dans la simulation et l’API dégâts.
- **API Damage Calc** : nécessite Node.js, lancez avec `start_dammage-calc.bat`.
- **Serveur Showdown** : local, lancez avec `start_showdown_server_start.bat`.
- **Logs et analyse** : toutes les parties et décisions IA sont journalisées (CSV, JSON).
- **Comptes Showdown** : poke_env utilise des comptes anonymes par défaut (voir `Mewtwo.py` pour config).

---

## Crédits & ressources

- [poke-env](https://github.com/hsahovic/poke-env)
- [Smogon Damage Calc](https://www.npmjs.com/package/@smogon/calc)
- [Pokémon Showdown](https://github.com/smogon/pokemon-showdown)
- Exports Showdown pour les sets Gen2 (`gen2_boxes_inorder/`)

---

## Licence

Ce projet est diffusé sous licence MIT, comme Pokémon Showdown. Voir [LICENSE.md](LICENSE.md) pour plus d’informations.

---

**Pour toute question, suggestion ou rapport de bug, ouvrez une issue sur GitHub ou contactez le mainteneur.**
