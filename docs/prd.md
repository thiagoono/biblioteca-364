# 📄 Product Requirements Document (PRD) - Biblioteca 364

## 1. Visão Geral e Objetivo

A leitura é uma atividade que pode ser compartilhada entre amigos, porém, em grupos que possuem diversos livros, pode ser difícil saber quais obras estão disponíveis, quem possui determinado livro e com quem ele está emprestado.

Atualmente, o controle desses empréstimos pode ser feito de maneira informal, por meio de conversas, mensagens ou anotações, o que pode dificultar a organização e fazer com que informações sobre os livros sejam perdidas.

Diante desse cenário, o projeto **Biblioteca 364** tem como objetivo criar uma plataforma para organizar os livros pertencentes aos integrantes de um grupo e facilitar o compartilhamento dessas obras.

Cada usuário poderá cadastrar os livros que possui, formando um catálogo coletivo. Outros integrantes poderão pesquisar esse catálogo, identificar o proprietário de um livro e solicitar seu empréstimo. O proprietário terá controle sobre as solicitações, podendo aceitá-las ou recusá-las.

O projeto foi inicialmente pensado para um pequeno grupo de amigos, mas será desenvolvido de forma que possa ser utilizado por qualquer grupo de pessoas que compartilhe o interesse por livros.

---

## 2. Atores do Sistema

* **Visitante:** Usuário que ainda não possui uma conta e pode acessar as páginas públicas do sistema e realizar seu cadastro.
* **Usuário:** Pessoa que possui uma conta registrada e pode cadastrar seus livros, consultar o catálogo coletivo, solicitar empréstimos e gerenciar as solicitações relacionadas aos seus livros.
* **Proprietário:** Usuário responsável por um determinado livro cadastrado no sistema. Pode aceitar ou recusar solicitações de empréstimo de seus livros.

> Um mesmo usuário pode exercer simultaneamente os papéis de **Usuário** e **Proprietário**, dependendo da ação realizada no sistema.

---

## 3. Histórias de Usuário e Escopo

Abaixo estão as funcionalidades descritas sob a perspectiva dos usuários finais do Biblioteca 364.


### 🔐 Épico 1: Autenticação

* **US01 - Login:** Como um usuário cadastrado, quero inserir minhas credenciais para acessar minha conta no Biblioteca 364.

  * *Critérios de Aceitação:* O sistema deve validar as credenciais informadas antes de permitir o acesso à conta.

* **US02 - Controle de acesso:** Como um usuário, quero que as funcionalidades privadas estejam disponíveis somente após realizar o login, para manter meus dados protegidos.

---


### 📚 Épico 2: Biblioteca e Livros

* **US03 - Cadastro de livro:** Como um usuário, quero pesquisar um livro através da Google Books API e adicioná-lo à minha biblioteca.

  * *Critérios de Aceitação:* O sistema deve permitir pesquisar livros através das informações disponíveis na Google Books API e selecionar um resultado para cadastrá-lo como pertencente ao usuário.

* **US04 - Identificação do livro:** Como um usuário, quero que o sistema associe o livro cadastrado ao seu identificador da Google Books API, para que suas informações bibliográficas possam ser recuperadas quando necessário.

* **US05 - Listagem de livros:** Como um usuário, quero visualizar todos os livros cadastrados no grupo, para conhecer as obras disponíveis entre os integrantes.

* **US06 - Pesquisa de livros:** Como um usuário, quero pesquisar livros cadastrados no sistema, para encontrar rapidamente uma obra específica.

* **US07 - Visualização das informações:** Como um usuário, quero visualizar as informações de um livro cadastrado, para conhecer melhor a obra antes de solicitar seu empréstimo.

---

### 🤝 Épico 3: Empréstimos

* **US08 - Solicitação de empréstimo:** Como um usuário, quero solicitar o empréstimo de um livro disponível, para poder lê-lo.

  * *Critérios de Aceitação:* O usuário não deve conseguir solicitar o próprio livro e livros que já estejam emprestados não devem permitir novas solicitações.

* **US09 - Visualização de solicitação:** Como proprietário, quero visualizar as solicitações de empréstimo dos meus livros, para decidir quais pedidos desejo aceitar.

* **US10 - Aceitação de empréstimo:** Como proprietário, quero aceitar uma solicitação de empréstimo, para permitir que outro usuário pegue meu livro.

  * *Critérios de Aceitação:* Após a aprovação, o empréstimo deve assumir o status **Emprestado**.

* **US11 - Recusa de empréstimo:** Como proprietário, quero recusar uma solicitação de empréstimo, para impedir que o livro seja emprestado.

  * *Critérios de Aceitação:* Após a recusa, o livro deve permanecer disponível para futuras solicitações.

* **US12 - Visualização de livros emprestados:** Como um usuário, quero visualizar os livros que estão atualmente emprestados, para saber quais obras estão fora da minha biblioteca.

* **US13 - Identificação do responsável pelo empréstimo:** Como proprietário, quero saber qual usuário está com meu livro emprestado, para saber quem é o responsável pela devolução.

* **US14 - Devolução de livro:** Como proprietário, quero registrar a devolução de um livro emprestado, para disponibilizá-lo novamente para outros usuários.

  * *Critérios de Aceitação:* Após a devolução, o livro deve voltar ao estado **Disponível**.

---

### 🔄 Épico 4: Status dos Livros

* **US15 - Livro disponível:** Como um usuário, quero identificar quais livros estão disponíveis, para saber quais posso solicitar.

* **US16 - Livro solicitado:** Como proprietário, quero saber quando meu livro possui uma solicitação pendente, para poder decidir se aceito ou recuso o empréstimo.

* **US17 - Livro emprestado:** Como usuário, quero identificar quais livros estão emprestados, para saber que eles não estão disponíveis no momento.
