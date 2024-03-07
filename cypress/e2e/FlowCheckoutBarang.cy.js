require ('cypress-xpath')

it('Melakukan Checkout Suatu barang di Sauce Demo', ()=> {
    describe('Login', ()=> {
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

    cy.then(() => {
        cy.log('Klik Add to cart')
        cy.get('#add-to-cart-sauce-labs-bolt-t-shirt')
        .click({force:true})
        cy.get('#add-to-cart-sauce-labs-fleece-jacket')
        .click({force:true})
        cy.get('#add-to-cart-sauce-labs-onesie')
        .click({force:true})
        cy.xpath('/html/body/div/div/div/div[2]/div/div/div/div[6]/div[2]/div[2]/button')
        .click({force:true})

    })

    cy.then(() => {
        cy.log('Klik Keranjang Belanja')
        cy.get('#shopping_cart_container > a')
        .click({force:true})})
        cy.url()
        .should('include', '/cart')

    cy.then(() => {
        cy.log('Klik button Checkout')
        cy.get('#checkout')
        .click({force:true})
        cy.url()
        .should('include','/checkout-step-one')

    })

    cy.then(() => {
        cy.log('Isi form data Checkout')
        cy.get('#first-name')
        .type('David')
        .should('have.value', 'David')
        cy.get('#last-name')
        .type('Washington')
        .should('have.value', 'Washington')
        cy.get('#postal-code')
        .type('130998')
        .should('have.value','130998')

    })

    cy.then(() => {
        cy.log('Klik button Continue')
        cy.get('#continue')
        .click({force:true})
        cy.url()
        .should('include','/checkout-step-two')
        cy.scrollTo(0, 1000)

    })

    cy.then(() => {
        cy.log('Klik button Finish')
        cy.get('#finish')
        .click({force:true})

    })
    })

})