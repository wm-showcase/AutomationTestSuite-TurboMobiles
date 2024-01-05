// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on('uncaught:exception', (err, runnable) => {
  // returning false here prevents Cypress from
  // failing the test
  return false
})

Cypress.Commands.add('login', (user,password) => {

    cy.get("button[name='buttonSelectPhone']").first().click()
    cy.wait(5000)
    cy.get("button[name='buttonContinue']").click()
    cy.wait(2000)
    cy.get("input[name='email_formWidget']").click().clear().type(user.user)
  //  expect(user, 'email was set').to.be.a('string').and.not.be.empty
    cy.get("input[name='password_formWidget']").click().clear().type(password)
    // if (typeof password !== 'string' || !password) {
    //     throw new Error('Missing password value, set using CYPRESS_password=...')
    //   }
    cy.get("button[aria-label='Sign In']").click()
    cy.wait(4000)
   
   })

