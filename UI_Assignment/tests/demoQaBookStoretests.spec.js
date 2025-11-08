import { test, expect } from '@playwright/test';
import 'dotenv/config';
import * as fs from 'node:fs';
import * as path from 'node:path';
import { LoginPage } from '../pages/LoginPage.js';
import { ProfilePage } from '../pages/ProfilePage.js';
import { BookStorePage } from '../pages/BookStorePage.js';

const UserName = process.env.DemoQA_UserName;
const Password = process.env.DemoQA_Password;

test('DemoQA Book Store flow (POM)', async ({ page }) => {
  if (!UserName || !Password) throw new Error('Set DEMOQA_USERNAME and DEMOQA_PASSWORD in .env');

  const login = new LoginPage(page);
  const profile = new ProfilePage(page);
  const store = new BookStorePage(page);

  // Login
  await login.goto();
  await login.login(UserName, Password);
  await profile.expectLoggedInAs(UserName);

  // Navigate to Book Store
  await profile.gotoBookStore();

  // Search book
  const query = 'Learning JavaScript Design Patterns';
  await store.search(query);

  // Validate and capture
  await store.expectFirstResultContains(query);
  const data = await store.getFirstResultData();

  // Save Title, Author, Publisher to a file
  const outDir = path.join('test-results');
  fs.mkdirSync(outDir, { recursive: true });
  fs.writeFileSync(
    path.join(outDir, 'book_info.txt'),
    `Title: ${data.title}\nAuthor: ${data.author}\nPublisher: ${data.publisher}\n`,
    'utf-8'
  );

  // Logout
  await profile.logout();
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
});
