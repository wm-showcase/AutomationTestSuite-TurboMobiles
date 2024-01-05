
import shop from '../pages/shop'
import bringyourpagelocators from '../locators/bringyourphonepage'
import shoppagelocators from '../locators/shoppage'
import bringyourphonepage from '../pages/bringyourphone'
import registrationpage from '../pages/registration'
describe('Turbo Mobille End to End Tests',()=>{
  const shoppage=new shop()

    beforeEach(() => {
        cy.visit('https://dev-turbomobiles.onwavemaker.com/#/Home')
      })


        it.only('VerifyUserIsAbleToLogin',()=>{
             shoppage.clickOnSelectPhone();
             shoppage.clickOnContinueButton();
             shoppage.loginToAccount("zenmark@wm.com","Test@231");
        })

        it('VerifyUserIsAbleToCreateNewAccount',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          registrationpage.createNewAccount("Rana","test@gmail.com","Test@2314")
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
          shoppage.loginToAccount("zenmark@wm.com","Test@231");
          bringyourpagelocators.getTopNavShopDropdownButton().click()
          bringyourpagelocators.getBringYourPhoneOption().click()
          bringyourphonepage.portableEligibilityCheck("9848908899","Verizon","123456","Iphone 13")
          bringyourphonepage.orderingmobilephone("Rajesh","22334455","1224","190")
      })

      it('VerifyUserIsAbleToOrderTheMobile',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount("zenmark@wm.com","Test@231");
          shoppage.clickOnContinueButton();
          bringyourphonepage.orderingmobilephone("Rajesh","22334455","1224","190")
       })


       it('VerifyTheErrorMessageIfUserTryToGoToNextStepWithoutSelectingShowMePersonalizedPlans',()=>{
          shoppage.clickOnSelectPhone();
          shoppage.clickOnContinueButton();
          shoppage.loginToAccount("zenmark@wm.com","Test@231");
          shoppage.clickOnContinueButton();
          bringyourpagelocators.getNextWizardContinueButton().click({force: true});
          cy.get("div[id='toast-container']").should('be.visible')
          })

          it('VerifyWhetherOrderisPlacedOrnot',()=>{
               cy.wait(2000)
               cy.get("a[class='dropdown-toggle app-anchor']").eq(1).click();
               cy.get("a[title='Orders']").click();
               cy.wait(5000)
               shoppage.loginToAccount("zenmark@wm.com","Test@231");
               cy.wait(3000)
               cy.get("a[class='dropdown-toggle app-anchor']").eq(1).click();
               cy.get("a[title='Orders']").click();
               cy.wait(2000)
               let arr=[];
               let arr1=[];
                cy.get("div[name='gridcolumn3']>label").each((el)=>{
                  arr1=arr.push(el.text());
                  cy.log(arr1)
                  }).then(()=>{
                  expect(arr1).to.eq(7);
                  })
              })



    

    



    

 
      


        

          
        


})