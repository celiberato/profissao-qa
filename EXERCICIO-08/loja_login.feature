#language: pt

Funcionalidade: Login na plataforma
Como cliente da EBAC-SHOP
Quero fazer o login (autenticação) na plataforma  
Para visualizar meus pedidos

Contexto: 
Dado que eu acesse a página de login

Cenário: Ao inserir dados válidos deve ser direcionado para a tela de checkout
Quando eu insiro os dados username e password 
Então devo ser redirecionado para a tela de checkout


Cenário: Ao inserir um dos campos inválidos deve exibir uma mensagem de alerta “Usuário ou senha inválidos”
Quando eu insiro um dos campos inválidos 
Então deve exibir a mensagem "Usuário ou senha inválidos"
