const faker = require('faker');


describe('Modify a post and make it private', () => {
    it('Modify a post', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.email.ember-text-field.gh-input.ember-view')
      .type('j.cuestaa@uniandes.edu.co')
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.password.ember-text-field.gh-input.ember-view')
      .type('hqlDIOPN9j')
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000) 
      cy.screenshot('v330/Escenario8/escenario') 
      cy.get('[id$=ember28]').click()
      cy.wait(5000)
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('h3').contains('Managing').click()
      cy.wait(5000)
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('p').contains('Ghost').type(faker.lorem.paragraph())
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.gh-publishmenu.ember-view').click()
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.gh-publishmenu-radio-label').contains('Unpublished').click()
      cy.screenshot('v330/Escenario8/escenario')
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
      cy.screenshot('v330/Escenario8/escenario')
    })
  })


