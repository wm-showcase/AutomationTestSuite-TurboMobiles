import shoppagelocators from "../locators/shoppage";
import registrationpagelocators from "../locators/registrationpage";
class registration{

createNewAccount(name,email,password){
    registrationpagelocators.getRegistreationButton().click();
    registrationpagelocators.getFullNameTextBox().click().type(name)
    registrationpagelocators.getEmailTextBox().eq(1).click().type(email)
    registrationpagelocators.getPasswordTextbox().click().type(password)
    registrationpagelocators.getCreateAccountButton().click()
    shoppagelocators.getContinueButton().should('be.visible')
    
}


}
const registrationpage= new registration()
    export default registrationpage