/// <reference types="Cypress" />

Cypress.on('uncaught:exception', (err, runnable) => {
    return false
    });

    describe('pesquisarCripto', () => {
        before(() => cy.cripto())
        it('Sucesso', () => {
            cy.pesquisar()

        })
    })