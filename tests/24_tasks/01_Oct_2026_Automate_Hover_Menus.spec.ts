import { test, expect } from '@playwright/test';

test("Verify", async ({ page }) => {

    await page.goto("https://app.thetestingacademy.com/playwright/widgets/hover-menu");
    await page.getByTestId("nav-add-ons").hover();

    await page.getByTestId("test-id-Wifi").click();
    const output = JSON.parse(await page.getByTestId("hover-output").innerText());

    expect(output).toMatchObject({
        clicked: "📶\nWi-Fi",
        testId: "test-id-Wifi",
    });

    await page.pause();

});