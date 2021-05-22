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


export function crearPostAJC() {
  const filenameA = "cypress/Mocks/MOCK_DATA_AJC.json";

  cy.readFile(filenameA).then((list) => {
    list.push({
      id: faker.random.number(100, 1000),
      Titulo: faker.lorem.sentence(),
      Detalle: faker.lorem.sentence(),
      email: 'ghghg@.con',
      DetalleEsp: faker.lorem.sentence(),
      ip_adress: faker.lorem.sentence(),
      Password: faker.lorem.sentence(),
      FechasFuturas: faker.lorem.sentence(),
      FechasPasadas: faker.lorem.sentence(),
      
    });
    cy.writeFile(filenameA, list);
  });
}