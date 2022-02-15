#language: pt

Funcionalidade: Tela de login
Como aluno do Portal EBAC
Quero me autenticar
Para visulizar minhas notas

Contexto:
Dado que eu acesse a página de autenticação do Portal EBAC


Cenário: Autenticação válida
Quando eu digitar o usuário "joao@ebac.com.br"
E a senha "senha@123"
Então deve exibir uma mensagem de boas vindas "Olá João"


Cenário: Usuário inexistente
Quando eu digitar o usuário "xxxx@ebac.com.br"
E a senha "senha@123"
Então deve exibir uma mensagem de alerta "Usuário inexistente"

Cenário: Senha inválida
Quando eu digitar o usuário "joao@ebac.com.br"
E a senha "xxx@123"
Então deve exibir uma mensagem de alerta "Usuário / Senha inválidas"

Esquema do Cenário: Autenticar múltiplos usuários
Quando eu digitar o <usuario>
E a <senha>
Então deve exibir a <mensagem> de sucesso

Exemplos:
| usuario | senha | mensagem |
| "joao@ebac.com.br" | "teste@123" | "Olá João" |
| "maria@ebac.com.br" | "teste@123" | "Olá Maria" |
| "pedro@ebac.com.br" | "teste@123" | "Olá Pedro" |
