/// <reference types="Cypress" />


Cypress.Commands.add('gui_pokedexSearch', () => {
    cy.visit('http://10.42.0.202:8080/')
    cy.get('.v-toolbar__content > [href="/pokedex"]').click()
    cy.get('.v-input__control').type('Charmander')
    cy.get('.v-card__actions > .v-btn').click()
})