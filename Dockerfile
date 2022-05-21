FROM node:latest

COPY package.json .
COPY package-lock.json .
OPY index.js .

RUN npm ci

CMD ["node","index.js"]


