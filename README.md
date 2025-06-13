# Consulta Crédito

Este é um projeto Angular para consulta de créditos fiscais, permitindo buscar créditos por número de NFSe ou número de crédito.

## Tecnologias Utilizadas

- [Angular 19](https://angular.io/)
- [Bootstrap 5](https://getbootstrap.com/)
- [RxJS](https://rxjs.dev/)
- TypeScript

## Funcionalidades

- Busca de créditos por número de NFSe
- Busca de créditos por número de crédito
- Exibição dos resultados em tabela
- Integração com API REST (`hostApi` configurado em `src/environments/environment.ts`)

## Estrutura do Projeto

```
src/
  app/
    consulta-credito/
        models/
            credito.model.ts
        services/
            consulta-credito.service.ts
        views/
            consultainicial/
                consulta-credito.component.ts
                consulta-credito.component.html
                consulta-credito.component.scss
    app.component.ts
    app.config.ts
    app.routes.ts
  environments/
    environment.ts
    environment.development.ts
  main.ts
  styles.scss
  index.html
```

## Como Executar

1. Instale as dependências:

   ```sh
   npm install
   ```

2. Inicie o servidor de desenvolvimento:

   ```sh
   npm run start
   ```

3. Acesse o aplicativo em [http://localhost:4200/](http://localhost:4200/).

## Testes

Para rodar os testes unitários:

```sh
npm run test
```

## Configuração de Ambiente

- O endpoint da API pode ser configurado em [`src/environments/environment.ts`](src/environments/environment.ts).

## Scripts Disponíveis

- `npm run start` — Inicia o servidor de desenvolvimento
- `npm run build` — Gera a build de produção
- `npm run test` — Executa os testes unitários

## Observações

- O projeto utiliza Bootstrap via CDN para estilização.
- O Angular CLI é utilizado para gerenciamento e build do projeto.
