/// <reference types="Cypress"/>

describe('Get movie', () => {
    it('Sucesso', () => {
        cy.get_genres().then(res => res.forEach(element => {
            cy.get_movies(element)
        }))
    })
})