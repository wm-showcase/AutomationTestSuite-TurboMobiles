
import shop from '../pages/shop'
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
             cy.get("button[name='buttonSelectPhone']").its('length').then(len=>{
             expect(len).to.eq(4);
        })
        })

        it('VerifyTopNavMyAccountDropdownOptions',async () =>{
             cy.get("li[name='nav_item2']").click()
             cy.wait(5000)
             let a= ["Profile","Billing","Orders","Security","Privacy","Rewards","Preferences"]
             cy.get("ul>li[class='app-nav-item'] li span").each(($el, index) => {
             expect($el).to.contain(a[index])
         })
         })

         it('VerifyTopNavShopDropdownOptions',async () =>{
          cy.get("li[name='nav_item1']").click()
          cy.wait(5000)
          let a= ["Shop Phone","Bring Your Phone","Shop Broadband"]
          cy.get("ul>li[class='app-nav-item'] li span").each(($el, index) => {
          expect($el).to.contain(a[index])
      })
      })

         
       it('VerifyBringYorPhoneFunctionality',()=>{
          bringyourpagelocators.getTopNavShopDropdownButton().click()
          bringyourpagelocators.getBringYourPhoneOption().click()
          shoppage.loginToAccount(userdata.username,userdata.password);
          bringyourpagelocators.getTopNavShopDropdownButton().click()
          bringyourpagelocators.getBringYourPhoneOption().click()
          bringyourphonepage.portableEligibilityCheck("9848908899","Verizon","123456","Iphone 13")
          bringyourphonepage.orderingmobilephone("Rajesh","22334455","1224","190")
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

          it.only('VerifyWhetherOrderisPlacedOrnot',()=>{
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
            
              })



    

    



    

 
      


        

          
        


})