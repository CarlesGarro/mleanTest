// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add("navigateToCharts", () => { 
    

    cy.intercept('https://geo.privacymanager.io/').as('closeCookiesLayer')

    cy.intercept('https://rateyourmusic.com/api/1/browse/music/?q=Jazz%20Fusion&component=page.chart').as('suggestLoadJazzFusion')

    cy.visit('https://rateyourmusic.com')

    cy.url().should('include', 'music')

    cy.get('[class="fc-button-label"]').contains('Consent').click()

    cy.wait('@closeCookiesLayer')

    cy.get('header').find('[href="/charts/"]').click()

    cy.url().should('include', 'charts')

 })