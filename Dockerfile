FROM node:12

WORKDIR /app

COPY . .

RUN yarn

EXPOSE 5000

CMD ["npm", "run", "dev"]