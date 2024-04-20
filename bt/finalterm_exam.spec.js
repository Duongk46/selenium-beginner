const { By, Button, Browser, until, Builder, Key } = require('selenium-webdriver');
const assert = require('assert');
const { suite, ignore } = require('selenium-webdriver/testing');
suite(function (env) {
    describe("running test web saucedemo", function () {
        let driver;
        before(async () => driver = await env.builder().build())
        after(async () => await driver.quit())
        it("Test case 1: Login successfully", async function () {
            // let driver = new Builder().forBrowser('chrome').build();
            try {
                await driver.get("https://www.saucedemo.com/");
                let userName = await driver.findElement(By.name('user-name'));
                let password = await driver.findElement(By.name('password'));
                await userName.sendKeys("standard_user");
                await password.sendKeys("secret_sauce", Key.RETURN);
                let titleUrls = await driver.getCurrentUrl();
                assert.equal(titleUrls, "https://www.saucedemo.com/inventory.html", "Login failed");
                console.log("Done verify login: login successfully")
                let btns = await driver.findElements(By.className("btn btn_primary btn_small btn_inventory "));
                let btnCart = await driver.findElement(By.className("shopping_cart_link"));
                btns.map(async (item) => {
                    await item.click();
                });
                await btnCart.click();
                let btnCheckOut = await driver.findElement(By.name("checkout"));
                await btnCheckOut.click();
                await driver.findElement(By.name("firstName")).sendKeys("Nguyen");
                await driver.findElement(By.name("lastName")).sendKeys("Duong");
                await driver.findElement(By.name("postalCode")).sendKeys("10000");
                await driver.findElement(By.id("continue")).click();
                await driver.findElement(By.id("finish")).click();
                await driver.sleep(1000);
                let txtComplete = await driver.findElement(By.className("complete-header")).getText();
                assert.equal(txtComplete, "Thank you for your order!", "Checkout unCompleted");
                console.log("Done verify checkout: checkout successfully")
            }
            catch (ex) {
                console.log(ex);
                throw new Error(ex.message);
            }
        })
    })
}, { browsers: [Browser.CHROME] })