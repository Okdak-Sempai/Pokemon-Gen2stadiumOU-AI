# Pokémon Gen2 Stadium OU AI

**Projet IA Pokémon Stadium 2 — Format Smogon [Gen 2] Stadium OU**

> IA Pokémon multistratégie pour le format Gen 2 Stadium OU, utilisant poke-env, une API Smogon locale et un moteur de simulation/décision exhaustif.  
> _Inspiré par la philosophie FBD/Rapport et optimisé pour l’analyse de stratégies IA, l’expérimentation et la compétition._

---

## Sommaire

- [Présentation](#présentation)
- [Fonctionnalités](#fonctionnalités)
- [Installation](#installation)
  - [Prérequis](#prérequis)
  - [Première installation](#première-installation)
  - [Lancement rapide](#lancement-rapide)
- [Organisation du projet](#organisation-du-projet)
- [Utilisation](#utilisation)
  - [Modes de jeu](#modes-de-jeu)
  - [Personnalisation des équipes](#personnalisation-des-équipes)
- [Structure IA & Modules principaux](#structure-ia--modules-principaux)
- [Notes techniques](#notes-techniques)
- [Crédits & ressources](#crédits--ressources)

---

## Présentation

Ce projet propose une IA avancée pour simuler des combats Pokémon Stadium 2 dans le format [Gen 2] OU (OverUsed), intégrant :

- **poke-env** pour l’interface avec Showdown.
- **API de calcul de dégâts Smogon** (locale, via Node.js).
- **Moteur de simulation MinMax** avec élagage Alpha-Bêta.
- **Gestion dynamique des équipes** et évaluation stratégique multi-tours.
- **Scripts batch** pour l’automatisation du setup et du lancement.

L’objectif est d’offrir une plateforme d’expérimentation IA, d’analyse stratégique et de compétition automatisée, tout en restant compatible avec les exports Showdown.

---

## Fonctionnalités

- IA multi-niveaux : _naive_, _simplet_ (MinMax 1 tour), _minmax_ (exploration complète), _minmaxalphabeta_ (optimisé).
- Simulation fidèle des combats Gen 2 Stadium OU (statuts, boosts, types, banlist).
- Génération automatique d’équipes valides.
- Log et sauvegarde des arbres de décision.
- Intégration transparente avec l’API Smogon et Showdown local.
- Lancement facilité via scripts `.bat` (Windows).

---

## Installation

### Prérequis

- **Windows** (recommandé, scripts batch fournis)
- **Python 3.9** (obligatoire)
- **Node.js** (pour les serveurs Showdown & calc)
- Connexion internet (pour les dépendances, la première fois)

### Première installation

1. **Cloner le repo**  
   ```bash
   git clone https://github.com/Okdak-Sempai/Pokemon-Gen2stadiumOU-AI.git
   cd Pokemon-Gen2stadiumOU-AI/Mewtwo\ Intelligence
   ```

2. **Installation automatique**  
   Double-cliquez sur `First_launch.bat`  
   _→ Installe Pokémon Showdown et ses dépendances via npm._

3. **Installation des dépendances Python**  
   Le script `start.bat` crée un venv et installe les dépendances via `requirements.txt`.

### Lancement rapide

1. **Tout-en-un**  
   Double-cliquez `launcher.bat`  
   _→ Démarre : Damage Calc, Showdown Server, puis le menu IA principal._

2. **Menu IA**  
   - Duel IA vs Humain
   - Duel IA vs IA
   - Choix de l’IA (Snell_Lv1/Lv2/Lv3)
   - Choix de l’équipe (aléatoire ou fichier .txt)

---

## Organisation du projet

```
Mewtwo Intelligence/
├── *.py                  # Modules principaux IA, état, calculs, outils
├── *.bat                 # Scripts de lancement Windows (setup, serveurs, IA)
├── gen2_boxes_inorder/   # Export Showdown : sets de Pokémon légaux
├── AI_TEAMS/             # Equipes générées automatiquement
├── pokemon-showdown-master/ # Serveur Showdown local (npm)
├── damage-calc/          # API Smogon Damage Calc locale (Node.js)
└── requirements.txt      # Dépendances Python
```

---

## Utilisation

### Modes de jeu

- **Duel IA vs Humain** : L’humain affronte l’IA sur Showdown local.
- **Duel IA vs IA** : Deux IA s’affrontent, logs et arbres de décision sauvegardés.

### Personnalisation des équipes

- Exportez vos propres équipes Showdown dans `gen2_boxes_inorder/` (format texte).
- Les scripts Python/BAT proposent de choisir une équipe aléatoire ou de pointer vers un fichier précis.

---

## Structure IA & Modules principaux

> _Voir docstrings in-code pour les détails d’implémentation approfondis._

- **Snell.py** : Classe principale IA (`Snell`), choix stratégiques, intégration poke-env, gestion des états et actions.
- **TeamManager.py** : Chargement/filtrage des équipes, banlist, génération d’équipes aléatoires/légales.
- **BattleState.py** : Représentation complète de l’état de combat (temps réel, simulé), conversion pour simulation, suivi des PV/statuts/moves.
- **DammageCalcSMOGON.py** : Interface API Smogon Damage Calc (Node.js), calculs exacts, interactions de type/statuts.
- **DammagePredict.py** : Simulation de tours, arbre MinMax/AlphaBeta, évaluation heuristique d’états.
- **MoveResolver.py** : Extraction des movesets depuis les fichiers Showdown.
- **generate_ai_teams.py** : Génération et sauvegarde d’équipes IA en batch.
- **Scripts batch** :
  - `start.bat` : Lanceur principal (menu, venv, dépendances, choix modes)
  - `launcher.bat` : Lancement multi-terminaux (Showdown, Damage Calc, IA)
  - `First_launch.bat`, `start_dammage-calc.bat`, etc. : Setup et serveurs.

---

## Notes techniques

- **Banlist** : Mew, Mewtwo, MissingNo, Celebi, Lugia, Ho-Oh exclus.
- **Format** : [Gen 2] Stadium OU (statuts, IV/EV fixes, pas d’objets, teams 6 Pokémon).
- **API Damage Calc** : Nécessite Node.js, lancez via `start_dammage-calc.bat`.
- **Showdown** : Serveur local, lancé via `start_showdown_server_start.bat`.
- **Logs** : Arbres de décision sauvegardés en JSON pour analyse.

---

## Crédits & ressources

- [poke-env](https://github.com/hsahovic/poke-env)  
- [Smogon Damage Calc](https://www.npmjs.com/package/@smogon/calc)  
- [Pokémon Showdown](https://github.com/smogon/pokemon-showdown)  
- Exports Showdown pour les sets gen2 (`gen2_boxes_inorder/`)

---

**Contact/Credit**: [Okdak-Sempai](https://github.com/Okdak-Sempai)

---

_“Ce projet vise à offrir une base solide pour la recherche, l’expérimentation et la compétition en IA Pokémon Gen 2, dans l’esprit FBD/Rapport : reproductible, transparent et modulaire.”_

---

> Pour toute question, suggestion ou rapport de bug, ouvrez une issue ou contactez le mainteneur.
