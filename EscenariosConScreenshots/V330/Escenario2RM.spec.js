// Escenario2RM.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Modifying a page with publish execution', () => {
    it('Modifying a page with publish execution', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view')
      .type('j.cuestaa@uniandes.edu.co')
      cy.get('.password.ember-text-field.gh-input.ember-view')
      .type('hqlDIOPN9j')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)  
      cy.get('[id$=ember30]').click()
      // Then I click on element having id "ember28"
      cy.wait(5000)
      cy.get('.gh-btn-green').click()
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view')
      .type('This is a new page')
      cy.wait(5000)
      cy.get('.gh-publishmenu.ember-view').click()
      cy.wait(5000)
      cy.get('.gh-publishmenu-radio.active').click()
      cy.wait(5000)
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
      cy.wait(10000)
    })
  })
/*
  Then I click on element having text "new"
  Then I wait for 10 seconds
  Then I enter "Esto es una nueva pagina" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"  
  Then I click on element having css selector ".gh-publishmenu.ember-view"
  Then I click on element having css selector ".gh-publishmenu-radio.active"
  Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
  Then I wait for 10 seconds*/