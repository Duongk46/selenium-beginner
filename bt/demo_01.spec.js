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
                await userName.sendKeys("xuanhuong2002.hp@gmail.com");
                await password.sendKeys("huongnguyen2707", Key.RETURN);
                // await driver.wait(until.titleContains('GitHub'), 5000);
                const title = await driver.getTitle();
                console.log(title);
                driver.sleep(5000);
                assert.strictEqual(title, 'Sign in to GitHub · GitHub', 'Login failed');
            }
            catch (ex) {
                console.log(ex);
                throw new Error(ex.message);
            }
        });
    });
}, { browsers: [Browser.CHROME] })