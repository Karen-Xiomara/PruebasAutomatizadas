// Escenario1ajc.spec..js created with Cypress
//
// Start writing your Cypress tests below!
// If you're unfamiliar with how Cypress works,
// check out the link below and learn how to write your first test:
// https://on.cypress.io/writing-first-test
import MOCK_DATA from "../Mocks/MOCK_DATA_MAIL.json";

const urlLogin = Cypress.env("urlLogin");
const username = Cypress.env("username");
const password = Cypress.env("password"); 

describe('Home', () => {
  let titles = MOCK_DATA;
  for (let rnd in titles) {
    it('Home Page', () => {
     cy.visit(urlLogin)
     cy.screenshot('v345/Escenario5/escenario')
     cy.get('.email.ember-text-field.gh-input.ember-view').type(titles[rnd].email)
     cy.screenshot('v345/Escenario5/escenario')
     cy.get('.password.ember-text-field.gh-input.ember-view').type(titles[rnd].Password)
     cy.screenshot('v345/Escenario5/escenario')
     cy.get('.login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view').click()
     cy.screenshot('v345/Escenario5/escenario')
     cy.wait(1000)  
     cy.screenshot('v345/Escenario5/escenario')
    
    })
  }
})  