
import shop from '../pages/shop'
import bringyourpagelocators from '../locators/bringyourphonepage'
import shoppagelocators from '../locators/shoppage'
import bringyourphonepage from '../pages/bringyourphone'
import registrationpage from '../pages/registration'
import dashboardpagelocators from '../locators/dashboardpage'
describe('Dashboard Page Tests',()=>{
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
      
})