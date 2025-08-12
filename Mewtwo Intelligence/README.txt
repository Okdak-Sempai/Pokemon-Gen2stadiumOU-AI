Ce programme est fait pour tourner en python 3.9.
Le serveur privé et le dammage-calc nécessitent Node.js.
Testé sur Windows 12.

1. Installer les fichiers nécessaires.
https://www.python.org/downloads/release/python-390/
https://nodejs.org/en

2. Pré installations nécessaire.
Lancer le fichier First_launch.bat
Attendre sa fermeture.


3. Exécuter le launcher.
Lancer launcher.bat

Launcher.bat va démarrer 3 terminaux Distincts:
-le serveur à [http://localhost:8001] (à ouvrir sur le navigateur)
-l'API Damage Calc et le menu pour Lancer les IA.
- Le menu interactif pour lancer les IA
La fermeture d'un des 3 terminaux rendra les autres défectueux. Il faut donc laisser les 3 terminaux ouverts.

Pour constituer vos équipes:
Veillez-vous connectez au [http://localhost:8001] via un navigateur (En haut à gauche)[choose name] avec le pseudonyme Descartes01

Pour constituer une équipe copiez collez entièrement le contenu de ALLTEAMS.txt dans
[Teambuilder] -> [Backup/Restore all teams] -> Collez brut le contenu de ALLTEAMS.txt -> [Save]
Pour constituer une équipe:
[New Team] -> [Select a format] -> [Gen 2 Stadium OU]{Il est tout en bas a droite dans [Past Generations]}
Ensuite depuis les boites choisissez votre pokémon et copiez le avec le bouton [Copy] ; Retournez dans votre Equipe et appuyez sur [Paste]
Une fois les 6 pokémons choisis faites [Validate] pour vérifier que l'équipe est bien valide pour vous battre avec les différentes IA.
Note: Les sets ne sont pas personnalisables.

Il est possible de générer des équipes au hasard et de les utiliser avec generate_ai_teams.py
Elle seront dans le dossier AI_TEAMS et pour les importer il suffit de copier le contenu et aller dans
[Teambuilder] -> [New Team] -> [Import from text or URL]  -> Coller la team -> [Save] -> [Validate]

Une fois connecté et vos ou votre équipe prête vous pouvez utiliser le menu qui permet de choisir son IA et son équipe(Elle aura une équipe aléatoire si pas de chemin d'équipe fourni):
4.Cas d'utilisation supportés :

4.1 Via le Menu du fichier bat.
Le menu vous permet de :
- Lancer un match entre une IA et un humain ("Descartes01")
- Lancer un match entre deux IA
- Choisir une équipe aléatoire ou fournir un fichier .txt contenant 6 Pokémon

4.2 via commande Terminale.
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

