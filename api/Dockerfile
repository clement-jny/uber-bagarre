FROM node:22.13.0-alpine AS base

WORKDIR /api_nestjs

COPY package*.json ./

RUN npm ci

COPY . ./

# RUN npm run build
EXPOSE 3000

CMD [ "npm", "run", "start:dev" ]
