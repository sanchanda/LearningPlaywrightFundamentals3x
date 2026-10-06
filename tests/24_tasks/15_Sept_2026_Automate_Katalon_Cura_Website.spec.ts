import { test, expect } from "@playwright/test";

test("Verify Text Make Appointment after login", async ({ page }) => {
    await page.goto("https://katalon-demo-cura.herokuapp.com/");
    await page.getByRole('link', { name: 'Make Appointment' }).click();
    await page.locator("#txt-username").fill('John Doe');
    await page.locator("#txt-password").fill('ThisIsNotAPassword');
    await page.getByRole('button', { name: 'Login' }).click();

    await page.waitForLoadState('domcontentloaded');
    expect(page.getByRole('heading', { name: 'Make Appointment' })).toBeVisible();
})