import MOCK_DATA from "../Mocks/MOCK_DATA_MOD_POST1.json";

describe('Modify the title and content of a post', () => {
  let titles = MOCK_DATA;
  for (let rnd in titles) {
  it('Modify a post with words in the title and description', () => {
    cy.visit('http://localhost:2369/ghost/#/signin')
    cy.get('.email.ember-text-field.gh-input.ember-view')
    .type('j.cuestaa@uniandes.edu.co')
    cy.get('.password.ember-text-field.gh-input.ember-view')
    .type('hqlDIOPN9j')
    cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
    cy.wait(1000)
    cy.get('[id$=ember28]').click()
    cy.wait(5000)
    cy.get('h3').contains('Organi').click()
    cy.wait(5000)
    cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titles[rnd].titulo)
    cy.get('p').contains('Ghost').type(titles[rnd].descripcion)
    cy.get('.gh-publishmenu.ember-view').click()
    cy.get('.gh-publishmenu-radio.active').click()
    cy.get('.gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view').click()
  })
}
})