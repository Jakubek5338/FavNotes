FROM node:16

WORKDIR /src

COPY 'package.json' ./

RUN npm install

RUN npm install -g nodemon

RUN pkill -f node

COPY . .

CMD ["nodemon", "index.js"]
