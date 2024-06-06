require ('cypress-xpath')

describe('Login Traveloka', ()=> {
    it('Traveloka', ()=> {

        cy.log('Visit websiteTraveloka')

        cy.visit('https://www.traveloka.com/en-id')
        cy.url()
        .should('include','/en-id')
        .should('contain','traveloka')
        cy.wait(5000)

        cy.log('Step 1 - Select Cars Product')

        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-1777fci"])[7]')
        .click({force:true})
        
        cy.log('Step 2 - Select Tab Without Driver')

        cy.xpath('//h4[text()="Without Driver"]')
        .click({force:true})
        .should('have.text','Without Driver')

        cy.log('Step 3 - SelectPick-upLocation(e.g.:Jakarta)')

        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15"])[1]')
        .click({force:true})
        cy.xpath('//h3[text()="Soekarno Hatta International Airport (CGK)"]')
       // cy.xpath('//div[@aria-label="Soekarno Hatta International Airport (CGK)" and @class="css-1dbjc4n r-14lw9ot r-1q52ik8 r-qklmqi r-1loqt21 r-18u37iz r-1wtj0ep r-ymttw5 r-5njf8e r-1otgn73 r-1i6wzkk r-lrvibr r-13qz1uu"]')
        .click({force:true})

        cy.log('Step 4 -  Select Pick-up Date & Time (e.g.:today+2d09:00)')

        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15"])[2]')
        .click({force:true})
        cy.xpath('(//div[@class="css-1dbjc4n"]//div[@class="css-1dbjc4n r-1awozwy r-kdyh1x r-1loqt21 r-1777fci r-1otgn73 r-1i6wzkk r-lrvibr"])[14]')
        .click({force:true})
        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15"])[3]')
        .click({force:true})
        cy.xpath('//div[@class="css-1dbjc4n r-1loqt21 r-1777fci r-tuq35u r-1otgn73 r-1i6wzkk r-lrvibr"]//div[@class="css-901oao r-cwxd7f r-t1w4ow r-1b43r93 r-majxgm r-rjixqe r-q4m81j" and text()="12"]')
        .click({force:true})
        .should('have.text','12')
        cy.xpath('//div[@aria-live="polite" and @class="css-18t94o4 css-1dbjc4n r-173mn98 r-kdyh1x r-1loqt21 r-1fz3rvf r-10paoce r-5njf8e r-1otgn73 r-lrvibr"]//div//div[text()="Done"]')
        .click({force:true})

        cy.log('Step 5 - Select Drop-off Date & Time (e.g.:today+5d11:00)')

        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15"])[4]')
        .click({force:true})
        cy.xpath('//div[text()="Rental End Date"]')
        .should('have.text','Rental End Date')
        cy.xpath('(//div[@dir="auto"][normalize-space()="22"])[8]')
        .click({force:true})
        cy.xpath('//div[text()="End Time"]')
        .should('have.text','End Time')
        cy.xpath('(//div[@class="css-1dbjc4n r-1awozwy r-18u37iz r-1777fci r-edyy15"])[5]')
        .click({force:true})
        cy.xpath('//div[@class="css-1dbjc4n r-1loqt21 r-1777fci r-tuq35u r-1otgn73 r-1i6wzkk r-lrvibr"]//div[text()="22"]')
        .click({force:true})
        .should('have.text','22')
        cy.xpath('//div[@dir="auto" and text()="Done"]')
        .click({force:true})

        cy.log('Step 6 - Click button Search Car')

        cy.xpath('//*[@data-testid="rental-search-form-cta"]')
        .click({force:true})
        .should('be.visible')
        cy.wait(5000)
        cy.url()
        .should('include','/car-rental')

        cy.log('Step 7 - Select Car')

        cy.xpath('(//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"])[1]')
        .should('have.text','Continue')
        .click({force:true})

        cy.log('Step 8 - Select Car Provider')

        cy.xpath('(//h3[@class="css-4rbku5 css-901oao css-bfa6kz r-t1w4ow r-ubezar r-b88u0q r-rjixqe r-fdjqy7" and text()="Jayamahe Easy Ride Jakarta"])[1]')
        .should('have.text','Jayamahe Easy Ride Jakarta')

        cy.log('Step 9 - Click button Continue in Product Detail')

        cy.xpath('(//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"])[1]')
        .click({force:true})
        cy.wait(5000)

        cy.log('Step 10 - Select Pick-up Locationin “RentalOffice”')

        cy.xpath('(//div[@class="css-1dbjc4n r-1naam9t r-1fuqb1j r-d045u9 r-1472mwg r-orgf3d r-u8s1d r-lrsllp"])[1]')
        .click({force:true})
        cy.xpath('//div[@class="css-901oao css-bfa6kz r-13awgt0 r-t1w4ow r-ubezar r-majxgm r-135wba7 r-1m04atk r-fdjqy7" and text()="Rental Office"]')
        .click({force:true})
        cy.wait(3000)
        cy.xpath('(//div[@class="css-1dbjc4n r-1naam9t r-1fuqb1j r-d045u9 r-1472mwg r-orgf3d r-u8s1d r-lrsllp" ])[2]')
        .click({force:true})

        cy.log('Step 10 - Select Drop-off Location in “Other Location"')

        cy.xpath('(//div[@class="css-1dbjc4n r-1naam9t r-1fuqb1j r-d045u9 r-1472mwg r-orgf3d r-u8s1d r-lrsllp" ])[5]')
        .click({force:true})

        cy.log('Step 11 - Input Pick-up / Drop-off notes is optional')

        cy.xpath('//textarea[@placeholder="Additional notes (optional)"]')
        .type('Sesuai lokasi')
        .should('have.value','Sesuai lokasi')

        cy.log('Step 12 - Klik Book Now')

        cy.xpath('(//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"])[1]')
        .click({force:true})

        cy.log('Step 13 - Fill Contact Details')

        cy.url()
        .should('include','/booking')
        cy.xpath('(//input[@aria-labelledby="name.full" and @aria-describedby="(without title and punctuation)"])[1]')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')
        cy.xpath('(//input[@aria-label="Phone Number"])[1]')
        .type('0878806283322')
        .should('have.value','0878806283322')
        cy.xpath('//input[@aria-labelledby="emailAddress"]')
        .type('rizky008septian@gmail.com')
        .should('have.value','rizky008septian@gmail.com')

        cy.log('Step 14 - Fill Driver Details')

        cy.xpath('(//select[@class="r-30o5oe r-1niwhzg r-1yadl64 r-1p0dtai r-t1w4ow r-ubezar r-majxgm r-1pi2tsx r-1r74h94 r-135wba7 r-crgep1 r-orgf3d r-1ny4l3l r-10paoce r-u8s1d r-3mc0re r-ipm5af r-34rx7k r-417010"])[1]')
        .select('MR')
        cy.xpath('(//input[@aria-labelledby="name.full"])[2]')
        .type('Rizky Septian')
        .should('have.value','Rizky Septian')
        cy.xpath('(//input[@aria-label="Phone Number"])[2]')
        .type('0878806283322')
        .should('have.value','0878806283322')

        cy.log('Step 15 - Click Continue')

        cy.xpath('//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"]')
        .should('have.text','Continue')
        .click({force:true})

        cy.log('Step 16 - Adda special request is optional')

        cy.xpath('//textarea[@placeholder="Odd or even license plates, car charger, baby car seat, etc."]')
        .type('Sesuai Pesanan')
        .should('have.value','Sesuai Pesanan')

        cy.log('Step 17 - Checkallrentalrequirements')

        cy.xpath('(//div[@class="css-901oao r-t1w4ow r-ubezar r-majxgm r-135wba7 r-fdjqy7"])[8]')
        .click({force:true})
        cy.xpath('(//div[@aria-checked="false"])[2]')
        .click({force:true})
        cy.xpath('//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Save"]')
        .click({force:true})

        cy.log('Step 18 - Click Continue')

        cy.xpath('//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-1uirtdp r-b88u0q r-uzxld0 r-q4m81j" and text()="Continue to Payment"]')
        .should('have.text','Continue to Payment')
        .click({force:true})
        cy.xpath('//div[@class="css-901oao css-bfa6kz r-jwli3a r-t1w4ow r-cygvgh r-b88u0q r-1iukymi r-q4m81j" and text()="Continue"]')
        .click({force:true})
        cy.wait(5000)

        cy.log('Step 19 - Select payment method and proceed payment')

        cy.url()
        .should('include','/payment')
        cy.wait(12000)
        cy.xpath('(//div[text()="Pay with BCA Virtual Account"])[2]')
        .should('have.text','Pay with BCA Virtual Account')
        .click({force:true})
    })
})