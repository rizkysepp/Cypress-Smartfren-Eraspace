require ('cypress-xpath')

describe('Modul Login', ()=> {
    it('Masuk website Eraspace - Positive Case', ()=> {

        cy.log('Step 1 - Akses url Eraspace')

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 2 - Isi Email atau No. handphone yang terdaftar')

        cy.get('#identifier')
        .type('//isi email user')
        .should('have.value','//isi email user')

        cy.log('Step 3 - Isi Password')

        cy.get('#password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 4 - Klik button Masuk')

        cy.get('#mcis-button-login')
        .click()
        cy.wait(5000)
    })
})


describe('Modul Login', ()=> {
    it('Gagal Login karena password salah - Negative Case', ()=> {

        cy.log('Step 1 - Akses url Eraspace')

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 2 - Isi Email atau No. handphone yang terdaftar')

        cy.get('#identifier')
        .type('//isi email user')
        .should('have.value','//isi email user')

        cy.log('Step 3 - Isi Password')

        cy.get('#password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 4 - Klik button Masuk')

        cy.get('#mcis-button-login')
        .click()

        cy.contains('No. handphone/email atau password salah, yuk di cek kembali!')
        .should('have.text','No. handphone/email atau password salah, yuk di cek kembali!')
        cy.wait(5000)
    })
})
