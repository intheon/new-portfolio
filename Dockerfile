FROM mhart/alpine-node:latest

WORKDIR /app

ARG SERVER_ENDPOINT=${SERVER_ENDPOINT}
ENV PORT 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

RUN npm i

COPY . .

RUN npm cache --clean
RUN npm run build

EXPOSE 80

CMD [ "npm", "start" ]
