/// <reference types="Cypress"/>

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('Pokedex gui teste', () => {
    it('Sucesso', () => {
        cy.gui_pokedexSearch()
    })
})