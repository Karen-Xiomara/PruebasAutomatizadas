// Escenario1ajc.spec..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
describe('Create a Posts Scheduled', () => {
  
  it('Create a Posts', () => {
    cy.visit('http://localhost:2368/ghost/#/signin')
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('.email.ember-text-field.gh-input.ember-view').type('j.cuestaa@uniandes.edu.co')
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('.password.ember-text-field.gh-input.ember-view').type('hqlDIOPN9j')
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(1000)  
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('[id$=ember28]').click()
    cy.wait(1000)
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('.gh-btn-green').click()
    cy.wait(1000)  
    cy.screenshot('v330/Escenario3/escenario')
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type('Pagina nueva de ejemplo Scheduled {enter}')  
    cy.screenshot('v330/Escenario3/escenario')
  })
    it('Create a Posts', () => {
        cy.visit('http://localhost:2368/ghost/#/signin')
        cy.screenshot('v330/Escenario3/escenario')
        cy.get('.email.ember-text-field.gh-input.ember-view').type('j.cuestaa@uniandes.edu.co')
        cy.screenshot('v330/Escenario3/escenario')
        cy.get('.password.ember-text-field.gh-input.ember-view').type('hqlDIOPN9j')
        cy.screenshot('v330/Escenario3/escenario')
        cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
        cy.wait(1000)
        cy.screenshot('v330/Escenario3/escenario')  
        cy.get('[id$=ember28]').click()
        cy.wait(1000)
        cy.screenshot('v330/Escenario3/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]/h3').click({force: true})  
        cy.screenshot('v330/Escenario3/escenario')
        cy.get('.gh-btn.gh-btn-outline.gh-publishmenu-trigger.ember-basic-dropdown-trigger.ember-view').click() 
        cy.wait(2000) 
        cy.screenshot('v330/Escenario3/escenario')
        cy.xpath('/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[1]').click({force: true})
        cy.wait(1000)
        cy.screenshot('v330/Escenario3/escenario')
              
  }) 
})  
