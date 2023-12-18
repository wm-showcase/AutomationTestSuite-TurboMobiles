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
        return cy.xpath("//div[@name='listPhoneStorage']//li//label")
    }
    
    
    getColorRadioButton(){
        return cy.get('button[div[name="container3"]') 
    }
    
    getDontAddInsuranceButton(){
        return cy.get
        
    }
    getContinueButton(){
        return cy.get('button[name="buttonContinue"]')
    }
    
    getSmartPhones(){
        return cy.get('.app-card div button[name="buttonSelectPhone"]')
    
    }
    }
    const shoppagelocators= new shoppage
    export default shoppagelocators