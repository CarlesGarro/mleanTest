describe("Jazz Fusion genre filter", () => {
  it.skip("navigate to charts and filter by Jazz Fusion and all time best music", () => {

    cy.navigateToCharts()

    cy.manageInputDelay()

    cy.get('[id="ui_browser_list_chart"]').contains('Include').click({ force: true })

    cy.get('[class*="ui_browser_list_btn"]').contains('Genre').click({ force: true })

    cy.get('#page_chart_query_create_btn').click({ force: true })

    cy.url().should('include', 'jazz-fusion')

    cy.get('[id="page_chart_query_item_chart_date_type_title"]').click()

    cy.get('[id="page_chart_query_item_date_select"]').contains('All-time').click()

    cy.get('#page_chart_query_create_btn').click({ force: true })

    cy.url().should('include', 'archival')

    for (let i = 1; i < 11; i++) {

      cy.get('[id="pos' + i + '"]').find('[class="topcharts_item_genres_container"]').should('contain', 'Jazz Fusion')
    }


  })
})
