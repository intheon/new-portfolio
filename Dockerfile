FROM node:alpine

WORKDIR /src

ARG SERVER_ENDPOINT=${SERVER_ENDPOINT}
ENV PORT 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

COPY . .
RUN npm i
RUN npm run build

EXPOSE 80

CMD [ "npm", "run", "start" ]
