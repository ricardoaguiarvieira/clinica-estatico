# Portal Administrativo

##### Portal serviços modernizado para atender às necessidades dos usuários, provendo a eles uma experiência mais ágil e agradável.

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)
Este projeto foi gerado com [Angular CLI] (https://github.com/angular/angular-cli) versão 12.1.1.

## Servidor de desenvolvimento

Execute `npm start` para um servidor de desenvolvimento. Navegue até `http://localhost:4200/`.
O aplicativo será recarregado automaticamente se você alterar qualquer um dos arquivos de origem.
Url de Exemplo: http://localhost:4200/servicos/portal-administrativo

Execute `ng g component-name` para gerar um novo componente. Você também pode usar `ng g diretiva | pipe | service | class | guard | interface | enum | module` para gerar o que for preciso.

## Build

Execute `npm run build` para construir o projeto seguindo configurações existentes.

## Executando testes unitários

Execute `npm test` para executar os testes unitários via [Karma] (https://karma-runner.github.io), seguindo configurações do projeto.

## Executando testes de ponta a ponta

Execute `ng e2e` para executar os testes ponta a ponta através de uma plataforma de sua escolha. Para usar este comando, você precisa primeiro adicionar um pacote que implemente recursos de teste ponta a ponta.

## Instalação

Detran Digital requer [Node.js](https://nodejs.org/) v14+ para ser executado.

Instale as dependências e devDependencies e inicie o servidor.

```sh
cd portal-administrativo
npm i
npm start
```

## Demais Informações

Temos um colaborador, `Max Salvado Pessoa`, que estará à frente da criação das telas HTML/CSS, seguindo o protótipo.
Temos tbm os colaboradores, `Thiago Leite`, `Francisco Ricardo` e `Anilton Arleandro`, que estarão a frente da arquitetura de pastas do projeto, além de tirar dúvidas sobre implementação da lógica de negócio do DETRAN.

Usuário e senha para entrar na VPN e tbm em todos os links do DETRAN já foram enviados para todos vcs. Caso não tenham recebido favor nos contactar.

#### URL Projeto de IMPLEMENTACAO - FRONTEND

https://gitlab.detran.df.gov.br/frontend/portal-administrativo

#### URL do Prototipo

https://marvelapp.com/prototype/690166a/screen/82202795

> Obs. 1: Criar branch `"feature/nome-funcionalidade"` com código da branch DEVELOP.
> Obs. 2: Realizar toda a implementação, `COM TESTES UNITÁRIOS (cobertura de 70%)`
> Obs. 3: Todos os serviços a serem consumidos para implementação das funcionalidades encontram-se disponíveis na classe `"src\app\shared\service\portal.service.ts"`, bastando apenas o Dev importar esse serviço no construtor do componente em implementação.
> Obs. 4: `Sempre que forem realizar comits, rodem ao menos o lint. Estamos tendo problemas de lint nos commits realizados. É de responsabilidade do colaborador corrigir erros e warnnings do lint na funcionalidade em implementação.` Ao final do projeto não teremos nenhum erro e warnning se trabalharmos em equipe.
