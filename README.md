# protractor
> e2e protractor + selenium

> 参考文档链接：[protractor官网](http://www.protractortest.org/#/tutorial)

> 例子中的代码，包含了 `waitForAngularEnabled()`　`browser.wait()`　`browser.sleep()` `EC.visibilityOf()` `browser.driver.switchTo().activeElement()` `protractor.Key.ENTER` 等代表性的API

> 如果你`webdriver-manager update`升级失败，一般是由于资源被墙的原因，只需要你在终端中配置代理，可以翻墙之后，再进行update即可

> 我使用的事lantern， 在iterm2中配置代理，目前lantern的代理端口为53360，so
 `export http_proxy=http://127.0.0.1:53360` 之后，再进行`webdriver-manager update`