# DemoQA UI Automation (Playwright + JS, POM)

## What this does
- Logs into https://demoqa.com/login with a manually created user
- Validates username + Logout button on Profile
- Goes to Book Store
- Searches "Learning JavaScript Design Patterns"
- Verifies result, saves Title/Author/Publisher to `test-results/book_info.txt`
- Logs out

## Setup
```bash
cd ui-playwright
npm install
npm run install:browsers
cp .env.example .env
# fill DemoQA_UserName / DemoQA_Password with the user you created manually
