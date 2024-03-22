
const { By, Button, Browser, until, Builder, Key } = require('selenium-webdriver');
const { suite, ignore } = require('selenium-webdriver/testing');
const assert = require('assert');

suite(function (env) {
    describe("Test login in page github", function () {
        let driver;
        before(async () => {
            driver = await env.builder().build();
        });

        after(async () => await driver.quit());
        // ignore(env.browsers(Browser.FIREFOX, Browser.SAFARI)).it('Back click', async function () {
        //     await driver.get('https://selenium.dev/selenium/web/mouse_interaction.html');
        //     await driver.findElement(By.id("click")).click();

        //     assert.deepStrictEqual(await driver.getTitle(), `We Arrive Here`)

        //     const actions = driver.actions({ async: true });
        //     await actions.press(Button.BACK).release(Button.BACK).perform()

        //     assert.deepStrictEqual(await driver.getTitle(), `BasicMouseInterfaceTest`)
        // });

        // ignore(env.browsers(Browser.FIREFOX, Browser.SAFARI)).it('Forward click', async function () {
        //     await driver.get('https://selenium.dev/selenium/web/mouse_interaction.html');
        //     await driver.findElement(By.id("click")).click();
        //     await driver.navigate().back();

        //     assert.deepStrictEqual(await driver.getTitle(), `BasicMouseInterfaceTest`)

        //     const actions = driver.actions({ async: true });
        //     await actions.press(Button.FORWARD).release(Button.FORWARD).perform()

        //     assert.deepStrictEqual(await driver.getTitle(), `We Arrive Here`)
        // });
        ignore(env.browsers(Browser.FIREFOX, Browser.SAFARI)).it("Test case 1", async function () {
            try {
                // driver = await new Builder().forBrowser(Browser.CHROME).build();
                await driver.get('https://github.com/login');
                let userName = await driver.findElement(By.id('login_field'));
                let password = await driver.findElement(By.id('password'));
                await userName.sendKeys("...");
                await password.sendKeys("...", Key.RETURN);
                await driver.wait(
                    until.elementLocated(By.name('commit')),
                    5000);
            }
            catch (ex) {
                console.log(ex)
            }
        });
    })
}, { browsers: [Browser.CHROME] })
