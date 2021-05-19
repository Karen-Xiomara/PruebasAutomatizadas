const url = Cypress.config('baseUrl') 
const urlLogin = Cypress.env('urlLogin') 
const username = Cypress.env('username')
const password = Cypress.env('password')
var faker = require('faker')
const datetimepath = new Date().toISOString().replace(/:/g,".");

describe('Conjunto de pruebas escenarios 21 al 25', () => {
  
    // login in ghost
    beforeEach(()=>{    
      cy.viewport(1366,768)
      cy.visit(urlLogin)
      cy.get('[id$=ember8]').click()
      cy.screenshot(`${datetimepath}/LoginScreen-before`)
      cy.get('[id$=ember8]').type(username)
      cy.get('#ember10').type(password)
      //cy.intercept('https://static.ghost.org/v3.0.0/images/*').as('getConfig')
      cy.get('button[id="ember12"]').click()
      //cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').should('exist')
      //cy.wait('@getConfig')
      cy.screenshot(`${datetimepath}/HomePage-before`)
    }); 

    // logout
    afterEach(()=>{
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[9]/a').click()        
      //cy.url().should('equal', url)
    });
    
    // Escenario 21
    it('No. 21 - As user I login and then change profile', () => {
      
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]/div').click()
      
      //cy.intercept('/ghost/#/staff/*').as('getProfile')
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()
      //cy.wait('@getProfile')
      //cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').click({force:true})
      //cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').type(faker.lorem.words)
      //cy.get('input[id="user-location"]').click({force: true})
      cy.screenshot(`${datetimepath}/Scenne21-Step1-before`)
      cy.get('input[id="user-location"]').click({force: true}).type('{selectall}').type(faker.lorem.words())
      
      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click()
      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').should('have.class', 'gh-btn-green')
      cy.screenshot(`${datetimepath}/Scenen21-Step2-before`)
    })  
})