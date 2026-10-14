import { test, expect, Locator } from '@playwright/test'
import path from 'path';
import dotenv from 'dotenv';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });


test.describe("Profile pic uploads", () => {
    const URL = "https://app.thetestingacademy.com/login";

    test.beforeEach(async ({ page }) => {
        await page.goto(URL);
    });



    test("Profile pic upload", async ({ page }) => {
        const filepath = path.join(__dirname, 'Santosh-Image.png');
        const TTA_USER: string = process.env.TTA_USER!;
        console.log(TTA_USER);
        await page.locator("input[id='identifier-field']").fill(TTA_USER);

        await page.getByText('Continue', { exact: true }).click();

        await page.getByText('Settings', { exact: true }).click();
        await page.locator("#avatar-upload").setInputFiles(filepath)
        // await page.locator("label[for='avatar-upload']").click();
        await page.pause();
    });
});