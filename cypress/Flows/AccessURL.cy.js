require('cypress-xpath')

import * as cons from "../constant"

export function AccessURL(){

cy.visit(`${cons.MAIN_URL}`)
    
cy.visit('https://www.traveloka.com/')
}