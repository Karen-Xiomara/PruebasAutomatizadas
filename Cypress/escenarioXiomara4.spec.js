  describe('Create a page draf whiout description', () => {
    it('Create a page draf whiout description', () => {
      cy.visit('http://localhost:2368/ghost/#/signin')
      cy.get('.email.ember-text-field.gh-input.ember-view').type('j.cuestaa@uniandes.edu.co')
      cy.get('.password.ember-text-field.gh-input.ember-view').type('hqlDIOPN9j')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)  
      cy.get('[id$=ember30]').click()
      cy.wait(2000)
      cy.get('.ember-view.gh-btn.gh-btn-green').click()
      cy.wait(3000)  
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Pagina draf sin descripcion {enter}') 
    })
    it('Create a page draf whiout description', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.get('.email.ember-text-field.gh-input.ember-view').type('j.cuestaa@uniandes.edu.co')
        cy.get('.password.ember-text-field.gh-input.ember-view').type('hqlDIOPN9j')
        cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        cy.wait(1000)  
        cy.get('[id$=ember30]').click()
        cy.wait(2000)        
      })
  })