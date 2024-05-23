require ('cypress-xpath')

describe('Modul Daftar', ()=> {
    it('Daftar akun Eraspace - Positive Case', ()=> {

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 1 - Klik daftar pada halaman login Eraspace')

        cy.contains('Daftar')
        .click().click()
        cy.wait(3000)

        cy.log('Step 2 - Isi form yang tersedia pada pendaftaran dengan data yang valid')

        cy.get('#firstname')
        .type('Kiki')
        .should('have.value','Kiki')

        cy.get('#lastname')
        .type('Septian')
        .should('have.value','Septian')

        cy.get('#userIdentifier')
        .type('//isi email user')
        .should('have.value','//isi email user')

        cy.get('#password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.get('#confirm_password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 3 - Klik pada check box Syarat, Ketentuan dan Privasi')

        cy.get('#terms_condition')
        .click()

        cy.log('Step 4 - Klik button Daftar')

        cy.get(' #mcis-button-register')
        .click()

        cy.log('Isi kode OTP yang di terima via Email atau No. Handphone user')

        //Isi kode OTP yang di terima user

        cy.get('#field_0')
        .type('')
        cy.get('#field_1')
        .type('')
        cy.get('#field_2')
        .type('')
        cy.get('#field_3')
        .type('')
        cy.get('#field_4')
        .type('')
        cy.get('#field_5')
        .type('')
    })
})

describe('Modul Daftar', ()=> {
    it.only('Gagal Daftar akun Eraspace - negative Case', ()=> {

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 1 - Klik daftar pada halaman login Eraspace')

        cy.contains('Daftar')
        .click().click()
        cy.wait(3000)

        cy.log('Step 2 - Isi form yang tersedia pada pendaftaran dengan data yang valid')

        cy.get('#firstname')
        .type('Rizky')
        .should('have.value','Rizky')

        cy.get('#lastname')
        .type('Septian')
        .should('have.value','Septian')

        cy.get('#userIdentifier')
        .type('rizky8septian@gmail.com')
        .should('have.value','rizky8septian@gmail.com')

        cy.get('#password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.get('#confirm_password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 3 - Klik pada check box Syarat, Ketentuan dan Privasi')

        cy.get('#terms_condition')
        .click()

        cy.log('Step 4 - Klik button Daftar')

        cy.get(' #mcis-button-register')
        .click({force:true})

        cy.get('[data-testid="qa-alert-identifier"]')
        .should('have.text','Email sudah terdaftar')
    })
})