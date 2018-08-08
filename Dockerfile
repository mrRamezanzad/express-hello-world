FROM node:8

ENV APP_PATH /opt/app

RUN mkdir -p $APP_PATH

WORKDIR $APP_PATH

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 4567

CMD ["npm", "start", "--host", "0.0.0.0"]
