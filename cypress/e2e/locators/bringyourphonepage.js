class bringyourphonepage{

    
    getTopNavShopDropdownButton(){
     return cy.get("li[name='nav_item1']")
    }
    
    
    getBringYourPhoneOption(){
     return cy.get("a[title='Bring Your Phone']")
    }

    getEnterPhoneNumberTextbox(pho){
    return cy.get("input[name='phoneNumber_formWidget']")
    }
    
    getSelectCarrierDropdown(){
    return cy.get("select[name='carrier_formWidget']")
     
    }

    getAccountNmber(){
      
    return cy.get("input[name='accountNumber_formWidget']")
    }

    getCheckEligibilityButton(){
    return cy.get("button[aria-label='Check Eligibility']")
    }

    getContinueButton(){
    return cy.get("button[name='buttonContinuePorting']")

    }
    getChooseYourPhoneBrand(){
    return cy.get("label[name='Name']")
    }

    getSelectModelDropdown(){
    return cy.get("select[name='selectPhoneModel']")
            }
    

    getContinueButton(){
    return cy.get("button[name='buttonShowOwnPhone']")
    }
    
    getShowMePersonalizedPlansButton(){
    return cy.get("button[name='buttonShowPersonalisedPlans']")
    }
    
    getSelectBasicButton(){
    return cy.get("button[name='buttonSelectRecommendedPlan']") 

    }
    getNextWizardContinueButton(){
    return cy.get("button[name='nextBtn_wizard1']")
    }

    getSimType(){
    return cy.get("div[name='stvSimTypesList1']>ul[role='list']>:nth-child(1)")
    }

    getCardHolderName(){
    return cy.get("input[name='cardholderName_formWidget']")
    }
    
    getCardNumber(){
    return cy.get("input[name='cardNumber_formWidget']")
    }

    getExpiryDate(){
    return cy.get("input[name='expiryDate_formWidget']").click({force: true})
    }
    
    getCVV(){
    return cy.get("input[name='cvv_formWidget']")
    
    }
    
    getContinueToPaymentButton(){
    return cy.get("button[name='doneBtn_wizard1']")
    }

    getPaymentConfirmationConfirmButton(){
    return cy.get("button[name='buttonConfirmPayment']")
    }

    getPaymentSuccessfullLabel(){
    return cy.get("label[name='label63']")
    }
    
    getGoToOrdersButton(){
    return cy.get("button[name='buttonViewOrders']")
    }
      
      
      
  





}

const bringyourphonelocators = new bringyourphonepage();
export default bringyourphonelocators


    
      
      
      
      
      
      
      
     
      


