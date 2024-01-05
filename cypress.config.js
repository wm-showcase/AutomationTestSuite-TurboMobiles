


const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'aat5g2',
  // These settings apply everywhere unless overridden
  chromeWebSecurity: false,
  defaultCommandTimeout: 15000,
  pageLoadTimeout: 60000,
  viewportWidth: 1000,
  viewportHeight: 600,
  

  // Viewport settings overridden for component tests
  // component: {
  //   viewportWidth: 500,
  //   viewportHeight: 500,
  // },
  // Command timeout overridden for E2E tests
  e2e: {
    defaultCommandTimeout: 10000
  },
  
})
  
  
  
  


// const { defineConfig } = require("cypress");

// module.exports = defineConfig({
//   e2e: {
//     setupNodeEvents(on, config) {
//       // implement node event listeners here
      
//     },
//   },
// });

// module.exports = defineConfig({
//   e2e: {
//     baseUrl: 'https://dev-turbomobiles.onwavemaker.com/#/Home',
//   },
// })