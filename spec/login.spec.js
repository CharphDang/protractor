'use strict';

const LoginPage = require('../po/login.po');
const loginPage = new LoginPage();
const EC = protractor.ExpectedConditions;

describe('login', () => {
  it('login to application', async () => {
    // 不用等待angular的启用（因为我们的项目不是angular，而是普通的项目）
    browser.waitForAngularEnabled(false);
    // 打开浏览器，并open配置的网址
    browser.get(browser.baseUrl);

    // 等待浏览器url包含login
    await browser.wait(
      EC.urlContains('login'),
      10000,
      'login page is not displayed'
    );

    const username = 'admin';
    const password = 'admin123';

    // clearAndFill为common.po中的公共封装方法，我们的实例所属的类都是从common类继承过来的
    await loginPage.clearAndFill(loginPage.usernameInput, username);
    await loginPage.clearAndFill(loginPage.passwordInput, password);

    await browser.sleep(1000);
    await loginPage.login();

    // 链式写法，element(by.css('.sapUiBody')).element(by.id('meAreaHeaderButton'))
    const userIcon = loginPage.sapUiBody.element(by.id('meAreaHeaderButton'));

    // 浏览器等待某个元素可见
    await browser.wait(
      EC.visibilityOf(userIcon),
      10000,
      'userIcon is not displayed'
    );

    userIcon.click();

    const signOutButton = loginPage.sapUiBody.element(
      by.css('[id$=logoutBtn]')
    );

    await browser.wait(
      EC.visibilityOf(signOutButton),
      10000,
      'userIcon is not displayed'
    );

    await signOutButton.click();

    // 获取当前active元素，然后回车
    // protractor.Key.ENTER enter键操作
    // protractor.Key.TAB tab键操作
    await browser.driver
      .switchTo()
      .activeElement()
      .sendKeys(protractor.Key.ENTER);

    await browser.sleep(5000);
  });
});
