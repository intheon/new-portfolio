# Dockerfile
FROM node:14.15.3

#args
ARG SERVER_ENDPOINT=${SERVER_ENDPOINT}

# create destination directory
RUN mkdir -p /usr/src/nuxt-app
WORKDIR /usr/src/nuxt-app

# copy the app, note .dockerignore
COPY . /usr/src/nuxt-app/
RUN npm install
RUN npm run build

EXPOSE 80

ENV NUXT_HOST=0.0.0.0
ENV NUXT_PORT=80

CMD [ "npm", "run", "start" ]
