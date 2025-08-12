@echo off
cd /d "%~dp0\pokemon-showdown-master"
echo [INFO] Build du serveur...
call npm run build

echo [INFO] Démarrage du serveur...
call npm run start

pause
