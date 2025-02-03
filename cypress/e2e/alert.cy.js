describe("Handling common web elements", function () {

    it("Test all common web elements", function () {
  
      //Launch the url
  
      cy.visit('https://kitchen.applitools.com/ingredients/alert')
      cy.get('#alert-button').click()
      Cypress.on('window:alert', (message) => {
        expect(message).to.equal( 'Airfryers can make anything!')
    })

    cy.get('#confirm-button').click()
    cy.on('window:confirm', function (message)  {
      expect(message).to.equal('Proceed with adding garlic?')

    return false
    })

    cy.get('#confirm-answer').contains('No')
    })
})