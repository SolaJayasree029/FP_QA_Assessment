**Assessment Projects** — UI & API Automation
-> This repo includes two assignments:
1. UI Automation (Playwright – JavaScript)
2. API Automation (Postman – ReqRes API)

**UI Assignment – DemoQA Book Store**
Tools: Playwright, Node.js, JavaScript
Scenario:
Login to DemoQA Book Store
Validate username and logout button
Search for “Learning JavaScript Design Patterns”
Validate search result
Extract Title, Author, Publisher → save to file
Logout successfully

**Run steps:**
cd UI_Assignment
npm install
npx playwright install
npm test
npm run report

Outputs:
Book info → test-results/book-info.txt
Report → playwright-report/index.html

**API Assignment – ReqRes.in**
Tools: Postman, Newman
Scenario:
Create a new user (POST)
Get user details (GET)
Update user name (PUT)
Validate status codes and data consistency

**Run steps (Postman):**
Import:
FinacPlus.postman_collection.json
Reqres env.postman_environment.json

Run with Collection Runner
or via CLI

Author: Sola Jayasree
