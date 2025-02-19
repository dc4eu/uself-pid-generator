# Etapa 1: Construcción de la aplicación Angular
FROM node:22 AS build
WORKDIR /app
COPY package*.json ./

RUN npm install
COPY . .
RUN npm run build --prod

# Etapa 2: Configuración del servidor web
FROM nginx:alpine
COPY --from=build /app/dist/uself-pid-generator /usr/share/nginx/html
COPY env.template.js /usr/share/nginx/html/assets/env.template.js


CMD ["/bin/sh",  "-c",  "envsubst < /usr/share/nginx/html/assets/env.template.js > /usr/share/nginx/html/assets/env.js && exec nginx -g 'daemon off;'"]