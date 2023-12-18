import shoppagelocators from "../locators/shoppage"

class shop{

clickOnSelectPhone(){
    shoppagelocators.selectPhoneButton().click()
}

clickOnContinueButton(){
    shoppagelocators.getContinueButton().click()
}

loginToAccount(email,password){
   
    shoppagelocators.getEmailTextbox().click().clear().type(email)
    shoppagelocators.getPasswordTextbox().click().clear().type(password)
    shoppagelocators.getSignInButton().click()
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
