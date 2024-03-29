import LoginPageEcomm from '../../../cypress/support/pageObjects/LoginPageEcomm'
import HomePageEcomm from '../../../cypress/support/pageObjects/HomePageEcomm'
import CheckoutPageEcomm from '../../../cypress/support/pageObjects/CheckoutPageEcomm'
import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

const loginpage= new LoginPageEcomm()
const homePageecomm= new HomePageEcomm()
const checkoutpageecomm = new CheckoutPageEcomm()

Given('I navigate to the ecomm website',()=>{

    loginpage.getOnPage()
    loginpage.getUsername()
    loginpage.getPassword()
    loginpage.getLogin()

})

When('I added products to the cart',()=>{
    homePageecomm.getFirstProduct()
    homePageecomm.getSecondProduct()
})

Then('I proceed to checkout',()=>{
    checkoutpageecomm.getValidateProduct()
    checkoutpageecomm.getCheckout()
    checkoutpageecomm.getFillForm()
    checkoutpageecomm.getvalidateTotal()
    
})

Then('I see Finish Screen',()=>{
    checkoutpageecomm.getFinish()
    
})