## 1. Create a Setup Test to Handle LoginCreate a dedicated file to handle the authentication and save the state.

typescript// tests/auth.setup.ts
import { test as setup, expect } from '@playwright/test';

// Define where the session file will be saved
const authFile = 'playwright/.auth/user.json';

setup('authenticate', async ({ page }) => {
  // 1. Navigate to your login page
  await page.goto('https://example.com');

  // 2. Perform login actions
  await page.getByLabel('Username').fill('my-user');
  await page.getByLabel('Password').fill('my-password');
  await page.getByRole('button', { name: 'Log in' }).click();

  // 3. Wait for the page to redirect or load user data to ensure login succeeded
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();

  // 4. End-of-operation: Save the cookies/storage state
  await page.context().storageState({ path: authFile });
});

## 2. Configure playwright.config.tsModify your configuration file to tell Playwright to run the setup project first and feed the saved state into your standard tests.

import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    // 1. Setup project to run first
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
    },

    // 2. Main testing project(s)
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
        // Tell all tests in this project to use the saved auth state
        storageState: 'playwright/.auth/user.json',
      },
      // Wait for the setup project to successfully complete before running
      dependencies: ['setup'],
    },
  ],
});

## Write Your Standard TestsNow, your test files can be completely isolated and run in parallel. They will start already logged in.

typescript// tests/dashboard.spec.ts
import { test, expect } from '@playwright/test';

test('can view dashboard analytics', async ({ page }) => {
  // This page will open already authenticated!
  await page.goto('https://example.com'); 
  await expect(page.getByText('Monthly Revenue')).toBeVisible();
});

test('can view user profile', async ({ page }) => {
  await page.goto('https://example.com');
  await expect(page.getByText('Welcome, my-user')).toBeVisible();
});