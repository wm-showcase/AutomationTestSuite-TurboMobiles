import bringyourpagelocators from '../locators/bringyourphonepage'
class bringyourphone{



portableEligibilityCheck(phoneNum,selectValue,acctNum,mobile){
    bringyourpagelocators.getEnterPhoneNumberTextbox().click().type(phoneNum)
    bringyourpagelocators.getSelectCarrierDropdown() .select(selectValue)
    bringyourpagelocators.getAccountNmber().click().type(acctNum)
    bringyourpagelocators.getCheckEligibilityButton().click()
    cy.wait(3000)
    bringyourpagelocators.getContinueButton().click({ multiple: true, force: true })
    cy.wait(2000)
    bringyourpagelocators.getChooseYourPhoneBrand().eq(0).click({force: true})
    bringyourpagelocators.getSelectModelDropdown().select(mobile,{force: true})
    bringyourpagelocators.getContinueButton().click({ multiple: true, force: true })
    cy.wait(2000)
 

}

orderingmobilephone(cardHolderName,cardNumber,expiryDate){
    bringyourpagelocators.getShowMePersonalizedPlansButton().click({force: true});
    cy.wait(2000)
    bringyourpagelocators.getSelectBasicButton().click({force: true});
    cy.wait(4000)
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getSimType().click({force: true});
    bringyourpagelocators.getSimContinueButton().click({force: true})
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    cy.wait(2000)
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getCardHolderName().click({force: true}).type(cardHolderName,{force: true})
    bringyourpagelocators.getCardNumber().click({force: true}).type(cardNumber,{force: true})
    bringyourpagelocators.getExpiryDate().type(expiryDate,{force: true})
    bringyourpagelocators.getCVV().click({force: true}).type("5641",{force: true})
    bringyourpagelocators.getCVV().click({force: true})
    bringyourpagelocators.getContinueToPaymentButton().click({ multiple: true, force: true })
    cy.wait(3000)
    bringyourpagelocators.getPaymentConfirmationConfirmButton().click({ multiple: true, force: true })
    bringyourpagelocators.getPaymentSuccessfullLabel().should('have.text','Payment Successful!')
    cy.intercept({
        path: '/prefabs/OrdersList/FlankerDBAPI/flanker_db/Orders/filter'
        }).as('orders')
        bringyourpagelocators.getGoToOrdersButton().click()
        cy.wait('@orders').its('response.statusCode').should('eq', 200)
}





















}
const bringyourphonepage = new bringyourphone();
export default bringyourphonepage
