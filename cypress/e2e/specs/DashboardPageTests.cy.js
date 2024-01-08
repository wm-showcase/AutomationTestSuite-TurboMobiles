
import shop from '../pages/shop'
import bringyourpagelocators from '../locators/bringyourphonepage'
import shoppagelocators from '../locators/shoppage'
import bringyourphonepage from '../pages/bringyourphone'
import registrationpage from '../pages/registration'
import dashboardpagelocators from '../locators/dashboardpage'
describe('Dashboard page Tests',()=>{
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
      



})