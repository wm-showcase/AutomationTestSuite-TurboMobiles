const { defineConfig } = require("cypress");

module.exports = defineConfig({
reporter: 'cypress-mochawesome-reporter', //for html reports
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
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



