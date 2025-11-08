import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  timeout: 60_000,
  expect: { timeout: 10_000 },
  reporter: [['list'], ['allure-playwright'], ['html', { open: 'never' }]],
  retries: 1,
  use: {
    baseURL: 'https://demoqa.com',
    viewport: { width: 1400, height: 900 },
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    launchOptions: { slowMo: 300 } 
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } }
  ]
});
