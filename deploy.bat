@echo off
echo Building project for production...
call npm run build
echo Build completed!

echo Creating deployment folder...
if not exist ".\deploy" mkdir ".\deploy"
echo Clearing old deployment files...
if exist ".\deploy\*" del /q ".\deploy\*"

echo Copying dist files to deployment folder...
xcopy ".\dist\*" ".\deploy\" /E /H /C /I

echo Creating a basic readme file...
echo # CreativeFussion > ".\deploy\README.md"
echo Freelancer website for creative services >> ".\deploy\README.md"

echo.
echo ===== DEPLOYMENT READY =====
echo.
echo Your deployment files are ready in the 'deploy' folder!
echo.
echo To finish deploying:
echo 1. Go to https://github.com/ideepsaggu76/CreativeFussion/settings/pages
echo 2. Under "Build and deployment", select "Deploy from a branch"
echo 3. Choose "gh-pages" branch and "/ (root)" folder
echo 4. Click Save
echo.
echo Then upload all files from the 'deploy' folder to your 'gh-pages' branch.
echo Your website will be available at: https://ideepsaggu76.github.io/CreativeFussion/
echo.
pause 