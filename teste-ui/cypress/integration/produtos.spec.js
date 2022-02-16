/// <reference types='cypress' />

beforeEach(()=>{
    cy.visit('produtos/')
})

describe('Funcionalidade Página de produtos', () => {
    it('Deve selecionar produto da lista', ()=>{
        //cy.get('[class="product-block grid"]').eq(3).click()
        //cy.get('[class="product-block grid"]').first().click()
        cy.get('[class="product-block grid"]').contains('Aero Daily Fitness Tee').click()
        
    })

    it('Deve adicionar um produto ao carrinho', ()=>{
        var quantidade = 3;

        cy.get('[class="product-block grid"]').last().click()

        cy.get('.button-variable-item-XS').click()
        cy.get('.button-variable-item-Blue').click()
        cy.get('.input-text').clear().type(quantidade)

        cy.get('.single_add_to_cart_button').click()

        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantidade)

        cy.get('.woocommerce-message').should('contain', 'foram adicionados no seu carrinho')
    })

    it('Deve adicionar u produto ao carrinho - Usando Comando Customizado', () => {
        cy.addProduto('Abominable Hoodie', 3, 'XS', 'Green')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 3)

        cy.visit('produtos/')
        cy.addProduto('Abominable Hoodie', 3, 'XS', 'Red')
        cy.get('.dropdown-toggle > .mini-cart-items').should('contain', 6)
    });


})