const faker = require("faker");

export function crearPagina() {
  const filename = "cypress/Mocks/MOCK_DATA_CREATE_PAGE_FAKER.json";

  cy.readFile(filename).then((list) => {
    list.push({
      title: faker.name.title(),
      plainText: faker.lorem.sentence(),
    });
    cy.writeFile(filename, list);
  });
}
