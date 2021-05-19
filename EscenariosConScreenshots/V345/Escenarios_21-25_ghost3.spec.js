describe('Change Profile in Ghost', () => {

    beforeEach(()=>{         
        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.get('[id$=ember8]').type('j.cuestaa@uniandes.edu.co')
        cy.get('#ember10').type('hqlDIOPN9j')
        cy.get('button[id="ember12"]').click()        
        cy.url().should('equal', 'http://localhost:2369/ghost/#/site')
    });

    afterEach(()=>{
        cy.reload()
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
        cy.xpath('/html/body/div[1]/div/ul/li[9]/a').click()        
        cy.visit('http://localhost:2369/ghost/#/signin')
        cy.url().should('equal', 'http://localhost:2369/ghost/#/signin')
    });

    it('As user I login and then invite Staff in Ghost', () => {
        cy.xpath("/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[5]/a").click()
        cy.screenshot('v345/Escenario21/escenario')
        cy.xpath("/html/body/div[2]/div/main/section/header/section/button").click()
        cy.screenshot('v345/Escenario21/escenario')
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input").type("correo@mail.com")
        cy.screenshot('v345/Escenario21/escenario')
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button").click()
        cy.screenshot('v345/Escenario21/escenario')
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/a").click()
        cy.screenshot('v345/Escenario21/escenario')
    });
    
    it('As user I login and then create and delete Tag in Ghost', () => {
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/header/section/a').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input').type('TagUno Test')
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea').type('descripcion tag uno')
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[2]/div[1]/div[1]/input').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[2]/div[1]/div[1]/input').type('tag_metadata')
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/form/header/section/button').click()
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.get('h3').contains('TagUno Test').click({force: true})
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/button').click()
        cy.screenshot('v345/Escenario22/escenario')
        cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section').should('exist')
        cy.screenshot('v345/Escenario22/escenario')        
    });  

    it('As user I login and then change settings', () => { 
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[2]/a').click()
        cy.screenshot('v345/Escenario23/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button').click({force: true})
        cy.screenshot('v345/Escenario23/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input').click({force: true})
        cy.screenshot('v345/Escenario23/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input').type('.')
        cy.screenshot('v345/Escenario23/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/button').click()
        cy.screenshot('v345/Escenario23/escenario')
    });

    it('As user I login and then change profile', () => { 
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
        cy.screenshot('v345/Escenario24/escenario')
        cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()
        cy.screenshot('v345/Escenario24/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').click({force:true})
        cy.screenshot('v345/Escenario24/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').type('Location test')
        cy.screenshot('v345/Escenario24/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click()
        cy.screenshot('v345/Escenario24/escenario')
    });  

    it('As user I login and then create a Page', () => {
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a').click()
        cy.screenshot('v345/Escenario25/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/header/section/a').click({force: true})
        cy.screenshot('v345/Escenario25/escenario')
        cy.intercept('/ghost/api/v3/admin/*').as('getPage')
        cy.screenshot('v345/Escenario25/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea').type('Titulo Pagina uno')
        cy.screenshot('v345/Escenario25/escenario')
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/div[1]/article').type('c', {delay: 100}) 
        cy.screenshot('v345/Escenario25/escenario')
        cy.wait('@getPage').its('response.statusCode').should('be.oneOf', [200, 201])
        cy.screenshot('v345/Escenario25/escenario')        
    });
})