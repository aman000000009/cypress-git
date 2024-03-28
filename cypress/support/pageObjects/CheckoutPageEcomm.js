class CheckoutPageEcomm

{

    getValidateProduct(){

        cy.get('#item_4_title_link div.inventory_item_name').should('have.text','Sauce Labs Backpack')
        return cy.get('#item_2_title_link div.inventory_item_name').should('have.text','Sauce Labs Onesie')

    }

}

export default CheckoutPageEcomm