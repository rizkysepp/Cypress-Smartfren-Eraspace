require ('cypress-xpath')


beforeEach(() => {
    // Disable CAPTCHA for the duration of the test
    cy.intercept('POST', 'www.ebay.com/captcha/init', (req) => {
      req.reply({ captchaPassed: true });
    });
  });
  Cypress.Commands.add("clickRecaptcha", () => {
    cy.window().then(win => {
      win.document
        .querySelector("iframe[src*='recaptcha']")
        .contentDocument.getElementById("recaptcha-token")
        .click();
    });
  });
it('Melakukan login di website Ebay', ()=> {
    describe('Login dengan metode Best Case', ()=> {

        cy.log('Step 1 - Visit Website');

        cy.visit('www.ebay.com');

        cy.log('Step 2 - Klik Sign in pada bagian kiri atas');

        cy.get('#gh-ug > a')
        .click()
        cy.wait(3000)

        cy.log('Step 3 - Input Email or Username')

        cy.get('#userid')
        .type('Rizky8septian@gmail.com')
        .should('have.value','Rizky8septian@gmail.com')

        cy.log('Step 4 - Klik button Continue')

        cy.get('#signin-continue-btn')
        .click()

        cy.log('Step 5 - Input Password')

        cy.get('#pass')
        .type('Asep313220')
        .should('have.value','Asep313220')

        cy.log('Step 6 - Klik button Sign in')

        cy.get('#sgnBt')
        .click()



    })
})
    



