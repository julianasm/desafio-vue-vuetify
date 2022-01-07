/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe('pesquisarCripto', () => {
        before(() => cy.cripto())
        it('Sucesso', () => {
            cy.pesquisar()
            cy.wait(5000)
            cy.get('.red--text > .v-btn__content').click()

        })
    })