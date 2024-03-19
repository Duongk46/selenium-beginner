const { Builder, By, Key, until } = require("selenium-webdriver");


(async function test01() {
    let driver = new Builder().forBrowser("chrome").build();
    try {
        driver.get("https://www.google.com");
        await driver.findElement(By.id("APjFqb")).sendKeys("test", Key.ENTER);
        await driver.wait(until.elementsLocated(By.css('div.g')));
        await driver.findElement(By.css('div.g')).then((first) => {
            first.findElement(By.css('h3')).getText().then((title) => {
                console.log('title', title)
            })
        })
    }
    catch (ex) {
        console.error(ex)
    }
    finally {
        await driver.quit();
    }

}())