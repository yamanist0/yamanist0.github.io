@echo off
cd /d "%~dp0"
if not exist node_modules (
  npm install
)
echo Build step completed.
