
  describe('Modify a post', () => {
    it('Modify a post', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view')
      .type('j.cuestaa@uniandes.edu.co')
      cy.get('.password.ember-text-field.gh-input.ember-view')
      .type('hqlDIOPN9j')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)  
      cy.get('[id$=ember28]').click()
      cy.wait(5000)
      cy.get('h3').contains('Managi').click()
      cy.wait(5000)
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('@#$=,&()?¿¡´[]')
      cy.get('.gh-publishmenu.ember-view').click()
      cy.get('.gh-publishmenu-radio.active').click()
      cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
      
    })
  })
