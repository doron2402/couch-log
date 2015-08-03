FROM node:0.10.39

WORKDIR /var/www/couch-logger-api
ADD . /var/www/couch-logger-api
RUN npm cache clean && npm install

EXPOSE 8080

CMD ["npm", "run", "start-prod"]
