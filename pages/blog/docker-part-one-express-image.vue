<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper">
<vue-markdown >
  #### Docker Part One: How to create an image from scratch and upload to Docker Hub

  Docker is great. It'll allow you to run many different apps/services/projects on on machine simaltaneously without having the headache of conflicting dependencies/ports etc.

  First, let's create a basic Express app and turn that into a Docker Image.

  ### Step 1 - Download docker + install
  ### Step 2 - Create express app.
  ```
  > npm init -y
  > npm i -S express
  ```
  ### Step 3 - Open `package.json` and replace test with SOMETHING HERE
  ### Step 4 - Open `index.js`

  ``` javascript
    const app = require('express')();

    app.get('/', (req, res) => { res.send('Awwww yis'); });

    app.listen(3000, () => console.log('Server running'));
  ```
  ### Step 5 - Create Dockerfile HINT: to create, out two `..` after Dockerfile and hit enter, windows will remove the file extention
  ``` docker
    FROM mhart/alpine-node

    WORKDIR /src

    COPY package.json .

    RUN npm i COPY . .

    EXPOSE 3000 CMD ["npm", "start"]
  ```




  We’ll be using the mhart/alpine-node base image, as these is a super tiny NodeJS instance built on the minimalistic Alpine linux distribution. The output of my build was about 55MB. and it took less than a minute for the initial build. Subsequent builds took about one second =)


  BUILD IMAGE docker build -t IMAGENAME .

  RUN IMAGE docker run -p 3000:3000 -d IMAGENAME

  HINT: to stop/ kill this type docker ps followed by docker kil APP_NAME
  HINT: to see images type docker images
  HINT: to kill EVERYTHING type docker system prune -a (the -a flag goes nuclear) Push to docker hub by committing
  HINT get CONTAINER ID with docker ps


  `docker commit -m "building" -a Ben CONTAINER ID vohzd/express`

  Itll now be on the hub

</vue-markdown>



    </div>
  </section>
</template>

<script>
  import VueMarkdown from 'vue-markdown';
  import Prism from 'prismjs';


  export default {
    components: {
      VueMarkdown
    },
    mounted(){
      Prism.highlightAll()
    }
  }

</script>
