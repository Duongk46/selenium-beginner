const { By, Builder, Browser } = require('selenium-webdriver');
const assert = require("assert");
const { it } = require('mocha');

describe("Test Login Page", function() {
    let driver;

    before(async function () {
        driver = await new Builder().forBrowser(Browser.CHROME).build();
    });

    after(async function () {
        await driver.quit();
    });

    it("Test Case 1: Verify Title", async function () {
        await driver.get("http://127.0.0.1:5500/index.html");
        let title = await driver.getTitle();
        assert.equal("Web form", title);
    });
    
    it("Test Case 2: Verify Login", async function () {
        await driver.get("http://127.0.0.1:5500/index.html");
        
        let username = await driver.findElement(By.id('floatingInput'));
        let password = await driver.findElement(By.id('floatingPassword'));
        let submitButton = await driver.findElement(By.className('btn btn-primary btn-login text-uppercase fw-bold'));
        
        await username.sendKeys('admin@gmail.com');
        await password.sendKeys('123');
        await submitButton.click();

        let alert = await driver.switchTo().alert();
        let actualResult = await alert.getText();

        assert.equal(actualResult, "Login successful!");
    });
});