// Escenario5RM.spec.js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test

describe('', () => {
    it('Canceling a deletion of a created post', () => {
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
      .type('MOdifying feature {enter}') 
    })


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
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]/h3').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click({force: true})
        cy.wait(5000)
        /*cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/button/span').click({force: true})*/
        cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[6]/label/span').click({force: true})
        cy.wait(5000)
        /*cy.get('modal-content ember-view').invoke('show')*/
        /*cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/a').click({force: true})*/
        cy.wait(5000)
    })
  })

