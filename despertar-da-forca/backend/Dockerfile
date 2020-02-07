FROM node:12.14.1

WORKDIR /app

RUN mkdir /src

COPY package.json .
COPY tsconfig.json .
COPY tsconfig.build.json .

RUN npm install

COPY src/ /app/src

EXPOSE 3000

CMD ["npm","run","start"]