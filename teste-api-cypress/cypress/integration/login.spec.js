/// <reference types="cypress" />

describe('Login -  Teste da API ServeRest', () => {
    it('Deve fazer login com sucesso', () => {
        cy.request({
            method: "POST",
            url: "/login",
            body: {
                "email": "fulano@qa.com",
                "password": "teste"
            }
        }).then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.contain('Login realizado com sucesso')
            cy.log(response.body)
        })
    })
});
