const url = Cypress.config('baseUrl') 
const urlLogin = Cypress.env('urlLogin') 
const username = Cypress.env('username')
const password = Cypress.env('password')
var faker = require('faker')
const datetimepath = new Date().toISOString().replace(/:/g,".");

describe('Modificar campos del perfil de usuario.', () => {
  
    // login in ghost
    beforeEach(()=>{     
      //cy.viewport(1366,768)
      cy.visit(urlLogin)
      cy.get('[id$=ember8]').click()
      //cy.screenshot(`${datetimepath}/LoginScreen-before`)
      cy.get('[id$=ember8]').type(username)
      cy.get('#ember10').type(password)
      cy.get('button[id="ember12"]').click()
      //cy.screenshot(`${datetimepath}/HomePage-before`)
    }); 

    // logout
    afterEach(()=>{
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[9]/a').click()        
    }); 

    // Escenario: Actualizar los campos location, website, Facebook profile,
    // Twitter profile y Bio, con datos generados con Faker
    it.skip('Actualiza perfil de usuario con datos generados por Faker.', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()
      
      // campo location
      cy.get('input[id="user-location"]').click({force: true}).type('{selectall}').type(faker.lorem.words())
      // campo website
      cy.get('input[id="user-website"]').click({force: true}).type('{selectall}').type(faker.internet.url())
      // campo Facebook profile
      cy.get('input[id="user-facebook"]').click({force: true}).type('{selectall}').type('https://www.facebook.com/'+faker.internet.userName())
      // campo Twitter profile
      cy.get('input[id="user-twitter"]').click({force: true}).type('{selectall}').type('https://twitter.com/'+faker.internet.userName())
      // campo Bio 
      cy.get('textarea[id="user-bio"]').click({force: true}).type('{selectall}').type(faker.lorem.sentence())

      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click()
      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').should('have.class', 'gh-btn-green')
    }); 
    
    // Escenario: Actualizar campo Website en el perfil del usuario
    // ingresando un valor invalido, esperar mensaje indicando: 
    // Website is not a valid url
    // hacer reload de pagina para evitar modal de salvar
    it.skip('Actualiza perfil de usuario con campo website invalido.', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()

      // campo website
      cy.get('input[id="user-website"]').click({force: true}).type('{selectall}').type(faker.lorem.word())
      cy.get('input[id="user-location"]').click({force: true})
      cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[5]/p[1]').should('not.have.attr', 'hidden')
      
      // descartar los cambios
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a').click({force: true})
      cy.wait(500)
      cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]').click({force: true})
      cy.wait(500)
    }); 

    // Escenario: Actualizar campo Bio del perfil del usuario
    // ingresar texto con mas de 200 caracteres
    it.skip('Actualiza perfil de usuario campo Bio excede logitud permitida.', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()

      // campo Bio 
      cy.get('textarea[id="user-bio"]').click({force: true}).type('{selectall}').type(faker.lorem.paragraphs())
      cy.get('input[id="user-twitter"]').click({force: true})
      cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/p[1]').should('not.have.attr', 'hidden')
      
      // descartar los cambios
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a').click({force: true})
      cy.wait(500)
      cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]').click({force: true})
    
    });

    it('Actualiza perfil de usuario campo Name con caracteres especiales.', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()

      cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[1]/input').click({force: true}).type('{selectall}').type(faker.datatype.string())

      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click()
      cy.xpath('/html/body/div[2]/div/main/section/header/section/button').should('have.class', 'gh-btn-green')
    });

    it('Actualiza perfil de usuario campo Name con caracteres especiales.', () => {
      Cypress.on('uncaught:exception', (err, runnable) => {
        // returning false here prevents Cypress from
        // failing the test
        return false
      })
      
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
      cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()

      // campo email
      cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[3]/input').click({force: true}).type('{selectall}').type(faker.datatype.string())
      cy.get('input[id="user-location"]').click({force: true})
      
      // descartar los cambios
      cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a').click({force: true})
      cy.wait(500)
      cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]').click({force: true})
    
    });
})