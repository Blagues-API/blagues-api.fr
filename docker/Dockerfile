FROM node:17.2
WORKDIR /app

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run nuxt:build

ENV NUXT_HOST=0.0.0.0

EXPOSE 3000

CMD npm run nuxt:start
