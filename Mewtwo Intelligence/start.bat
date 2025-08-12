@echo off
setlocal ENABLEEXTENSIONS
title Lancement IA Pokémon Stadium 2

:: Vérifie que Node.js est installé
where node >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Node.js n'est pas installe.
    echo Veuillez le telecharger ici : https://nodejs.org/
    pause
    exit /b 1
)

:: Vérifie que python3.9 est installé
where python3.9 >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERREUR] Python 3.9 n'est pas installe ou pas dans le PATH.
    pause
    exit /b 1
)

:: Vérifie version Python
for /f "tokens=2 delims= " %%i in ('python3.9 --version') do set PYVER=%%i
echo Version Python detectee : %PYVER%
echo %PYVER% | findstr /r "^3\.9\." >nul
if errorlevel 1 (
    echo [ERREUR] Python 3.9 requis. Version detectee : %PYVER%
    pause
    exit /b 1
)

:: Crée un venv si besoin
if not exist venv (
    echo Creation de l'environnement virtuel avec Python 3.9...
    python3.9 -m venv venv
)

:: Active l'environnement
call venv\Scripts\activate.bat

:: Installe les dépendances
echo Installation des dependances Python...
pip install -r requirements.txt >nul

:menu_principal
echo.
echo === MENU DE LANCEMENT ===
echo 1. Duel IA vs Humain
echo 2. Duel IA vs IA
set /p choix=Entrez votre choix [1/2] :

if "%choix%"=="1" (
    goto ia_vs_humain
) else if "%choix%"=="2" (
    goto ia_vs_ia
) else (
    echo Choix invalide.
    goto menu_principal
)

:ia_vs_humain
echo --- Choix de l'IA ---
:choix_ia_h
echo 1. Snell_Lv1 (naive)
echo 2. Snell_Lv2 (minmax 2 tours)
echo 3. Snell_Lv3 (minmax 3 tours)
set /p ia_num=Selectionnez l'IA [1-3] :
if "%ia_num%"=="1" (
    set IA_NAME=Snell_Lv1
) else if "%ia_num%"=="2" (
    set IA_NAME=Snell_Lv2
) else if "%ia_num%"=="3" (
    set IA_NAME=Snell_Lv3
) else (
    echo Choix invalide.
    goto choix_ia_h
)

:choix_team_h
echo --- Equipe de l'IA ---
echo 1. Equipe aleatoire
echo 2. Fichier equipe (.txt)
set /p teamopt=Votre choix [1/2] :

if "%teamopt%"=="1" (
    venv\Scripts\python.exe Mewtwo.py %IA_NAME%
    goto fin
) else if "%teamopt%"=="2" (
    set /p teamfile=Entrez le chemin du fichier equipe :
    venv\Scripts\python.exe Mewtwo.py %IA_NAME% %teamfile%
    goto fin
) else (
    echo Choix invalide.
    goto choix_team_h
)

:ia_vs_ia
echo --- Choix IA 1 ---
:choix_ia1
echo 1. Snell_Lv1
echo 2. Snell_Lv2
echo 3. Snell_Lv3
set /p ia1=IA 1 [1-3] :
if "%ia1%"=="1" (
    set IA1=Snell_Lv1
) else if "%ia1%"=="2" (
    set IA1=Snell_Lv2
) else if "%ia1%"=="3" (
    set IA1=Snell_Lv3
) else (
    echo Choix invalide.
    goto choix_ia1
)

echo --- Equipe pour IA 1 ---
:choix_team1
echo 1. Equipe aleatoire
echo 2. Fichier equipe (.txt)
set /p teamopt1=Votre choix [1/2] :
if "%teamopt1%"=="1" (
    set TEAM1=
) else if "%teamopt1%"=="2" (
    set /p TEAM1=Chemin equipe IA 1 :
) else (
    echo Choix invalide.
    goto choix_team1
)

echo --- Choix IA 2 ---
:choix_ia2
echo 1. Snell_Lv1
echo 2. Snell_Lv2
echo 3. Snell_Lv3
set /p ia2=IA 2 [1-3] :
if "%ia2%"=="1" (
    set IA2=Snell_Lv1
) else if "%ia2%"=="2" (
    set IA2=Snell_Lv2
) else if "%ia2%"=="3" (
    set IA2=Snell_Lv3
) else (
    echo Choix invalide.
    goto choix_ia2
)

echo --- Equipe pour IA 2 ---
:choix_team2
echo 1. Equipe aleatoire
echo 2. Fichier equipe (.txt)
set /p teamopt2=Votre choix [1/2] :
if "%teamopt2%"=="1" (
    set TEAM2=
) else if "%teamopt2%"=="2" (
    set /p TEAM2=Chemin equipe IA 2 :
) else (
    echo Choix invalide.
    goto choix_team2
)

:: Appel correct selon team fournie ou non
if defined TEAM1 (
    if defined TEAM2 (
        venv\Scripts\python.exe Mewtwo.py %IA1% %TEAM1% %IA2% %TEAM2%
    ) else (
        venv\Scripts\python.exe Mewtwo.py %IA1% %TEAM1% %IA2%
    )
) else (
    if defined TEAM2 (
        echo [ERREUR] Impossible de definir team IA2 sans team IA1.
        pause
        goto menu_principal
    ) else (
        venv\Scripts\python.exe Mewtwo.py %IA1% %IA2%
    )
)

goto fin

:fin
pause
