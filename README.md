# MarlinDesafio

O projeto foi gerado com [Angular CLI](https://github.com/angular/angular-cli) versão 10.2.0.

## Início do projeto e instalação das dependências

`npm install`

`ng serve`

O projeto será iniciado na porta 4200.

# Funcionalidades

O projeto inicia na página principal.

O cabeçalho possui links para melhor navegação.

Ao clicar em **Lista de Notícias** no cabeçalho, o projeto consume a api `https://jsonplaceholder.typicode.com/posts`, utilizando o método GET, e mostra cada _notícia_ em um card diferente.

Ao clicar no link **Ler mais** de alguma notícia, uma tela de detalhamento é mostrada com as informações dessa notícia em específico.

Clicando em **Nova Notícia** no cabeçalho, uma tela com um formulário é mostrada. Ao preencher o formulário com as informações e clicar no botão **Confirmar**, o sistema manda um alerta para o usuário com as informações inseridas. É criada, também, uma tag com os valores em forma json e um console.log com a resposta da requisição *Post* também é exibido.

Responsividade foi implantada.

## Rotas

'' - Página principal

'/list' - Listagem das notícias

'/form' - Inserir nova notícia

'detail/:id' - Detalhar uma notícia específica

## Try Me

Clique [aqui](https://desafio-marlin.vercel.app/) e confira uma versão do projeto em produção
