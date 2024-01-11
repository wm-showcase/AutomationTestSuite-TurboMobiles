import shop from '../pages/shop'
import bringyourphonelocators from '../locators/bringyourphonepage'
import bringyourphonepage from '../pages/bringyourphone'
describe('BringYourPhone Tests',()=>{
  const shoppage=new shop()
  let userdata;

    beforeEach(() => {
        cy.visit('https://dev-turbomobiles.onwavemaker.com/#/Home')
        cy.fixture('login').then(function (testdata) {
        userdata = testdata;
        })
      })
         it('VerifyBringYorPhoneFunctionality',()=>{
          bringyourphonelocators.getTopNavShopDropdownButton().click()
          cy.wait(2000)
          bringyourphonelocators.getBringYourPhoneOption().click()
          shoppage.loginToAccount(userdata.username,userdata.password);
          bringyourphonelocators.getTopNavShopDropdownButton().click()
          bringyourphonelocators.getBringYourPhoneOption().click()
          bringyourphonepage.portableEligibilityCheck(userdata.phoneNumber,userdata.selectCarrier,userdata.accountNumber,userdata.phoneBrand)
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
         cy.log("Order Not Placed")
        }
   })
          
     })

      


        

          
        


