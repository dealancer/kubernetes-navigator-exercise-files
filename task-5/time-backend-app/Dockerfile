FROM node:10-alpine
WORKDIR /home/node/app
COPY package.json .
COPY package-lock.json .
COPY app.js .
RUN npm install
CMD [ "node", "app.js" ]
