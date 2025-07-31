@echo off
REM This script drives the standalone sass-migrator package, which bundles together a
REM Dart executable and a snapshot of sass-migrator.

set SCRIPTPATH=%~dp0
set arguments=%*
"%SCRIPTPATH%\src\dart.exe" "%SCRIPTPATH%\src\sass-migrator.snapshot" %arguments%
