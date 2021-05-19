// Escenario1ajc.spec..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Home Page', () => {
  
  beforeEach(() => {
    cy.visit('http://localhost:2368/ghost/#/signin')
    cy.screenshot('v345/Escenario5/escenario')
    cy.get('.email.ember-text-field.gh-input.ember-view').type('j.cuestaa@uniandes.edu.co')
    cy.screenshot('v345/Escenario5/escenario')
    cy.get('.password.ember-text-field.gh-input.ember-view').type('hqlDIOPN9j')
    cy.screenshot('v345/Escenario5/escenario')
    cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.screenshot('v345/Escenario5/escenario')
  })  

  it('Home Page', () => {
    
      cy.wait(1000)  
      cy.screenshot('v345/Escenario5/escenario')
    
  })
  
})  