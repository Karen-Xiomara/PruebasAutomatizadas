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
        cy.xpath("/html/body/div[2]/div/main/section/header/section/button").click()
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[1]/fieldset/div[1]/input").type("correo@mail.com")
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button").click()
        cy.xpath("/html/body/div[4]/div[2]/div/div/div/div[2]/section/a").click()
    });
    
    it('As user I login and then create and delete Tag in Ghost', () => {
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/header/section/a').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[1]/input').type('TagUno Test')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[1]/div[1]/div[3]/textarea').type('descripcion tag uno')
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[2]/div[1]/div[1]/input').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/form/div/div[2]/div[1]/div[1]/input').type('tag_metadata')
        cy.xpath('/html/body/div[2]/div/main/section/form/header/section/button').click()
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[4]/a').click({force: true})
        cy.get('h3').contains('TagUno Test').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/button').click()
        cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section').should('exist')
        //cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/a').click({force: true})
        //cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section').should('not.exist')
        //cy.xpath('/html/body/div[4]/div[2]/div/div/div/div[2]/section/div[2]/button[2]').click({force: true})
        
    });  

    it('As user I login and then change settings', () => { 
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[3]/li[2]/a').click()
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[2]/button').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input').click({force: true})
        cy.xpath('/html/body/div[2]/div/main/section/div/section/div[2]/div[1]/div[1]/div[3]/div/div/div[1]/input').type('.')
        cy.xpath('/html/body/div[2]/div/main/section/div/header/section/button').click()
    });

    it('As user I login and then change profile', () => { 
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[2]/div[1]').click()
        cy.xpath('/html/body/div[1]/div/ul/li[4]/a').click()
        cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').click({force:true})
        cy.xpath('/html/body/div[2]/div/main/section/section/div/form[1]/div/fieldset/div[8]/textarea').type('Location test')
        cy.xpath('/html/body/div[2]/div/main/section/header/section/button').click()
    });  

    it('As user I login and then create a Page', () => {
        cy.xpath('/html/body/div[2]/div/nav[1]/section/div[1]/ul[2]/li[3]/a').click()
        cy.xpath('/html/body/div[2]/div/main/section/header/section/a').click({force: true})
        cy.intercept('/ghost/api/v3/admin/*').as('getPage')
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/div[1]/textarea').type('Titulo Pagina uno')
        //cy.xpath('/html/body/div[2]/div/main/section/div[1]/div[1]/article').click({force:true})
        cy.xpath('/html/body/div[2]/div/main/section/div[1]/div[1]/article').type('c', {delay: 100}) 
        // cy.xpath('/html/body/div[2]/div/main/section/header/section/div/div[1]').click()
        // cy.xpath('/html/body/div[1]/div/footer/button[2]').click()
        // cy.xpath('/html/body/div[2]/div/aside/article/div').should('exist')       
        cy.wait('@getPage').its('response.statusCode').should('be.oneOf', [200, 201])
        
    });

})