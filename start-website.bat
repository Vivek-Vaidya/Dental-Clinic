@echo off
title Dental Clinic - Website Launcher
color 0A

:: ──────────────────────────────────────────────
:: Always run from the folder where this .bat lives
:: ──────────────────────────────────────────────
cd /d "%~dp0"

echo.
echo  =============================================
echo    Dental Clinic Website Launcher
echo  =============================================
echo.

:: ── Check that node_modules exists ─────────────
if not exist "node_modules\" (
    echo  [!] node_modules not found. Running npm install first...
    echo.
    npm install
    if errorlevel 1 (
        echo.
        echo  [ERROR] npm install failed. Please check your Node.js installation.
        pause
        exit /b 1
    )
    echo.
    echo  [OK] Dependencies installed successfully.
    echo.
)

:: ── Kill any existing process on port 3000 ─────
echo  [*] Checking for processes on port 3000...
for /f "tokens=5" %%a in ('netstat -aon ^| findstr ":3000 " 2^>nul') do (
    taskkill /PID %%a /F >nul 2>&1
)

:: ── Launch the dev server in a persistent window ─
echo  [*] Starting Next.js development server...
echo.
start "Dental Clinic - Dev Server" cmd /k "cd /d "%~dp0" && npm run dev"

:: ── Poll until port 3000 is listening ──────────
echo  [*] Waiting for server to be ready...
set /a attempts=0
:WAIT_LOOP
    set /a attempts+=1
    if %attempts% gtr 30 (
        echo.
        echo  [WARN] Server took too long. Opening browser anyway...
        goto OPEN_BROWSER
    )
    :: Check if port 3000 is listening
    netstat -an | findstr ":3000 " | findstr "LISTENING" >nul 2>&1
    if errorlevel 1 (
        timeout /t 2 /nobreak >nul
        goto WAIT_LOOP
    )

:OPEN_BROWSER
echo.
echo  [OK] Server is ready!
echo  [*] Opening http://localhost:3000 in your browser...
echo.
start http://localhost:3000

echo  =============================================
echo    Website is running at http://localhost:3000
echo    Close the "Dev Server" window to stop it.
echo  =============================================
echo.
