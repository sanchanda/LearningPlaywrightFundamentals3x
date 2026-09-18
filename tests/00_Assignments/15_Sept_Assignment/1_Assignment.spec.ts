import { test, expect } from '@playwright/test';

test('Verify testcase using XPATH Locators', async ({ page }) => {
    await page.goto('https://katalon-demo-cura.herokuapp.com/');
    await page.locator("//a[@id='btn-make-appointment']").click();
    await page.locator("//input[@id='txt-username']").fill('John Doe');
    await page.locator("//input[@id='txt-password']").fill('ThisIsNotAPassword');
    await page.locator("//button[@id='btn-login']").click();

    let verifyMessage = await page.locator("//h2").textContent();
    expect(verifyMessage).toBe('Make Appointment');

    await page.pause();


});