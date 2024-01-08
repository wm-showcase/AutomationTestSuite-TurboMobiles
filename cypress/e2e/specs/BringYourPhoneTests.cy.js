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
          bringyourphonelocators.getBringYourPhoneOption().click()
          shoppage.loginToAccount(userdata.username,userdata.password);
          bringyourphonelocators.getTopNavShopDropdownButton().click()
          bringyourphonelocators.getBringYourPhoneOption().click()
          bringyourphonepage.portableEligibilityCheck(userdata.phoneNumber,userdata.selectCarrier,userdata.accountNumber,userdata.phoneBrand)
          bringyourphonepage.orderingmobilephone(userdata.cardHolderName,userdata.cardNumber,userdata.expiryDate,userdata.cvvNumber)
      })

          
     })

      


        

          
        


