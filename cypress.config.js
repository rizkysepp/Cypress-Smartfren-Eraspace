const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl : 'https://www.google.com',
    specPattern : "cypress/e2e",
    supportFile : false,
    chromeWebSecurity: false,
    video: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
