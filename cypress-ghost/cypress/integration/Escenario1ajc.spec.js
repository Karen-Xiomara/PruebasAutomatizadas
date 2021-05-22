// Escenario1ajc.spec..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import { crearPostAJC } from "../funciones.js";
import MOCK_DATA from "../Mocks/MOCK_DATA_AJC.json";

const urlLogin = Cypress.env("urlLogin");
const username = Cypress.env("username");
const password = Cypress.env("password");  
  
  
describe('Create a Posts Draft', () => {

 
  let titles = MOCK_DATA;
  for (let rnd in titles) {
    it('Create a Posts', () => {
      cy.visit(urlLogin)
      cy.screenshot('v345/Escenario1/escenario')
      cy.get('.email.ember-text-field.gh-input.ember-view').type(username)
      cy.screenshot('v345/Escenario1/escenario')
      cy.get('.password.ember-text-field.gh-input.ember-view').type(password)
      cy.screenshot('v345/Escenario1/escenario')
      cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
      cy.wait(1000)  
      cy.screenshot('v345/Escenario1/escenario')
      cy.get('[id$=ember28]').click()
      cy.wait(2000)
      cy.screenshot('v345/Escenario1/escenario')
      cy.get('.gh-btn-green').click()
      cy.wait(3000)
      cy.screenshot('v345/Escenario1/escenario')  
      cy.get('.gh-editor-title.ember-text-area.gh-input.ember-view').type(titles[rnd].Titulo) 
      cy.screenshot('v345/Escenario1/escenario')      
    })
  }  
})  