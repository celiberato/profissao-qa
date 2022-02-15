#language: pt

Funcionalidade: Tela de cadastro - Checkout
Como cliente da EBAC-SHOP
Quero fazer concluir meu cadastro   
Para finalizar minha compra

Contexto:
Dado que eu acesse a página de cadastro - checkout

Cenário: Deve ser cadastrado com todos os dados obrigatórios, marcado com asteriscos
Quando eu informar nome, sobrenome, pais, endereço, cidade, CEP e telefone
Então ser cadastrado o usuario

Cenário: Não deve permitir campo e-mail com formato inválido. Sistema deve inserir uma mensagem de erro
Quando eu informar um e-mail com formato inválido 
Então deve exibir mensagem "Email inváido"

Cenário: Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta
Quando eu não informar um dos campos <nome>, <sobrenome>, <pais>, <endereco>, <cidade>, <cep> e <telefone>
Então deve exibir a mensagem "Preencher todos os campos obrigatórios"

Esquema do Cenário: Ao tentar cadastrar com campos vazios, deve exibir mensagem de alerta

Exemplos:
| nome | sobrenome | pais | endereço | cidade | cep | telefone |
| João | Silva | "" | Av. Paulisa | São Paulo | 87000-098 | 11-85557743 |
| Maria | Santos | Brasil | "" | São Paulo | 44000-098 | 11-85557743 |
| Ricardo | Freitas | Brasil | Av. Paulisa | "" | 55000-098 | 11-88537743 |
| José | Silva | Brasil | Av. Paulisa | São Paulo | "" | 11-88557743 |
