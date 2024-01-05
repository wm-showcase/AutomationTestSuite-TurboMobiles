const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    defaultCommandTimeout: 10000,
   pageLoadTimeout: 40000,
  reporter:'mochawesome',
  reporterOptions:{
    reportFilename: 'TurboMobilesReport',
    quiet: true,
    "overwrite": true,
    "html": true,
    "json": true}
    
  },
});



