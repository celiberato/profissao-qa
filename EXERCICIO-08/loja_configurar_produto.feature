#language: pt

Funcionalidade: Configurar Produto
Como cliente da EBAC-SHOP
Quero configurar meu produto de acordo com meu tamanho e gosto
E escolher a quantidade
Para depois inserir no carrinho

Contexto:
Dado que eu acesse a página de configurar produto

Cenário: Seleções de cor, tamanho e quantidade devem ser obrigatórios
Quando eu selecionar a cor, tamanho
E a quantidade 
Então a cor, tamanho e quantidade devem ser obrigatorios

Cenário: Deve permitir apenas 10 produtos por venda
Quando eu selecionar os produtos 
Então deve permitir apenas 10 produtos por venda

Cenário: Deve permitir apenas 10 produtos por venda
Quando eu clicar no botão “limpar”
Então deve voltar ao estado original

