import { test, expect, Page } from "@playwright/test";


async function getProductNames(page: Page) {
    let pageCount = 1;
    let productCount = 1;
    while (true) {


        const productCards = page.locator("div[data-id]");
        const productsOnPage = await productCards.count();

        console.log(`---------------- Page Number : ${pageCount}, Product Names Count : ${productsOnPage} -------------`);

        for (let i = 0; i < productsOnPage; i++) {
            const card = productCards.nth(i);
            const productName = await card.locator(".RG5Slk").innerText();
            const productPrice = await card.locator(".hZ3P6w.DeU9vF").innerText();
            console.log(`Product No: ${productCount} , Product Name : ${productName} , Price : ${productPrice}`);
            productCount++;
        }

        const nextPageLink = page.getByRole("link", { name: "Next" });
        if (!(await nextPageLink.isVisible())) {
            break;
        }

        const firstProductTitle = page.locator("div[data-id] .RG5Slk").first();
        const previousFirstTitle = await firstProductTitle.innerText();

        await nextPageLink.first().click();
        await page.waitForLoadState("domcontentloaded");
        await expect(firstProductTitle).not.toHaveText(previousFirstTitle, { useInnerText: true, timeout: 30_000 });

        pageCount++;
    }
}

test("Fetch DSLR Camera Results from flipkat", async ({ page }) => {
    test.setTimeout(120_000);
    await page.goto("https://www.flipkart.com/");
    await page.locator("input[name='q']").first().fill("DSLR Camera");
    await page.locator("input[name='q']").first().press('Enter');
    await page.waitForLoadState('domcontentloaded');
    await page.locator("div[data-id]").first().waitFor({ state: "visible" });
    await getProductNames(page);

    //await page.pause();
});
