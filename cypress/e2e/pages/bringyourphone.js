import bringyourpagelocators from '../locators/bringyourphonepage'
class bringyourphone{



portableEligibilityCheck(phoneNum,selectValue,acctNum,mobile){
    bringyourpagelocators.getEnterPhoneNumberTextbox().click().type(phoneNum)
    bringyourpagelocators.getSelectCarrierDropdown() .select(selectValue)
    bringyourpagelocators.getAccountNmber().click().type(acctNum)
    bringyourpagelocators.getCheckEligibilityButton().click()
    bringyourpagelocators.getContinueButton().click({force: true})
    cy.wait(2000)
    bringyourpagelocators.getChooseYourPhoneBrand().eq(0).click({force: true})
    bringyourpagelocators.getSelectModelDropdown().select(mobile,{force: true})
    bringyourpagelocators.getContinueButton().click({force: true})
    cy.wait(2000)
 

}

orderingmobilephone(cardHolderName,cardNumber,expiryDate){
    bringyourpagelocators.getShowMePersonalizedPlansButton().click({force: true});
    bringyourpagelocators.getSelectBasicButton().click({force: true});
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getSimType().click({force: true});
    for(let i=0;i<=2;i++){
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    }
    bringyourpagelocators.getCardHolderName().click({force: true}).type(cardHolderName,{force: true})
    bringyourpagelocators.getCardNumber().click({force: true}).type(cardNumber,{force: true})
    bringyourpagelocators.getExpiryDate().type(expiryDate,{force: true})
    bringyourpagelocators.getCVV().click({force: true}).type("001",{force: true})
    bringyourpagelocators.getContinueToPaymentButton().click({force: true})
    bringyourpagelocators.getPaymentConfirmationConfirmButton().click({force: true})
    bringyourpagelocators.getPaymentSuccessfullLabel().should('have.text','Payment Successful!')
    bringyourpagelocators.getGoToOrdersButton().click({force: true})
}

}
const bringyourphonepage = new bringyourphone();
export default bringyourphonepage
