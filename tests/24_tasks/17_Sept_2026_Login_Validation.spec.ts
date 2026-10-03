import { test, expect } from "@playwright/test";

test("Verify Login Validation", async ({ page }) => {
    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");
    await page.getByRole('textbox', { name: 'Email Address' }).fill('Santosh@dummy.com');
    await page.getByRole('textbox', { name: 'Password' }).fill('Dummy');
    await page.locator("input[name=remember]").check();

    await page.getByRole('button', { name: 'Login to Practice Account' }).click();
    expect(page.url()).toContain("https://app.thetestingacademy.com/playwright/multiple_element_filter");

});
