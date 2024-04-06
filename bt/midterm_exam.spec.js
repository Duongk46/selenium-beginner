const { By, Button, Browser, until, Builder, Key } = require('selenium-webdriver');
const assert = require('assert');
const { suite, ignore } = require('selenium-webdriver/testing');
suite(function (env) {
    describe("running test web saucedemo", function () {
        let driver;
        before(async () => driver = await env.builder().build())
        after(async () => await driver.quit())
        it("Case Autotest", async function () {
            // let driver = new Builder().forBrowser('chrome').build();
            try {
                await driver.get("https://www.saucedemo.com/");
                let userName = await driver.findElement(By.name('user-name'));
                let password = await driver.findElement(By.name('password'));
                await userName.sendKeys("standard_user");
                await password.sendKeys("secret_sauce", Key.RETURN);
                const title = await driver.getTitle();
                assert.strictEqual(title, 'Swag Labs', "Login failed");
                let btns = await driver.findElements(By.className("btn btn_primary btn_small btn_inventory "));
                let btnCart = await driver.findElement(By.className("shopping_cart_link"));
                btns.map((item) => {
                    item.click();
                });
                btnCart.click();
            }
            catch (ex) {
                console.log(ex);
                throw new Error(ex.message);
            }
        })
    })
}, { browsers: [Browser.CHROME] })