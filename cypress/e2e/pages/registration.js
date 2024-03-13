import shoppagelocators from "../locators/shoppage";
import registrationpagelocators from "../locators/registrationpage";
class registration{

createNewAccount(name,email,password){
    registrationpagelocators.getRegistreationButton().click();
    cy.wait(2000)
    registrationpagelocators.getFullNameTextBox().click().type(name)
    let randomNum=Math.floor(Math.random() * 11);
    registrationpagelocators.getRegistrationEmailTextBox().click().type(randomNum+email)
    registrationpagelocators.getPasswordTextbox().click({ multiple: true }).type(password)
    cy.intercept({
        path: 'j_spring_security_check'
        }).as('waiting')
        registrationpagelocators.getCreateAccountButton().click()
        cy.wait('@waiting').its('response.statusCode').should('eq', 200) 
    shoppagelocators.getContinueButton().should('be.visible')
    
}


}
const registrationpage= new registration()
    export default registrationpage