const { defineConfig } = require("cypress");

module.exports = defineConfig({
  video: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      screenshotOnRunFailure=true
      baseUrl:'https://google.com'
      // require('cypress-mochawesome-reporter/plugin')(on)
      pageLoadTimeout : 900000 
    //  defaultCommandTimeout : 5000
    },
  },
  // reporter:'cypress-mochawesome-reporter',
  reporter:'mochawesome',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
    json:true
  },
});