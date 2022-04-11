Cypress.Commands.add("navigateToCharts", () => {

    //  Extract the code into a command so there is no repeated code in multiple files and we can make fixes in here that affect each test using it.
    cy.intercept('https://geo.privacymanager.io/').as('closeCookiesLayer')

    cy.visit('https://rateyourmusic.com')

    cy.url().should('include', 'music')

    cy.get('[class="fc-button-label"]').contains('Consent').click()

    cy.wait('@closeCookiesLayer')

    cy.get('header').find('[href="/charts/"]').click()

    cy.url().should('include', 'charts')

})

Cypress.Commands.add("manageInputDelay", () => {

    //  Intercepts the request to the suggest when typing in the search input, there's a request each time a letter is typed.
    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=J&component=page.chart').as('suggestLoadJ')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Ja&component=page.chart').as('suggestLoadJa')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jaz&component=page.chart').as('suggestLoadJaz')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz&component=page.chart').as('suggestLoadJazz')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20F&component=page.chart').as('suggestLoadJazzF')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fu&component=page.chart').as('suggestLoadJazzFu')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fus&component=page.chart').as('suggestLoadJazzFus')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fusi&component=page.chart').as('suggestLoadJazzFusi')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fusio&component=page.chart').as('suggestLoadJazzFusio')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fusion&component=page.chart').as('suggestLoadJazzFusion')

    cy.get('#ui_browser_input_chart').type('J')

    cy.wait('@suggestLoadJ')

    cy.get('#ui_browser_input_chart').type('a')

    cy.wait('@suggestLoadJa')

    cy.get('#ui_browser_input_chart').type('z')

    cy.wait('@suggestLoadJaz')

    cy.get('#ui_browser_input_chart').type('z')

    cy.wait('@suggestLoadJazz')

    cy.get('#ui_browser_input_chart').type(' F')

    cy.wait('@suggestLoadJazzF')

    cy.get('#ui_browser_input_chart').type('u')

    cy.wait('@suggestLoadJazzFu')

    cy.get('#ui_browser_input_chart').type('s')

    cy.wait('@suggestLoadJazzFus')

    cy.get('#ui_browser_input_chart').type('i')

    cy.wait('@suggestLoadJazzFusi')

    cy.get('#ui_browser_input_chart').type('o')

    cy.wait('@suggestLoadJazzFusio')

    cy.get('#ui_browser_input_chart').type('n')

    cy.wait('@suggestLoadJazzFusion')

})