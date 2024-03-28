class LoginPageEcomm
{
    getOnPage(){
        cy.visit('https://www.saucedemo.com/v1/index.html')
    }
    
    
    getUsername(){
        return cy.get('#user-name').type('standard_user')
    }

    getPassword(){
        return cy.get('#password').type('secret_sauce')

    }

    getLogin(){
        return cy.get('#login-button').click()
    }
}

export default LoginPageEcomm;