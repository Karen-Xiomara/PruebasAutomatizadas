import MOCK_DATA_PAGES from "../Mocks/MOCK_DATA_CREATE_PAGE.json";

const urlLogin = Cypress.env('urlLogin') 
const username = Cypress.env('username')
const password = Cypress.env('password')

describe("Create a page Schedule", () => {
  let pages = MOCK_DATA_PAGES;

  // login in ghost
  beforeEach(()=>{     
    cy.visit(urlLogin)
    cy.get('[id$=ember8]').click()
    cy.get('[id$=ember8]').type(username)
    cy.get('#ember10').type(password)
    cy.get('button[id="ember12"]').click()
  }); 

  for (let row in pages) {
    it("Create a page Schedule", () => {
      cy.get("[id$=ember37]").click();
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.wait(3000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(pages[row].title);
      cy.screenshot("v345/Escenario11/escenario");
      cy.wait(2000);
      cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(pages[row].plainText);
      cy.wait(5000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger").click();
      cy.wait(5000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[2]/small").click({ force: true });
      cy.screenshot("v345/Escenario11/escenario");
      cy.xpath("/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[1]/div/div[1]/div").type('{selectall}{del}' + pages[row].datePublish);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view").click();
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      cy.screenshot("v345/Escenario11/escenario");
      cy.xpath("/html/body/div[2]/div/aside/article/button").click({ force: true });
    });
  }
});