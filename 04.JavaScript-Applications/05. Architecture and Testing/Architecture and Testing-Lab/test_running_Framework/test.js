import { chromium } from 'playwright-chromium';
import { expect } from 'chai';

let browser;
let page;

describe('E2E  suite', function() {
    this.timeout(6000); // Increase the timeout for longer tests

    before(async () => {
        browser = await chromium.launch();
    });

    after(async () => {
        await browser.close(); 
    });

    beforeEach(async () => {
        page = await browser.newPage();
    });

    afterEach(async () => {
        await page.close();
    });

    it('Creates a screenshot', async () => {
        await page.goto('https://playwright.dev/');
        await page.screenshot({ path: `example.png` });
    });
});