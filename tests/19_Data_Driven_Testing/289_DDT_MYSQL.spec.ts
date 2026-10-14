import { test, expect } from '@playwright/test';
import { readMySQL } from './util/mysqlReader';

test.describe('DDT MySQL', () => {
    // Loaded synchronously so each database row becomes its own test().
    // Requires the playwright_ddt schema — run testdata/seed.sql first.
    const loginData = readMySQL(`
        SELECT description, username, password,
               should_pass AS shouldPass, expected_error AS expectedError
        FROM login_data
        WHERE is_active = 1
        ORDER BY id
    `);

    for (const data of loginData) {

        test(`Login with : ${data.description}`, async ({ page }) => {
            await page.goto('https://app.thetestingacademy.com/playwright/multiple_element_filter');

            let textboxEmailAddress = page.getByRole("textbox", { name: "Email Address" });
            let textboxPassword = page.getByRole("textbox", { name: "Password" }).or(page.locator("#password")).or(page.locator("[name=\"password\"]"));
            let buttonLoginToPracticeAccount = page.getByRole("button", { name: "Login to Practice Account" }).or(page.getByTestId("login-button")).or(page.getByText("Login to Practice Account"));
            await textboxEmailAddress.fill(data.username);
            await textboxPassword.fill(data.password);
            await buttonLoginToPracticeAccount.click();

            await expect(page).toHaveURL(/login-success/);

        });

    }

});
