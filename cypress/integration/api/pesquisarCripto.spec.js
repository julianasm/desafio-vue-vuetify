// / <reference types="Cypress" />

Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
})

describe('Realiza pesquisa', () => {

    it('Sucesso', () => {
        cy.request({
            method: 'GET',
            url: 'https://www.mercadobitcoin.net/api/btc/ticker/',
            body: 
            {
                "ticker":{
                   "high":"250191.00000000",
                   "low":"232600.00001000",
                   "vol":"59.34639550",
                   "last":"238946.98000000",
                   "buy":"238648.29629000",
                   "sell":"238916.99994000",
                   "open":"247415.01000000",
                   "date":1641575630
                }
             }
        }).then((res) => {
            cy.log(JSON.stringify(res))
        })
    })
})
