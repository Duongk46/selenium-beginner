const { By, Button, Browser, until, Builder, Key } = require('selenium-webdriver');
const assert = require('assert');
const { suite, ignore } = require('selenium-webdriver/testing');
suite(function (env) {
    describe("Test login in page github", function () {
        let driver;
        before(async () => driver = await env.builder().build())
        after(async () => await driver.quit())
        it("Test case 1", async function () {
            // let driver = new Builder().forBrowser('chrome').build();
            try {
                await driver.get('https://github.com/login');
                let userName = await driver.findElement(By.id('login_field'));
                let password = await driver.findElement(By.id('password'));
                await userName.sendKeys("minhduong18072002@gmail.com");
                await password.sendKeys("minhduong180702d@Daaa", Key.RETURN);
                await driver.wait(until.titleContains('GitHub'), 5000);

                const title = await driver.getTitle();
                assert.strictEqual(title, 'GitHub', 'Login failed');
            }
            catch (ex) {
                console.log(ex);
            }
        });
    });
}, { browsers: [Browser.EDGE] })