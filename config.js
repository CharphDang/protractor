// An example configuration file.
exports.config = {
  directConnect: true,
  // restartBrowserBetweenTests: false,
  // Capabilities to be passed to the webdriver instance [1]
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: [
        // '--headless',
        '--no-sandbox',
        '--disable-gpu',
        '--ignore-certificate-errors',
        '--start-maximized',
        '--disable-web-security',
        '--enable-logging',
        '--disable-infobars',
        '--incognito',
        '--disable-extensions',
        '--hide-scrollbars',
        '--lang=en-US'
      ],
      prefs: {
        // disable chrome's annoying password manager
        'profile.password_manager_enabled': false,
        credentials_enable_service: false,
        password_manager_enabled: false
      }
    }
  },
  params: {
    auth: {
      // settings for the authorizations and the test type E2E/UI-Component Test [2]
      formType: 'plain'
      // username: 'username',
      // password: 'password'
    },
    // settings for the coverage [3]
    coverage: false,
    maximizeWindow: true
  },

  SELENIUM_PROMISE_MANAGER: false,

  // url for script execution [4]
  /* eslint-disable sap-no-hardcoded-url */
  baseUrl:
    'https://security-self-billing-approuter.cfapps.sap.hana.ondemand.com/cp.portal/site#Shell-home',

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine2',

  // Spec patterns are relative to the current working directory when [5]
  // protractor is called.
  specs: ['./spec/login.spec.js'],

  allScriptsTimeout: 60000, // Waiting for Angular/
  getPageTimeout: 60000, // Waiting for Page to Load
  idleTimeout: 90000, // Waiting for a test to send a new command

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    isVerbose: true,
    showColors: true,
    includeStackTrace: true,
    defaultTimeoutInterval: 1200000 // Spec Timeout
  }
  //   onPrepare: function() {
  //     return browser.get(browser.baseUrl);
  //   }
};
