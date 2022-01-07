/// <reference types="Cypress"/>

describe('Search movie', () => {
    it('Sucesso', () => {
        cy.visit("movies");

        cy.get('[class="row"]')
        .contains('Romance')
        .click()
        .get('.pb-2 > .v-slide-group__next')
        .wait(300)
        .click()
        .wait(300)
        .click()
        .get(':nth-child(6) > .v-image > .v-responsive__sizer')
        .click()
        .get('[style="z-index: 240;"] > .v-dialog')
        .type('{esc}')
    })
})