@echo off
echo [INFO] Lancement des 3 Terminaux Principaux.

:: Serveur Damage Calc
start cmd /k "call start_dammage-calc.bat"

:: Serveur Pokémon Showdown start
start cmd /k "start_showdown_server_start.bat"

:: Lance ton script start.bat existant
start cmd /k "call start.bat"
