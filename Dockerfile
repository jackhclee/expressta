FROM node:latest

COPY package.json .
COPY package-lock.json .
COPY index.js .

RUN npm ci

CMD ["node","index.js"]


