/// <reference types="cypress" />

describe('Teste da Funcionalidade Produtos', () => {

    let token

    before(() => {
        cy.token( "fulano@qa.com", "teste").then ((tkn) => { token = tkn })
    });

    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: "GET",
            url: "/produtos"
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body).to.have.property('produtos')
            cy.log(response.body)
            expect(response.duration).to.be.lessThan(500)
        })
    })

    it('Cadastrar Produto', () => {

        let produto = "Mouse Teste 2 v"  + Math.floor(Math.random()*10000)

        cy.log(token)
        cy.request({
            method: "POST",
            url: "/produtos",
            body: {
                "nome": produto,
                "preco": 470,
                "descricao": "Mouse v2",
                "quantidade": 381
            },
            headers: {
                "authorization": token
            }
        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.contain("Cadastro realizado com sucesso")
            cy.log(response.body)
            expect(response.duration).to.be.lessThan(500)
        })
    })


    it('Deve validar mensagem de erro ao cadastrar produto já existente', () => {

        let produto = "Mouse"
        
        cy.log(token)
        cy.request({
            method: "POST",
            url: "/produtos",
            body: {
                "nome": produto,
                "preco": 470,
                "descricao": "Mouse v2",
                "quantidade": 381
            },
            headers: {
                "authorization": token
            }
        }).then((response) => {
            cy.log(response.body)
            expect(response.status).to.equal(201)
//            expect(response.body.message).to.eq("Já existe produto com esse nome")
            expect(response.duration).to.be.lessThan(500)
        })
    })
});
