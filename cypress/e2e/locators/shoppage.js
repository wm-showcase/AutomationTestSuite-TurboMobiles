//This file contains css locators to locate the elements
class shoppage{

    getSelectPhoneButton(){
        return  cy.get("button[name='buttonSelectPhone']")
    }
    
    getCompanyAndModelLabel(){
        return cy.get("label[name='labelCompanyAndModal']")
    }
    
    getEmailTextbox(){
        return cy.get("input[name='email_formWidget']")
    }

    getPasswordTextbox(){
        return   cy.get("input[name='password_formWidget']")
    }
    getSignInButton(){ 
        return cy.get("button[aria-label='Sign In']")
    }
    getpPriceLabel(){
        return cy.get("label[name='labelPriceVal']")
    }
    
    getCapacity(){
        return cy.get("div[@name='listPhoneStorage']>label")
    }
    
    
    getColorRadioButton(){
        return cy.get('button[div[name="container3"]') 
    }
    
   
    getContinueButton(){
        return cy.get('button[name="buttonContinue"]')
    }
    
    getSmartPhones(){
        return cy.get('.app-card div button[name="buttonSelectPhone"]')
    
    }
    getMonthlyBoostGB(){
        return cy.get("button[name='buttonSelectAddonCard']")
    }
    }
    const shoppagelocators= new shoppage
    export default shoppagelocators