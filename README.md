# Desafio Fullsatck TQI Evolution 2022
## Repositório com os arquivos do desafio Fullstack TQI Evolution



Este desafio foi desenvolvido utilizando

- Java
- Spring Boot
- JPA
- React
- Material UI
- MySQL

## Funções Implementadas

- Lista com os livros adicionados em formato de Tabela (Data Grid);
- Lista com as compras dos livros em formato de Tabela (Data Grid);
- Lista com as vendas dos livros em formato de Tabela (Data Grid);
- Formulário para cadastro de livros;
- Formulário para compra de livro;
- Formulário para venda de livro;
- Links para compra e venda de livro específico na lista de livros;
- Os formulários de compra e de venda listam os livros cadastrados em um campo do tipo select;
- O formulário de venda impede a seleção de livros sem estoque;
- O formulário de venda impede o cadastro de vendas com quantidade maior que o estoque do livro;
- O formulário de cadastro de livro exige que o campo de url da imagem seja preenchido com valor do tipo url;
- Os formulários de compra e de venda calculam automaticamente o valor total;
- A lista de livros apresenta a imagem do livro carregada a partir da url;

## Próximos passos

- Possibilidade de edição e exclusão de itens (livros, compras e vendas) - demanda de decisões quanto à integridade dos dados ao serem alterados;
- Possibilidade de selção de mais de um livro na compra e na venda;
- Testes Unitários;


## Banco de Dados

A aplicação faz uso de banco de dados MySQL, podendo este ser rodado utilizando XAMPP ou equivalente.
O repositório conta com um arquivo SQL com dados para testes, podendo este ser importado no banco de dados antes de rodar a aplicação.
