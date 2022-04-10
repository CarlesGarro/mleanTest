var i = 0;
for (i = 0; i < 3; i++) {
  describe("test mlean cypress", () => {
    it("navigate to charts and filter by 70's music", () => {

      cy.navigateToCharts()

      cy.get('[id="page_chart_query_item_chart_date_type_title"]').click()

      cy.get('#date_year_chooser_decade_1970').click()

      cy.get('.page_chart_query_date_close').find('.btn').click()

      cy.get('#page_chart_query_create_btn').click()

      cy.url().should('include', '1970')

      for (let i = 1; i < 11; i++) {
        const array70 = ['1970\n', '1971\n', '1972\n', '1973\n', '1974\n', '1975\n', '1976\n', '1977\n', '1978\n', '1979\n']

        cy.get('[id="pos' + i + '"]').find('[class="topcharts_item_releasedate"]').invoke('text').then(($el) => {
          const [dayVal, monthVal, yearVal] = $el.split(' ');

          const yearVal2 = new RegExp(yearVal)

          expect(array70).to.match(yearVal2)
        })


      }

    })
  })
}