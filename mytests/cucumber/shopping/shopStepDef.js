import HomePage from '../../../cypress/support/pageObjects/HomePage'
import ProductPage from '../../../cypress/support/pageObjects/ProductPage'
import { Given,When,Then} from "@badeball/cypress-cucumber-preprocessor";

const homePage=new HomePage()
const productPage=new ProductPage()
let productName='Blackberry'
let name

Given('I open the shopping page',()=>
{
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

When('I add items to Cart',()=>                    // remove ()=> operator and instead use function in order to use external data file before.js (in cucumner only)
{
    //homePage.getEditBox().type(this.data.name)
    //homePage.getGender().select(this.data.gender)
    //homePage.getTwoWayDataBinding().should('have.value', this.data.name)
    //homePage.getEditBox().should('have.attr', 'minlength', '2')
    //homePage.getEntrepreneaur().should('be.disabled')
    homePage.getShopTab().click()
    

     cy.selectProduct(productName)
      
})

//And Validate the total prices
When('Validate the total prices',()=>
{
    productPage.checkOutButton().click()
    var sum = 0

    cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {


      const amount = $el.text()
      var res = amount.split(" ")
      res = res[1].trim()
      sum = Number(sum) + Number(res)

    }).then(function () {
      cy.log(sum)
    })
    cy.get('h3 strong').then(function (element) {
      const amount = element.text()
      var res = amount.split(" ")
      var total = res[1].trim()
      expect(Number(total)).to.equal(sum)

    })
})

//Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou',()=>
{
    cy.contains('Checkout').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('#checkbox2').click({ force: true })
    cy.get('input[type="submit"]').click()
    //cy.get('.alert').should('have.text','Success! Thank you! Your order will be delivered in next few weeks :-).')
    cy.get('.alert').then(function (element) {
      const actualText = element.text()
      expect(actualText.includes("Success")).to.be.true
    })
})


When('I fill the form details',function(dataTable)
    {

        // [bobz , male   ]
        name = dataTable.rawTable[1][0]
        homePage.getEditBox().type(dataTable.rawTable[1][0])
        homePage.getGender().select(dataTable.rawTable[1][1])
    })
    // Then validate the forms behaviour
    Then('validate the forms behaviour',function()
    {
    homePage.getTwoWayDataBinding().should('have.value',name)
    homePage.getEditBox().should('have.attr','minlength','2')
    homePage.getEntrepreneaur().should('be.disabled')
    Cypress.config('defaultCommandTimeout', 8000)
    })
    // And select the Shop Page
    Then('select the Shop Page',()=>
    {
        homePage.getShopTab().click()
    })