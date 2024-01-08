
import shop from '../pages/shop'
import dashboardpagelocators from '../locators/dashboardpage'
import bringyourpagelocators from '../locators/bringyourphonepage'
import shoppagelocators from '../locators/shoppage'
import bringyourphonepage from '../pages/bringyourphone'
import registrationpage from '../pages/registration'
describe('Turbo Mobille End to End Tests',()=>{
  const shoppage=new shop()
  let userdata;

    beforeEach(() => {
        cy.visit('https://dev-turbomobiles.onwavemaker.com/#/Home')
        cy.fixture('login').then(function (testdata) {
        userdata = testdata;
        })
      })


        it('VerifyUserIsAbleToLogin',()=>{
             shoppage.clickOnSelectPhone();
             shoppage.clickOnContinueButton();
             shoppage.loginToAccount(userdata.username,userdata.password);
        })

        it('VerifyUserIsAbleToCreateNewAccount',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          registrationpage.createNewAccount(userdata.fullName,userdata.email,userdata.registration_Password)
       })

        it('VerifyAvaliableSmartPhonesOnLandingPage',()=>{
             dashboardpagelocators.getSelectPhoneButtons().its('length').then(len=>{
             expect(len).to.eq(4);
        })
        })

        it('VerifyTopNavMyAccountDropdownOptions',async () =>{
        dashboardpagelocators.getMyAccountDropdownButton().click()
        cy.wait(2000)
        dashboardpagelocators.getMyAccountDropdownOptions().each(($el, index) => {
        expect($el).to.contain(userdata.myAccountDropdownOptions[index])
         })
         })

         it('VerifyTopNavShopDropdownOptions',async () =>{
          
          dashboardpagelocators.getShopDropdownButton().click()
          cy.wait(2000)
          dashboardpagelocators.getShopDropdownOptions().each(($el, index) => {
          expect($el).to.contain(userdata.shopDropdownOptions[index])
      })
      })

         
       it('VerifyBringYorPhoneFunctionality',()=>{
          bringyourpagelocators.getTopNavShopDropdownButton().click()
          bringyourpagelocators.getBringYourPhoneOption().click()
          shoppage.loginToAccount(userdata.username,userdata.password);
          bringyourpagelocators.getTopNavShopDropdownButton().click()
          bringyourpagelocators.getBringYourPhoneOption().click()
          bringyourphonepage.portableEligibilityCheck(userdata.phoneNumber,userdata.selectCarrier,userdata.accountNumber,userdata.phoneBrand)
          bringyourphonepage.orderingmobilephone(userdata.cardHolderName,userdata.cardNumber,userdata.expiryDate,userdata.cvvNumber)
      })

      it('VerifyUserIsAbleToOrderTheMobile',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          bringyourphonepage.orderingmobilephone(userdata.cardHolderName,userdata.cardNumber,userdata.expiryDate,userdata.cvvNumber)
       })

       it('VerifyWhetherOrderisPlacedOrnot',()=>{
          cy.wait(2000)
          cy.get("a[class='dropdown-toggle app-anchor']").eq(1).click();
          cy.get("a[title='Orders']").click();
          cy.wait(5000)
          shoppage.loginToAccount(userdata.username,userdata.password);
          cy.wait(3000)
          cy.get("a[class='dropdown-toggle app-anchor']").eq(1).click();
          cy.get("a[title='Orders']").click();
          cy.wait(2000)
          const items = []
          cy.get("div[name='gridcolumn3']>label")
          .each(($li) => items.push($li.text()))
          .then(() => {
          cy.log(items.join(', '))

          })
         
          if(items.includes("a few seconds ago")){
               cy.log("order placed successfully")
          }
          else{
               cy.log("Ordeer not placed")
          }
     })

       it('VerifyUserIsAbleToOrderTheMobileWithDataAddOns',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          shoppage.orderingMobileHhoneWithDataAddOns(userdata.cardHolderName,userdata.cardNumber,userdata.expiryDate,userdata.cvvNumber)
       })

       it('VerifyUserIsAbleToRemoveTheAddedDataAddonOnAddOnsStep',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          shoppage.selectAndDeselectDataAddOns()
       })

       it('VerifyTheErrorMessageIfUserTryToGoToNextStepWithoutSelectingShowMePersonalizedPlans',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          bringyourpagelocators.getNextWizardContinueButton().click({force: true});
          shoppagelocators.getPleaseSelectPlanToaster().should('be.visible')
          })       
       })

