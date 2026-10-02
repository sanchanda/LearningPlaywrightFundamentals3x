import { test, expect } from "@playwright/test";

test("Fetch DSLR Camera Results from flipkat", async ({ page }) => {

    await page.goto("https://www.flipkart.com/");
    await page.locator("//input[@type='text']").first().press('Escape');
    await page.locator("//input[@type='text']").first().fill("DSLR Camera");
    await page.locator("//input[@type='text']").first().press('Enter');
    await page.locator("//div[@class='RG5Slk']").first().waitFor();

    //console.log("Product Count : ", productNamesCount);
    let pageCount = 1;
    while (true) {

        await page.locator("//div[@class='RG5Slk']").first().waitFor();
        let productNamesCount = await page.locator("//div[@class='RG5Slk']").count();

        console.log("---------------- Page Number : ", pageCount, productNamesCount, "----------------------------");

        for (let i = 0; i < productNamesCount; i++) {
            let productName = await page.locator("//div[@class='RG5Slk']").nth(i).innerText();
            let productPrice = await page.locator("//div[@class='hZ3P6w DeU9vF']").nth(i).innerText();
            console.log(`Product Name ${i} : ${productName} , Price : ${productPrice}`);

        }

        let nextPageLink = page.getByRole("link", { name: "Next" });
        if (await nextPageLink.count() > 0) {
            let firstProduct = await page.locator("//div[@class='RG5Slk']").first().innerText();
            await nextPageLink.first().click();
            await page.waitForURL(new RegExp(`[?&]page=${pageCount + 1}(&|$)`));
            await expect(page.locator("//div[@class='RG5Slk']").first()).not.toHaveText(firstProduct, { timeout: 15000 });
        } else {
            break;
        }
        pageCount++;
    }

    // await page.pause();
});