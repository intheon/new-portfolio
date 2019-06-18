<template lang="md">
## Docker Part Three: How to deploy on a fresh VPS running nginx

We're going to get this new docker image live on the web

### Step 1 - SSH into your machine.
### Step 2 - Create express app.
```
> npm init -y
> npm i -S express
```
### Step 3 - Open `package.json` and add a start script
``` javascript
  "scripts": {
    "start": "node server.js"
  }
```
### Step 4 - Open `index.js`
``` javascript
  const app = require('express')();

  app.get('/', (req, res) => { res.send('Awwww yis'); });

  app.listen(3000, () => console.log('Server running'));
```
### Step 5 - Create Dockerfile
``` docker
  FROM mhart/alpine-node

  WORKDIR /src

  COPY package.json .

  RUN npm i COPY . .

  EXPOSE 3000 CMD ["npm", "start"]
```
_alpine-node is a super tiny linux distro weighing in at 55MB._
### Step 6 - Build the image
```
 > BUILD IMAGE docker build -t IMAGENAME .
```
_HINT: to see images type `docker images`_
### Step 7 - Run the image
```
> RUN IMAGE docker run -p 3000:3000 -d IMAGENAME
```
_HINT: to stop/ kill this type `docker ps` followed by `docker kil APP_NAME`_
### Step 8 - Upload the image
```
 > docker commit -m "building" -a Ben CONTAINER ID vohzd/express`
```
### Step 9 - Congrats!

_HINT: to kill EVERYTHING type `docker system prune -a` (the `-a` flag goes nuclear)_

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
</style>
