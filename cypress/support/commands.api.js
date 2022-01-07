Cypress.Commands.add('get_genres', () => {
    return cy.request({
        method: 'GET',
        url: 'https://api.themoviedb.org/3/genre/movie/list?api_key=95c87027a6f3b35fd5da614eae4f7151&include_adult=false',
    }).then((res) =>{
        // cy.log(res.body.genres)
        return res.body.genres
    })
})

Cypress.Commands.add('get_movies', (element) => {
    cy.request({
        method: 'GET',
        url:`https://api.themoviedb.org/3/discover/movie?api_key=95c87027a6f3b35fd5da614eae4f7151&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=${element.id}&with_watch_monetization_types=flatrate`
    }).then((res) =>{
        cy.log(JSON.stringify(res.body))
    })
})

Cypress.Commands.add('get_search_movies', (search) => {
    cy.request({
        method: 'GET',
        url: `https://api.themoviedb.org/3/search/movie?api_key=95c87027a6f3b35fd5da614eae4f7151&language=en-US&query=${search}&page=1&include_adult=false`
    }).then((res) =>{
        cy.log(JSON.stringify(res.body))
    })
})
