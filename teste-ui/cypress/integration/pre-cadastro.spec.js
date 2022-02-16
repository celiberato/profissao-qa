/// <reference types="cypress" />


describe('Funcionalidade Pré-Cadastro', () => {

    beforeEach(()=>{
        cy.visit('minha-conta/')
    })

    it('Deve completar o pré-cadastro com sucesso', () => {

        const randomEmail = (Math.random()*1000) + '@teste.com';

        cy.get('#reg_email').type(randomEmail) 
        cy.get('#reg_password').type('teste@teste.com')
        cy.get(':nth-child(4) > .button').click()

        cy.get('a > .hidden-xs').should('contain', 'Welcome')

        cy.get('.woocommerce-MyAccount-navigation-link--edit-account > a').click()

        cy.get('#account_first_name').type('Fulano')
        cy.get('#account_last_name').type('De Tal')

        cy.get('.woocommerce-Button').click()

        cy.get('.woocommerce-message').should('contain', 'Detalhes da conta modificados com sucesso')
    });


    it('Deve completar o pré-cadastro com sucesso usando Comandos Customizados', () => {
        const randomEmail = (Math.random()*1000) + '@teste.com';

        cy.preCadastro(randomEmail, 'teste@teste.com')
    });
});