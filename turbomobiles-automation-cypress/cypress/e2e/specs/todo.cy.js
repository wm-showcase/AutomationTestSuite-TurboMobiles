
import shop from '../pages/shop'
const shoppage=new shop()
describe('Turbo MobilleEnd to ENd Tests',()=>{

    beforeEach(() => {
        cy.visit('https://dev-turbomobiles.onwavemaker.com/#/Home')
      })


        it('VerifyUserIsAbleToLogin',()=>{
        shoppage.clickOnSelectPhone();
        shoppage.clickOnContinueButton();
        shoppage.loginToAccount("zenmark@wm.com","Test@231");
      
         })

        it('VerifyAvaliableSmartPhonesOnLandingPage',()=>{

        cy.get("button[name='buttonSelectPhone']").its('length').then(len=>{
         expect(len).to.eq(4);
        })
       
        })

        it('VerifyMyAccountDropdownOptions',()=>{
        cy.get("li[name='nav_item2']").click()
        cy.wait(2000)
        let arr=[];
        let arr1=[]
        cy.get("div[name='menuMyAccount']>ul>li>a>span").each((el)=>{
        arr1=arr.push(el.text());
        cy.log(arr1)
        }).then(()=>{
        expect(arr1).to.eq(7);
        //expect(arr).to.eq("Profile","Billing","Orders","Security","Privacy","Rewards","Preferences")
         })
         })


        


       it('VerifyUserIsAbleToCreateNewAccount',()=>{
       cy.get("button[name='buttonSelectPhone']").first().click()
       cy.wait(5000)
       cy.get("button[name='buttonContinue']").click()
       cy.wait(2000)
       cy.get("a[caption='Register']").click()
       cy.get("input[name='name_formWidget']").click().type("Williams")
       cy.wait(2000)
       cy.get("input[name='email_formWidget']").click().type("william.r@gmail.com")
       cy.get("input[name='password_formWidget']").click().type("Wavemaker@123")
       cy.get("button[aria-label='CREATE ACCOUNT']").click();
 
    })

    

    it.only('VerifyBringYorPhone',()=>{
      cy.get("li[name='nav_item1']").click()
      cy.get("a[title='Bring Your Phone']").click()
      shoppage.loginToAccount("zenmark@wm.com","Test@231");
      cy.get("li[name='nav_item1']").click()
      cy.get("a[title='Bring Your Phone']").click()
      cy.get("input[name='phoneNumber_formWidget']").click().type("9848908899");
      cy.get("select[name='carrier_formWidget']")
        .select("Verizon")
      cy.get("input[name='accountNumber_formWidget']").click().type("123456")
      cy.get("button[aria-label='Check Eligibility']").click();
      cy.get("button[name='buttonContinuePorting']").click({force: true})
      cy.get("label[name='Name']").eq(0).click({force: true})
      cy.get("select[name='selectPhoneModel']").select("Iphone 13",{force: true})
      cy.get("button[name='buttonShowOwnPhone']").click({force: true})
      cy.get("button[name='buttonShowPersonalisedPlans']").click({force: true});
      cy.wait(2000)
      cy.get("button[name='buttonSelectRecommendedPlan']").click({force: true})
      cy.get("button[name='nextBtn_wizard1']").click({force: true})
      cy.get("button[name='nextBtn_wizard1']").click({force: true})
      cy.get("div[name='stvSimTypesList1']>ul[role='list']>:nth-child(1)").click({force: true})
      cy.get("button[name='nextBtn_wizard1']").click({force: true})
      cy.get("button[name='nextBtn_wizard1']").click({force: true})
      cy.get("button[name='nextBtn_wizard1']").click({force: true})
      cy.get("input[name='cardholderName_formWidget']").click({force: true}).type("rajesh",{force: true})
      cy.get("input[name='cardNumber_formWidget']").click({force: true}).type("1234567890123456",{force: true})
      cy.get("input[name='expiryDate_formWidget']").click({force: true}).type("1224",{force: true})
      cy.get("input[name='cvv_formWidget']").click({force: true}).type("001",{force: true})
      cy.get("button[name='doneBtn_wizard1']").click({force: true})
      cy.get("button[name='buttonConfirmPayment']").click({force: true})
      cy.get("label[name='label63']").should('have.text','Payment Successful!')
      cy.get("button[name='buttonViewOrders']").click({force: true})
      

      


      




   })








    







})