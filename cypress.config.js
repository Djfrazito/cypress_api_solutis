const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://covid19-brazil-api.now.sh/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
