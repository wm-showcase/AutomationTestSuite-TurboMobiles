
import shop from '../pages/shop'
import bringyourpagelocators from '../locators/bringyourphonepage'
import bringyourphonepage from '../pages/bringyourphone'
import dashboardpagelocators from '../locators/dashboardpage'

describe('ShopPhone Tests',()=>{
  const shoppage=new shop()
  let userdata;

    beforeEach(() => {

        cy.visit('https://dev-turbomobiles.onwavemaker.com/#/Home')
        cy.fixture('login').then(function (testdata) {
        userdata = testdata;
        })
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

      it('VerifyUserIsAbleToOrderTheMobile',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          bringyourphonepage.orderingmobilephone("Rajesh","22334455","1224","190")
       })


       it('VerifyTheErrorMessageIfUserTryToGoToNextStepWithoutSelectingShowMePersonalizedPlans',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount(userdata.username,userdata.password);
          shoppage.clickOnContinueButton();
          bringyourpagelocators.getNextWizardContinueButton().click({force: true});
          cy.get("div[id='toast-container']").should('be.visible')
          })

          
            
})