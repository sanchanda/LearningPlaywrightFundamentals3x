import { test, expect } from '@playwright/test';

test("Usage of Filters", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/multiple_element_filter");

    await page.locator("a.list-group-item").filter({ hasText: "Forgotten Password" }).click();

    const privacy_link = page.locator("footer a").filter({ hasText: "Privacy Policy" });

    await expect(privacy_link).toHaveAttribute("href", "#privacy-policy");

    await page.pause();



});