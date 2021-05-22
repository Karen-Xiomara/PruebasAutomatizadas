import MOCK_DATA_PAGES from "../Mocks/MOCK_DATA_CREATE_PAGE_RM.json";
import { crearPagina } from "../funciones";

const urlLogin = Cypress.env("urlLogin");
const username = Cypress.env("username");
const password = Cypress.env("password");

describe("Create a page with error - Publish date must be in the past", () => {
  before("Create a page draf - Inicio", () => {
    crearPagina();
  });
  
  let pages = MOCK_DATA_PAGES;
  
  // login in ghost
  beforeEach(() => {
    cy.visit(urlLogin);
    cy.get("[id$=ember8]").click();
    cy.get("[id$=ember8]").type(username);
    cy.get("#ember10").type(password);
    cy.get('button[id="ember12"]').click();
  });

  for (let row in pages) {
    it("Create a page draf", () => {
      cy.wait(2000);
      cy.get("[id$=ember37]").click();
      cy.wait(2000);
      //cy.screenshot("v345/Escenario13/escenario");
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.wait(3000);
      //cy.screenshot("v345/Escenario13/escenario");
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
        pages[row].title
      );
      //cy.screenshot("v345/Escenario13/escenario");
      cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(
        pages[row].plainText
      );
      cy.wait(2000);
      //cy.screenshot("v345/Escenario13/escenario");
      //cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click({force: true})
      cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input').click({force: true})
      cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input').clear()
      cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[2]/div/div[1]/div/div[1]/div/input').type(
        pages[row].datePublish
        );
        cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[3]/div/div[1]/ul/input').click({force: true})
        cy.wait(4000);
        cy.xpath('/html/body/div[4]/div/div/div/div/div/div/div/div[1]/div[2]/form/div[2]/div[2]').should('have.value', '')
      //cy.screenshot("v345/Escenario13/escenario");
      cy.wait(2000);
    });
  }
});
