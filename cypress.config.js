const { defineConfig } = require("cypress");

module.exports = defineConfig({
  defaultCommandTimeout: 30000,
  pageLoadTimeout: 80000,
  screenshotOnRunFailure :false,
  reporter: 'cypress-mochawesome-reporter', //for html reports
  reporterOptions: {
    "reportDir": "cypress/reports",
      "quite": true,
      "overwrite": true,
      "html": true,
      reportPageTitle:"TurboMobilesReport",
      reportFilename:"TurboMobileE2EReport",
      "json": false  
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on); //for html reports
    },
  },
})

