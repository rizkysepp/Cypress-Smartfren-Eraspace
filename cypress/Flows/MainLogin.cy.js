require('cypress-xpath')
import * as cons from "../constant"

export function MainLogin(acc_type) {
    var Username
    var password = cons.ALL_PASSWORD

    // Pengkondisian nilai dari variabel "username" tergantung 
    // dari parameter "acc_type" yang dikirim
    if (acc_type === "normal"){
        Username = cons.NORMAL_USER
    }
    
    // Akses Main URL dan Login
    cy.visit(`${cons.MAIN_URL}`)
    
    cy.visit('https://www.saucedemo.com')

    cy.then(() => {
        cy.log('Input Username')
        cy.get('#user-name')
        .type('standard_user')
        .should('have.value', 'standard_user')

    })

    cy.then(() => {
        cy.log('Input Password')
        cy.get('#password')
        .type('secret_sauce')
        .should('have.value', 'secret_sauce')

    })

    cy.then(() => {
        cy.log('Klik button Login')
        cy.get('#login-button')
        .click({force:true})
        cy.wait(3000)
        cy.url()
        .should('include', '/inventory')
    })
}