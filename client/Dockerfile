FROM node:14.16.1-alpine as build-step
RUN mkdir /app
WORKDIR /app
COPY package.json /app
RUN npm install
COPY . /app
ENV API_URL =$API_URL
CMD npm start