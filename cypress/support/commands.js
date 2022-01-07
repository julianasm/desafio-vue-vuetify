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

Cypress.Commands.add('gui_pokedexSearch', () => {
    cy.visit('http://10.42.0.202:8080/')
    cy.get('.v-toolbar__content > [href="/pokedex"]').click()
    cy.get('.v-input__control').type('Charmander')
    cy.get('.v-card__actions > .v-btn').click()
})
