const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight: 938,
    viewportWidth: 1560,
    baseUrl: 'https://kitchen.applitools.com/',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
