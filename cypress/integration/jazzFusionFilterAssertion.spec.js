var i = 0;
for (i = 0; i < 3; i++) {

  describe("Jazz Fusion genre filter", () => {
    it("navigate to charts and filter by Jazz Fusion and all time best music", () => {

      cy.navigateToCharts()

      cy.get('#ui_browser_input_chart').type('Jazz')

      cy.get('#ui_browser_input_chart').type(' Fusion')

      cy.wait('@suggestLoadJazzFusion')

      cy.get('[id="ui_browser_list_chart"]').contains('Include').click()

      cy.get('[class*="ui_browser_list_btn"]').contains('Genre').click()

      cy.get('#page_chart_query_create_btn').click()

      cy.url().should('include', 'jazz-fusion')

      cy.get('[id="page_chart_query_item_chart_date_type_title"]').click()

      cy.get('[id="page_chart_query_item_date_select"]').contains('All-time').click()

      cy.get('#page_chart_query_create_btn').click()

      cy.url().should('include', 'archival')

      for (let i = 1; i < 11; i++) {

        cy.get('[id="pos' + i + '"]').find('[class="topcharts_item_genres_container"]').should('contain', 'Jazz Fusion')
      }


    })
  })
}