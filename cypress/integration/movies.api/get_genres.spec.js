/// <reference types="Cypress"/>

describe('Get genres', () => {
    it('Sucesso', () => {
        cy.get_genres().then(res => res.forEach(element => {
            cy.log(element)
        }))
    })
})