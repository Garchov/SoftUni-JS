const { chromium } = require('playwright');
const assert = require('assert');

describe('Basic Playwright Test', function() {
    it('should load the webpage', async function() {
        const browser = await chromium.launch();
        const page = await browser.newPage();
        await page.goto('http://example.com');
        const title = await page.title();
        assert.strictEqual(title, 'Example Domain');
        await browser.close();
    });
});