FROM mhart/alpine-node

WORKDIR /src

COPY package.json .

ARG SERVER_ENDPOINT=${SERVER_ENDPOINT}
RUN npm install
COPY . .

ENV PORT 80
ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

RUN npm run build
EXPOSE 80

CMD [ "npm", "run", "start" ]
