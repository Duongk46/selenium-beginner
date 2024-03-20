const { By, Browser, logging } = require('selenium-webdriver');
const { suite } = require('selenium-webdriver/testing');
const commonFunc = require('./commonFunc');

suite(function (env) {
    describe('Click and release', function () {
        let driver;

        before(async function () {
            driver = await env.builder().build();
        });

        after(() => driver.quit());

        it('Mouse move and click on an element', async function () {
            await driver.get('https://www.selenium.dev/selenium/web/mouse_interaction.html');
            let click = driver.findElement(By.id("click"));
            const actions = driver.actions({ async: true });
            await actions.move({ origin: click }).click().perform();

            const logs = await driver.manage().logs().get(logging.Type.BROWSER);
            commonFunc.logError(logs)
        });

    });
}, { browsers: [Browser.CHROME] });