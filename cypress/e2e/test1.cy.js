describe("Handling common web elements", function () {

  it("Test all common web elements", function () {

    //Launch the url

    cy.visit('/')

    //Radio Buttons

    cy.get('input[value="radio1"]')
    .should('not.be.checked')
    .check()
    .should('be.checked')

    //Dropdown Example 1 - Dynamic 

    cy.get('input#autocomplete')
    .should('be.empty')
    .type('NI')
    cy.get('.ui-menu-item>div').each(function ($e1, index, $list) {
      //Iterating through the list is the best practice
      $e1.text()
      if ($e1.text()==='Nigeria')
        {
        $e1.click()
        }
    })
    cy.get('input#autocomplete')
    .should('have.value', 'Nigeria')


    //Dropdown Example 2 - Static Dropdwon

    cy.get('select')
    .select('option2')
    .should('have.value', 'option2')

    //Checkboxes

  cy.get('#checkBoxOption3')
  .should('not.be.checked')
  .check()
  .should('be.checked')

  cy.get('#checkBoxOption2')
  .should('not.be.checked')
  .check()
  .should('be.checked')
  cy.get('#checkBoxOption2').uncheck()

  //Hide/Show

cy.get('#displayed-text').should('be.empty')
.type('Malafakumo')
cy.get('[value="Hide"]').click()
cy.get('#displayed-text').should('not.be.visible')
cy.get('[value="Show"]').click()
cy.get('#displayed-text').should('be.visible')


//Alert & Confirmation Modals

cy.get('[placeholder="Enter Your Name"]')
.clear() 
.should('be.empty')
.type('Joy')
cy.get('#alertbtn').click()
Cypress.on('window:alert', (message) => {
expect(message).to.equal( 'Hello Joy, share this practice page and share your knowledge'
)
})

cy.get('[placeholder="Enter Your Name"]')
.should('be.empty')
.type('James')
cy.get('#confirmbtn').click()
cy.on('window:confirm', function (message)  {
  expect(message).to.equal('Hello James, Are you sure you want to confirm?')

  return false
})



//Child tab/redirect link

cy.get('[href="https://qasummit.org/"]')
.invoke('removeAttr', 'target')
.click().wait(4000)
cy.origin('https://qasummit.org/', function () {
  cy.get('.hero_heading')
  .contains('Software Testing Meetup')
})

})

})
