
  const faker = require('faker');

  describe('Modify the content of a post with a paragraph', () => {
    it('Modify a post', () => {
      cy.visit('http://localhost:2369/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view')
      .type('j.cuestaa@uniandes.edu.co')
      cy.get('.password.ember-text-field.gh-input.ember-view')
      .type('hqlDIOPN9j')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)
      cy.get('[id$=ember28]').click()
      cy.wait(5000)
      cy.get('h3').contains('Creating').click()
      cy.wait(5000)
      cy.get('p').contains('Ghost').type(faker.lorem.paragraph())
      cy.get('.gh-publishmenu.ember-view').click()
      cy.get('.gh-publishmenu-radio.active').click()
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
      
    })
  })

