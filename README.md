# Consumo de APIs com JavaScript

Este repositório contém uma página HTML, JavaScript e CSS que faz parte de um trabalho/exercício do 3º semestre do curso de Tecnologia em Análise e Desenvolvimento de Sistemas (TADS) da disciplina de Desenvolvimento de Interfaces e Tecnologias (DIT). O objetivo principal é demonstrar o consumo de APIs utilizando JavaScript, abordando conceitos como fetch, Promises, tratamento de erros e manipulação de DOM.

## Descrição

A página implementada está dividida em seções que abordam diferentes tipos de consumo de APIs, utilizando técnicas modernas de desenvolvimento web. Abaixo está uma descrição detalhada de cada parte do trabalho:

### Seção 1: Consultas à BrasilAPI

Nesta seção, foram realizadas consultas à [BrasilAPI](https://brasilapi.com.br/) (exceto a API dos correios) para fornecer informações úteis ao usuário. As consultas foram divididas em dois tipos:

- **Consultas via Programação**: A página realiza automaticamente duas consultas à API e exibe os resultados formatados na tela. Os dados são apresentados de maneira clara, com uma explicação para o usuário entender o que está sendo exibido.
  
- **Consultas via Formulário**: O usuário pode fazer consultas personalizadas fornecendo informações por meio de um formulário. Ao submeter as informações, a página faz uma requisição à API e exibe os resultados na tela.

### Seção 2: Manipulação de Promises com Múltiplas APIs

Nesta seção, são demonstradas duas formas de manipular múltiplas APIs usando Promises:

- **Promise.race**: Um botão permite ao usuário acessar três APIs externas simultaneamente. A primeira resposta (seja ela resolvida ou rejeitada) é exibida na tela.

- **Promise.all**: Outro botão permite acessar três APIs externas ao mesmo tempo. A resposta combinada das três requisições é exibida, ou uma mensagem de erro se alguma das promessas for rejeitada.

### Funcionalidades Extras

- **Limpeza de Respostas**: Cada seção tem um ícone de lixeira ao lado do título que permite ao usuário limpar os resultados exibidos na tela. Esse botão é individual para cada seção, garantindo que a limpeza afete apenas a parte correspondente.

- **Responsividade**: A página foi construída de forma responsiva, adaptando-se a diferentes tamanhos de tela.

- **Tratamento de Erros**: O código implementado inclui mecanismos para tratamento de erros, garantindo que a página seja robusta mesmo diante de falhas nas requisições às APIs.

## Deploy

A aplicação pode ser visualizada online através do seguinte link:

[**Clique aqui para acessar a aplicação**](https://gabriel-fstk.github.io/trab-api-dit/)

## Como Utilizar

1. Clone o repositório para sua máquina local:
    ```bash
    git clone https://github.com/gabriel-fstl/trab-api-dit.git
    ```

2. Abra o arquivo `index.html` em seu navegador preferido.

3. Interaja com as diferentes seções para ver o funcionamento das consultas às APIs.

## Tecnologias Utilizadas

- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização da página, garantindo uma interface agradável e responsiva.
- **JavaScript (ES6+)**: Manipulação de DOM, requisições fetch, Promises, tratamento de erros e mais.

## Contribuições

Este projeto é parte de um exercício acadêmico, mas sinta-se à vontade para sugerir melhorias ou discutir problemas através de issues ou pull requests.

## Contato

Para mais informações, você pode entrar em contato:

- **Nome do Autor**: [Gabriel Garcia C. Soares]
- **Email**: [gabriel.soares@aluno.riogrande.ifrs.edu.br]
- **GitHub (IFRS)**: [https://github.com/gabriel-fstk](https://github.com/gabriel-fstk)
- **GitHub (Pessoal)**: [https://github.com/gsoaresz](https://github.com/gsoaresz)

## Licença

Este projeto está licenciado sob os termos da MIT License. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.
