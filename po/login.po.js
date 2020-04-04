'use strict';
const Common = require('./common.po');

class LoginPage extends Common {
  constructor() {
    super();
    this.usernameInput = element(by.name('username'));
    this.passwordInput = element(by.name('password'));
    this.submitButton = element(by.css('input[type=submit]'));
  }
  login() {
    this.submitButton.click();
  }
}

module.exports = LoginPage;
