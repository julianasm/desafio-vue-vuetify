/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
});

describe('teste de api Pokedex', () => {
    it('Sucesso', () => {
        cy.api_pokedexSearch()
    });
});