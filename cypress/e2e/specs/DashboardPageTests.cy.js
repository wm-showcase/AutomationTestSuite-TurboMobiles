
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
        cy.wait(2000)
        registrationpage.createNewAccount(userdata.fullName,userdata.email,userdata.registration_Password)
      })

     
      it('VerifyAvaliableSmartPhonesOnLandingPage',()=>{
        dashboardpagelocators.getSelectPhoneButtons().its('length').then(len=>{
        expect(len).to.eq(4);
      })
      })

      it('VerifyDashboardLabels',async () =>{
        dashboardpagelocators.getTurboMobilesLogo().should('have.text',"")
        cy.wait(3000)
        dashboardpagelocators.getDashboardHeadingLabels().each(($el, index) => {
        expect($el).to.contain(userdata.dashboardTopNavOptions[index])
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

      it('VerifyBrokenImagesAcrossTheApplication',()=>{
            const brokenImages = []
            cy.get('img')
            .each(($el, k) => {
            if ($el.prop('naturalWidth') === 0) {
                  const id = $el.attr('id')
                  const alt = $el.attr('alt')
                  const info = `${id ? '#' + id : ''} ${alt ? alt : ''}`
                  brokenImages.push(info)
                  cy.log(`Broken image ${k + 1}: ${info}`)
                }
            }).then(() => {
            if (brokenImages.length) {
                  throw new Error(
                    `Found ${
                      brokenImages.length
                    } broken images\n${brokenImages.join(', ')}`,
                  )
                }
              })
            
          })

          it('VerifyBrokenLinksAcrossTheApp',()=>{
            cy.get('a').each((anchor)=>{
            cy.request({
             method:'GET',
             url: anchor.prop('href'),
             failOnStatusCode: false
            }).then((response)=>{
            if(response.status!=200){
                cy.log(anchor.prop('href') +'test')
                throw new Error('broken images found')
              }
            })

            })
          })
      
})