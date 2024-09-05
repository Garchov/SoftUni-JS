import { chromium } from 'playwright-chromium';
import { expect } from 'chai';

let browser;
let page;

describe('E2E  suite', function() {
    this.timeout(6000); // Increase the timeout for longer tests

    before(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 2000 });
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
        await page.goto('http://127.0.0.1:50964/01.%20Accordion/index.html');
        
        const content = await page.$$eval('div.head span', item=> item.map(i=>i.textContent)); // 
        // Get text content of all span elements
        expect(content).to.contain('Scalable Vector Graphics');
    });
    it('button "More" functionality', async()=>{
        await page.goto('http://127.0.0.1:50964/01.%20Accordion/index.html');
        await page.click('text=more');

        const visible = await page.isVisible('.accordion .extra');

        expect(visible).to.be.true;

    })
});