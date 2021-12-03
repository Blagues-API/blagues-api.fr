FROM node:17.2
WORKDIR /app

COPY package.json yarn.lock ./

RUN yarn install --frozen-lockfile

COPY . .

RUN yarn nuxt:build

EXPOSE 3000

CMD yarn nuxt:start
