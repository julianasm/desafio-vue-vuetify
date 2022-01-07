/// <reference types="Cypress"/>

describe('Get Search Movies', () => {
    it('Sucesso', () => {
        cy.get_search_movies("encanto");
    })
})