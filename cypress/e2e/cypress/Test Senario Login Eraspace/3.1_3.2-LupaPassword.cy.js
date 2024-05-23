require ('cypress-xpath')

describe('Modul Lupa Password', ()=> {
    it('Reset Password akun Eraspace - Positive Case', ()=> {

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 1 - Klik Lupa Password? pada halaman login Eraspace')

        cy.get('[data-testid="qa-button-forgotpassword"]')
        .click()
        cy.contains('Lupa Password?')
        .click()
        cy.wait(3000)

        cy.log('Step 2 - Isi No. handphone atau email yang terdaftar')

        cy.get('#userIdentifier')
        .type('//isi email user')
        .should('have.value','//isi email user')

        cy.log('Step 3 - Klik button Lanjut')

        cy.get('[data-testid="qa-button-lanjut"]')
        .click()

        cy.log('Step 4 - Isi kode OTP pada Pop up OTP')
        cy.wait(50000)

        cy.get('#field_0')
        .type('//ISI KODE OTP DISINI')
        cy.get('#field_1')
        .type('//ISI KODE OTP DISINI')
        cy.get('#field_2')
        .type('//ISI KODE OTP DISINI')
        cy.get('#field_3')
        .type('//ISI KODE OTP DISINI')
        cy.get('#field_4')
        .type('//ISI KODE OTP DISINI')
        cy.get('#field_5')
        .type('//ISI KODE OTP DISINI')

        cy.log('Step 5 - Isi password baru')

        cy.get('#password')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 6 - Isi Konfirmasi Password')

        cy.get('#confirmPassword')
        .type('//isi password user')
        .should('have.value','//isi password user')

        cy.log('Step 6 - Klik button Konfirmasi Password Baru')

        cy.get('[data-testid="qa-button-newpassword"]')
        .click()
    })
})

describe('Modul Lupa Password', ()=> {
    it.only('Memunculkan alert yang tampil jika Email sudah terdaftar - Negative Case', ()=> {

        cy.visit('https://eraspace.com/login')
        cy.url()
        .should('contain','eraspace')
        .should('eq','https://eraspace.com/login')
        .should('include','space.com')
        .should('not.contain','spase')

        cy.log('Step 1 - Klik Lupa Password? pada halaman login Eraspace')

        cy.get('[data-testid="qa-button-forgotpassword"]')
        .click()
        cy.contains('Lupa Password?')
        .click()
        cy.wait(3000)

        cy.log('Step 2 - Isi No. handphone atau email yang belum terdaftar')

        cy.get('#userIdentifier')
        .type('//isi email yang belum terdaftar')
        .should('have.value','//isi email yang belum terdaftar')

        cy.get('[data-testid="qa-alert-forgotpassword"]')
        .should('have.text','Email belum terdaftar')
    })
})