import { test, expect } from "@playwright/test";

test("Verify User record is deleted", async ({ page }) => {
    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await page.locator("//input[@name='username']").fill("Admin");
    await page.locator("//input[@name='password']").fill("admin123");

    await page.getByRole('button', { name: 'Login' }).click();
    // await page.getByRole('link', { name: 'PIM' }).click();
    // await page.getByRole('button', { name: ' Add' }).click();

    // await page.getByRole('textbox', { name: 'First Name' }).fill('Santosh');
    // await page.getByRole('textbox', { name: 'Last Name' }).fill('Chanda1');
    // await page.getByRole('textbox').nth(4).fill('9991');
    // await page.getByRole('button', { name: 'Save' }).click();

    await page.getByRole('link', { name: 'PIM' }).click();

    // let locator1 = await page.locator("//div[@class='oxd-table-cell oxd-padding-cell'][3]/div").all();
    // let locator1 = await page.locator("//div[@class='oxd-table-cell oxd-padding-cell']").count();
    // let locator1 = await page.locator("//div[@class='oxd-table-card-cell']/div").count();

    /*
        await page.locator("//div[@class='oxd-table orangehrm-employee-list']").waitFor();
        let locator1 = await page.locator("//div[@class='oxd-table-card-cell']//div[@class='data']").all();
        console.log(locator1.length);
    */
    //div[@class='oxd-table orangehrm-employee-list']/div[@class='oxd-table-body']/
    //div[@class='oxd-table-card-cell']/div[1]

    //div[@class='oxd-table orangehrm-employee-list']//div[@class='oxd-table-body oxd-card-table-body']



    //  await page.getByRole('button', { name: ' Yes, Delete' }).click();
    // await page.pause();

    // 1. Wait for the main container
    await page.locator("//div[@class='oxd-table orangehrm-employee-list']").waitFor();
    page.waitForTimeout(3000);

    // 2. Wait for at least one data card element to load in the DOM
    const dataElements = page.locator("//div[@class='oxd-table-card-cell']//div[@class='data']");
    await dataElements.first().waitFor({ state: 'attached' });

    // 3. Get the stable count and loop through them safely
    const count = await dataElements.count();
    console.log(`Total elements found: ${count}`);

    for (let i = 0; i < count; i++) {
        const text = await dataElements.nth(i).textContent();
        console.log(text);
    }

    await page.pause();
});