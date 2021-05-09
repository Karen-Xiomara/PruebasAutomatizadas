// Escenario3RM.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Modifying a post with executing publish', () => {
    it('ModModifying a post with executing publish', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view')
      .type('j.cuestaa@uniandes.edu.co')
      cy.get('.password.ember-text-field.gh-input.ember-view')
      .type('hqlDIOPN9j')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)  
      cy.get('[id$=ember28]').click()
      // Then I click on element having id "ember28"
      cy.wait(5000)
      cy.get('.gh-btn-green').click()
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view')
      .type('Modifyin Post created')
      cy.wait(5000)
      cy.get('.koenig-editor__editor.__mobiledoc-editor.__has-no-content')
      .type('Details for post to be modified')
      cy.wait(5000)
      cy.get('.gh-publishmenu.ember-view').click()
      cy.wait(5000)
      cy.get('.gh-publishmenu-radio.active').click()
      cy.wait(5000)
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
      cy.wait(10000)
    })
  })
