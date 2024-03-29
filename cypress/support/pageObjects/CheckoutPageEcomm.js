    let prod1 
    let prod2
    let total 
class CheckoutPageEcomm

{   

    getValidateProduct(){

        //cy.get('#item_4_title_link div.inventory_item_name').should('have.text','Sauce Labs Backpack')
        //return cy.get('#item_2_title_link div.inventory_item_name').should('have.text','Sauce Labs Onesie')
        return cy.get('div.inventory_item_name').eq(1).should('have.text','Sauce Labs Onesie')
    }

    getCheckout(){
        return cy.get('.btn_action').click()
    }


    getFillForm(){
        cy.get('[data-test="firstName"]').type('John')
        cy.get('[data-test="lastName"]').type('Wiliams')
        cy.get('[data-test="postalCode"]').type('908671')
        return cy.get('.btn_primary').click()
    }


    getvalidateTotal(){
        

        cy.get(':nth-child(3) > .cart_item_label > .inventory_item_price').then(function(element){
            const var1= element.text()
            var v1= var1.split("$")
            var v2=v1[1].trim()
             prod1= parseFloat(v2)
             console.log(prod1)
        })

        cy.get(':nth-child(4) > .cart_item_label > .inventory_item_price').then(function(element){
            const var1= element.text()
            var v1= var1.split("$")
            var v2=v1[1].trim()
             prod2= parseFloat(v2)
             console.log(prod2)
        })
        
        return cy.get('.summary_subtotal_label').then(function(element){
            const total1= element.text()
            var v1= total1.split("$")
            var v2= v1[1].trim()
             total=parseFloat(v2)
             console.log(total)
       
             expect(total).to.be.equal((prod1+prod2))
            })
    
     }


     getFinish(){
         cy.get('.btn_action').click()
        
         cy.get('.complete-header').then(function(element){
            const header= element.text()
            expect(header).to.be.equal('THANK YOU FOR YOUR ORDER')
        })

        return cy.get('.complete-text').then(function(element){
            const header= element.text().split("\n")
            const heading= header[0].trim()+" "+header[1].trim()
            expect(heading).to.be.equal('Your order has been dispatched, and will arrive just as fast as the pony can get there!')
        })

     }
    }

export default CheckoutPageEcomm