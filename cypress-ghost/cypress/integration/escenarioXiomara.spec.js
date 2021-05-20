import MOCK_DATA from "../Mocks/MOCK_DATA.json";

describe("Create a page Schedule", () => {
  let titles = MOCK_DATA;
  for (let rnd in titles) {
    it("Create a page Schedule", () => {
      cy.visit("http://localhost:2369/ghost/#/signin");
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".email.ember-text-field.gh-input.ember-view").type(
        "j.cuestaa@uniandes.edu.co"
      );
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".password.ember-text-field.gh-input.ember-view").type(
        "hqlDIOPN9j"
      );
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(
        ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
      ).click();
      cy.wait(1000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get("[id$=ember37]").click();
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".ember-view.gh-btn.gh-btn-green").click();
      cy.wait(3000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".gh-editor-title.ember-text-area.gh-input.ember-view").type(
        titles[rnd].first_name
      );
      cy.screenshot("v345/Escenario11/escenario");
    });
    it("Create a page Schedule", () => {
      cy.visit("http://localhost:2369/ghost/#/signin");
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".email.ember-text-field.gh-input.ember-view").type(
        "j.cuestaa@uniandes.edu.co"
      );
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".password.ember-text-field.gh-input.ember-view").type(
        "hqlDIOPN9j"
      );
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(
        ".login.gh-btn.gh-btn-blue.gh-btn-block.gh-btn-icon.ember-view"
      ).click();
      cy.wait(1000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get("[id$=ember37]").click();
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.xpath(
        "/html/body/div[2]/div/main/section/section/ol/li[2]/a[2]/h3"
      ).click({ force: true });
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".koenig-editor__editor.__mobiledoc-editor.__has-no-content").type(
        "Descripcion de la pagina nueva programada"
      );
      cy.wait(5000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(
        ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
      ).click();
      cy.wait(5000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.xpath(
        "/html/body/div[1]/div/div/section/div/div[2]/div[2]/div[2]/div[2]/small"
      ).click({ force: true });
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(
        ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
      ).click();
      cy.wait(2000);
      cy.screenshot("v345/Escenario11/escenario");
      cy.get(".blue.link.fw4.flex.items-center.ember-view").click();
      cy.screenshot("v345/Escenario11/escenario");
    });
  }
});
