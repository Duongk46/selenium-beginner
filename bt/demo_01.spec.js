
const { By, Button, Browser, until, Builder, Key } = require('selenium-webdriver');
const { suite, ignore } = require('selenium-webdriver/testing');
const assert = require('assert');
// (async function example() {
//     let driver = await new Builder().forBrowser('chrome').build();
//     try {
//         await driver.get('https://github.com/login');
//         await driver.findElement(By.id('login_field')).sendKeys("minhduong18072002@gmail.com");
//         await driver.findElement(By.id('password')).sendKeys("minhduong180702d@D", Key.RETURN);
//         await driver.wait(until.titleIs('GitHub'), 10000);
//         assert.deepStrictEqual(await driver.getTitle(), `GitHub`)

//     } finally {
//         // Đóng trình duyệt
//         await driver.quit();
//     }
// })();
suite(function (env) {
    describe("Test login in page github", function () {
        let driver;
        before(async () => {
            driver = await new Builder().forBrowser(Browser.CHROME).build();
        });

        after(async () => await driver.quit());

        it("Test case 1", async function () {
            await driver.get('https://github.com/login');
            await driver.findElement(By.id('login_field')).sendKeys("minhduong18072002@gmail.com");
            await driver.findElement(By.id('password')).sendKeys("minhduong180702d@D",);
            await driver.wait(until.titleIs('GitHub'), 10000);
            let pageTitle = await driver.getTitle();
            if (pageTitle === 'Trang chủ - Example') {
                console.log('Đăng nhập thành công!');
            } else {
                console.log('Đăng nhập thất bại!');
            }
            // assert.deepStrictEqual(await driver.getTitle(), `GitHub`)
            // await submitButton.click();
        })
    })
}, { browsers: [Browser.CHROME] })