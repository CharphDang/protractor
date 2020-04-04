class Common {
  constructor() {
    this.sapUiBody = element(by.css('.sapUiBody'));
  }

  clearAndFill(selector, text) {
    selector.sendKeys(text);
    return selector;
  }
}

module.exports = Common;
