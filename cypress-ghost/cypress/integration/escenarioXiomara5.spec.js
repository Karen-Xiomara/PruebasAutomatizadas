const faker = require("faker");

const urlLogin = Cypress.env("urlLogin");
const username = Cypress.env("username");
const password = Cypress.env("password");

describe("Create a page draf sin titulo", () => {
  // login in ghost
  beforeEach(() => {
    cy.visit(urlLogin);
    cy.get("[id$=ember8]").click();
    cy.get("[id$=ember8]").type(username);
    cy.get("#ember10").type(password);
    cy.get('button[id="ember12"]').click();
  });

  it("Create a page draf sin titulo", () => {
    cy.get("[id$=ember37]").click();
    cy.wait(2000);
    cy.screenshot("v345/Escenario15/escenario");
    cy.get(".ember-view.gh-btn.gh-btn-green").click();
    cy.wait(3000);
    cy.screenshot("v345/Escenario15/escenario");
    cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(faker.lorem.paragraphs());
    cy.wait(2000);
    cy.screenshot("v345/Escenario15/escenario");
    cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
    cy.screenshot("v345/Escenario15/escenario");
  });
});
