# Consulta Crédito Angular

Este projeto é uma aplicação Angular para consulta de créditos fiscais, permitindo buscar créditos por número de NFSe ou número de crédito.

## Tecnologias Utilizadas

- Angular
- TypeScript
- Bootstrap
- NGINX (para produção via Docker)

## Como Executar Localmente

1. Instale as dependências:
   ```sh
   npm install
   ```

2. Inicie o servidor de desenvolvimento:
   ```sh
   npm start
   ```
   Acesse em [http://localhost:4200](http://localhost:4200).

## Como Executar com Docker

1. Certifique-se de ter o Docker instalado.
2. Construa a imagem:
   ```sh
   docker build -t consulta-credito-angular .
   ```
3. Rode o container:
   ```sh
   docker run -p 8080:80 consulta-credito-angular
   ```
   Acesse em [http://localhost:8080](http://localhost:8080).

## Estrutura do Projeto

```
consulta-credito-angular/
│
├── src/
│   ├── app/
│   └── environments/
├── Dockerfile
├── nginx.conf
├── package.json
├── README.md
└── ...
```

## Configuração

- O endpoint da API pode ser ajustado em `src/environments/environment.ts`.

## Scripts Úteis

- `npm start` — inicia o servidor de desenvolvimento Angular
- `npm run build` — gera a build de produção
- `npm test` — executa os testes unitários

## Observações

- O projeto utiliza Bootstrap via CDN para estilização.
- Para produção, os arquivos estáticos são servidos via NGINX em container Docker.
