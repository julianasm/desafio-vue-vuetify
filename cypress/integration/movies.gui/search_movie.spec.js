/// <reference types="Cypress"/>

describe('Search movie', () => {
    it('Sucesso', () => {
        cy.visit("movies");

        cy.get('.v-input__slot')
        .type('encanto'+'{enter}')
        .wait(1000)
        .get('[style="z-index: 240;"] > .v-dialog')
        .type('{esc}')
    })
})