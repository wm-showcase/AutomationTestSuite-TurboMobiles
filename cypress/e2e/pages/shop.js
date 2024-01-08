import shoppagelocators from "../locators/shoppage"
import bringyourpagelocators from '../locators/bringyourphonepage'


class shop{

clickOnSelectPhone(){
    shoppagelocators.getSelectPhoneButton().eq(0).click({ multiple: true })
    cy.wait(5000)
}

clickOnContinueButton(){
    shoppagelocators.getContinueButton().click()
    cy.wait(2000)
  
}

loginToAccount(email,password){
   
    shoppagelocators.getEmailTextbox().click().clear().type(email)
    shoppagelocators.getPasswordTextbox().click().clear().type(password)
    shoppagelocators.getSignInButton().click()
    cy.wait(3000)
}
orderingMobileHhoneWithDataAddOns(cardHolderName,cardNumber,expiryDate){
    bringyourpagelocators.getShowMePersonalizedPlansButton().click({force: true});
    cy.wait(2000)
    bringyourpagelocators.getSelectBasicButton().click({force: true});
    cy.wait(4000)
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    cy.get("li[class='app-list-item-group clearfix']>ul>ul>li button[name='buttonSelectAddonCard']").eq(0).click()
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    bringyourpagelocators.getSimType().click({force: true});
    for(let i=0;i<=2;i++){
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    }
    cy.get("div[name='gridcolumn5'] label[name='label12']").should('have.text','Add Ons')
    bringyourpagelocators.getCardHolderName().click({force: true}).type(cardHolderName,{force: true})
    bringyourpagelocators.getCardNumber().click({force: true}).type(cardNumber,{force: true})
    bringyourpagelocators.getExpiryDate().type(expiryDate,{force: true})
    bringyourpagelocators.getCVV().click({force: true}).type("001",{force: true})
    bringyourpagelocators.getContinueToPaymentButton().click({force: true})
    bringyourpagelocators.getPaymentConfirmationConfirmButton().click({force: true})
    bringyourpagelocators.getPaymentSuccessfullLabel().should('have.text','Payment Successful!')
    bringyourpagelocators.getGoToOrdersButton().click({force: true})
}

selectAndDeselectDataAddOns(){
    bringyourpagelocators.getShowMePersonalizedPlansButton().click({force: true});
    cy.wait(2000)
    bringyourpagelocators.getSelectBasicButton().click({force: true});
    cy.wait(4000)
    bringyourpagelocators.getNextWizardContinueButton().click({force: true});
    cy.get("li[class='app-list-item-group clearfix']>ul>ul>li button[name='buttonSelectAddonCard']").eq(0).click()
    cy.get("button[name='buttonRemoveAddoncard']").eq(0).click()
    cy.get("li[class='app-list-item-group clearfix']>ul>ul>li button[name='buttonSelectAddonCard']").eq(0).should('have.text','Select')
    
}







overViewTab(){
    shoppagelocators.selectPhoneButton().click()
    cy.wait(6000)
    shoppagelocators.companyAndModelLabel().invoke('text').then((companyandmodel)=>{
        cy.log(companyandmodel)
        expect(companyandmodel).to.eq('Apple iPhone 14');  
    })
    

    shoppagelocators.priceLabel().invoke('text').then((pricelabel)=>{
        cy.log(pricelabel)
        expect(pricelabel).to.eq('$1,099.00');  
    })


}

}
export default shop
