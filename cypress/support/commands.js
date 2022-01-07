/// <reference types="Cypress" />

Cypress.Commands.add('cripto', () => {

        cy.visit('http://localhost:8081/')
        cy.get('[href="/cripto"] > .v-btn__content').click()

})

Cypress.Commands.add('pesquisar', () => {

    cy.get(':nth-child(3) > .v-form > .container > .v-input').click().type('BTC')
    cy.get(':nth-child(4) > .v-form > .container > .v-input').click().type('DOGE')
    cy.get('.primary--text > .v-btn__content').click()

})
