import { chromium } from 'playwright';
import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.resolve(__dirname, '../../.env') });

export const SESSION_FILE = path.resolve(__dirname, '../../user-session.json');

const VMO_USER: string = process.env.VMO_USER!;
const VMO_PASSWORD: string = process.env.VMO_PASSWORD!;

console.log(`Env loaded: user=${!!VMO_USER}, password=${!!VMO_PASSWORD}`)

export async function saveSession() {

    let browser = await chromium.launch({ headless: false });

    try {
        let context = await browser.newContext({ storageState: undefined });
        let page = await context.newPage();

        await page.goto("https://app.wingify.com/#/login");
        await page.fill("#login-username", VMO_USER);
        await page.fill("#login-password", VMO_PASSWORD);
        await page.click("#js-login-btn");

        await page.waitForURL(/#\/(dashboard|home)/, { timeout: 15000 });
        await context.storageState({ path: SESSION_FILE });
        console.log(`User session save to ${SESSION_FILE}`);
    } finally {
        await browser.close();
    }

};

if (require.main === module) {
    console.log(SESSION_FILE)
    saveSession();

}

//npx tsx tests/04_Session_Storage/231_SessionStorage.ts
//[npx --yes tsx 231_SessionStorage.ts 2>&1
