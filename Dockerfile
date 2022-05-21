FROM node:latest

COPY package.json .
COPY package-lock.json .

RUN npm ci

CMD ["node","index.js"]


