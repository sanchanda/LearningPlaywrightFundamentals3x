import { test, expect } from "@playwright/test";
import { SESSION_FILE } from "./231_SessionStorage";


//Run 231_SessionStorage.ts before running this tests to generate user-session.json

test.use({
    storageState: SESSION_FILE,
    screenshot: "only-on-failure",

});

test("go directly to dashboard — Test1 ", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1282813");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");

});

test("go directly to dashboard — Test2 ", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1282813");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");

});

test("go directly to dashboard3 — Test3", async ({ page }) => {
    await page.goto("https://app.wingify.com/#/dashboard?accountId=1281316");
    await expect(page).toHaveURL(/dashboard/);
    console.log("Dashboard loaded — no login needed ✅");
    await page.waitForTimeout(3000);
});

