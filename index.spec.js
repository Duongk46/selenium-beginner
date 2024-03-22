const { By, Builder, Browser } = require('selenium-webdriver');
const assert = require("assert");
const { suite } = require('selenium-webdriver/testing');

suite(function (env) {
    describe("Test Login Page", function () {
        let driver;

        before(async function () {
            driver = await env.builder().build();
        });

        after(async function () {
            await driver.quit();
        });

        it("Test Case 1", async function () {
            await driver.get("http://127.0.0.1:5500/index.html");
            let username = await driver.findElement(By.id('floatingInput'));
            let password = await driver.findElement(By.id('floatingPassword'));
            let submitButton = await driver.findElement(By.className('btn-submit'));
            await username.sendKeys("admin");
            await password.sendKeys("Admin@123");
            await submitButton.click();
            let alert = await driver.switchTo().alert();
            let actualResult = await alert.getText();
            assert.equal(actualResult, "Đăng nhập thành công", "Fail");
            await alert.accept();
        });

        it("Test Case 2", async function () {
            await driver.get("http://127.0.0.1:5500/index.html");
            let username = await driver.findElement(By.id('floatingInput'));
            let password = await driver.findElement(By.id('floatingPassword'));
            let submitButton = await driver.findElement(By.className('btn-submit'));
            await username.sendKeys("admin");
            await password.sendKeys("wrongpassword");
            await submitButton.click();
            try {
                let alert = await driver.switchTo().alert();
                let actualResult = await alert.getText();
                assert.equal(actualResult, "Đăng nhập thất bại", "Fail");
                await alert.accept();
            } catch (error) {
                if (error.name === "UnexpectedAlertOpenError") {
                    console.log("Cửa sổ cảnh báo không đúng");
                } else {
                    throw error;
                }
            }
        });
    });
}, { browsers: [Browser.CHROME] })