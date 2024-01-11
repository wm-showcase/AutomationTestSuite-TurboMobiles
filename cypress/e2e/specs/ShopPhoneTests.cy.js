
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
          cy.get("div[id='toast-container']").should('be.visible')
          })

          
            
})