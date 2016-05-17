exports.config = {
    // location of the Selenium JAR file and chromedriver, use these if you installed protractor locally
    // seleniumServerJar: '../node_modules/protractor/selenium/selenium-server-standalone-2.40.0.jar',
    // chromeDriver: '../node_modules/protractor/selenium/chromedriver',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    // location of your E2E test specs
    specs: [
    './tests/e2e/*.js'
    ],
    
    //suites: {
    //homepage: 'tests/e2e/homepage/**/*Spec.js',
    //search: ['tests/e2e/contact_search/**/*Spec.js',
    //  'tests/e2e/venue_search/**/*Spec.js']
    //},
    
    // configure multiple browsers to run tests
    multiCapabilities: [{
        'browserName': 'firefox'
  }, {
        'browserName': 'chrome'
  }],

    // or configure a single browser
    /*
    capabilities: {
      'browserName': 'chrome'
    }
    */

    // url where your app is running, relative URLs are prepending with this URL
    baseUrl: 'http://meshwork.tma.com.vn',

    // testing framework, jasmine is the default
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true, // Use colors in the command line report.
    }
};