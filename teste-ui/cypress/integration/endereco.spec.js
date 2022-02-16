/// <reference types="cypress" />

const perfil = require('../fixtures/perfil')
import EnderecoPage from '../support/page-objects/endereco.page'
const dadosEnderecoFaturamento = require('../fixtures/endereco-faturamento')
const dadosEnderecoEntrega = require('../fixtures/endereco-entrega')

describe('Funcionalidade Endereços - Faturamento e Entrega', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
        cy.fixture('perfil').then(dados =>{
            cy.login(dados.usuario, dados.senha)
        })
    })

    it('Deve fazer cadastro de faturamento com sucesso', () => {
        EnderecoPage.editarEnderecoFaturamento('João', 'Silva', 'Petrobras', 'Brasil', 'Av. Paulista', 1000, 'São Paulo', 'São Paulo', '45820-839', '984984344')
        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });

    it('Deve fazer cadastro de faturamento com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoFaturamento(
            dadosEnderecoFaturamento[0].nome,
            dadosEnderecoFaturamento[0].sobrenome,
            dadosEnderecoFaturamento[0].empresa,
            dadosEnderecoFaturamento[0].pais,
            dadosEnderecoFaturamento[0].endereco,
            dadosEnderecoFaturamento[0].numero,
            dadosEnderecoFaturamento[0].cidade,
            dadosEnderecoFaturamento[0].estado,
            dadosEnderecoFaturamento[0].cep,
            dadosEnderecoFaturamento[0].telefone)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });


    it('Deve fazer cadastro de entrega com sucesso - Usando arquivo de dados', () => {
        EnderecoPage.editarEnderecoEntrega(
            dadosEnderecoEntrega[2].nome,
            dadosEnderecoEntrega[2].sobrenome,
            dadosEnderecoEntrega[2].empresa,
            dadosEnderecoEntrega[2].pais,
            dadosEnderecoEntrega[2].endereco,
            dadosEnderecoEntrega[2].numero,
            dadosEnderecoEntrega[2].cidade,
            dadosEnderecoEntrega[2].estado,
            dadosEnderecoEntrega[2].cep)

        cy.get('.woocommerce-message').should('contain', 'Endereço alterado com sucesso')
    });


});