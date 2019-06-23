<template lang="md">
## Docker Part One: How to create an image from scratch and upload to Docker Hub

Docker is great. It'll allow you to run many different apps/services/projects on on machine simultaneously without having the headache of conflicting dependencies/ports etc.

First, let's create a basic Express app and turn that into a Docker Image.

### Step 1 - Install docker.

```
sudo apt-get remove docker docker-engine docker.io containerd runc
```

```
sudo apt-get install apt-transport-https ca-certificates curl gnupg-agent software-properties-common
```

```
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```

```
add-apt-repository "deb [arch=amd64] https://download.docker.com/linux/ubuntu $(lsb_release -cs) stable"
```

```
apt-get update
```

```
apt-get install docker-ce docker-ce-cli containerd.io
```

```
docker run hello-world
```

### Step 2 - Create express app.
```bash
npm init -y && npm i -S express
```
### Step 3 - Open `package.json` and add a start script
```javascript
"scripts": {
  "start": "node server.js"
}
```
### Step 4 - Open `index.js`
```javascript
const app = require('express')();

app.get('/', (req, res) => { res.send('Awwww yis'); });

app.listen(3000, () => console.log('Server running'));
```
### Step 5 - Create Dockerfile
```docker
FROM mhart/alpine-node
WORKDIR /src
COPY package.json .
RUN npm i COPY . .
EXPOSE 3000 CMD ["npm", "start"]
```
_alpine-node is a super tiny linux distro weighing in at 55MB._
### Step 6 - Build the image
```shell
BUILD IMAGE docker build -t IMAGENAME .
```
_HINT: to see images type `docker images`_
### Step 7 - Run the image
```bash
RUN IMAGE docker run -p 3000:3000 -d IMAGENAME
```
_HINT: to stop/ kill this type `docker ps` followed by `docker kil APP_NAME`_
### Step 8 - Upload the image
```docker
docker commit -m "building" -a Ben CONTAINER ID vohzd/express
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
