# Etapa 1: build do Angular
FROM node:22 AS build
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build --prod

# Etapa 2: servidor NGINX
FROM nginx:alpine
COPY --from=build /app/dist/consulta-credito/browser /usr/share/nginx/html/
COPY nginx.conf /etc/nginx/conf.d/default.conf