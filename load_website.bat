@echo off
SETLOCAL

:: Check for Python installation
python --version >nul 2>&1
IF %ERRORLEVEL% NEQ 0 (
    echo Python is not installed. Please install Python to use this script.
    exit /b 1
)

:: Start Python HTTP server
echo Starting local server...
start python -m http.server
echo Server started. Opening website in default browser...
start http://localhost:8000/index.html

echo Press any key to stop the server.
pause >nul
echo Stopping the server...
taskkill /im python.exe /f