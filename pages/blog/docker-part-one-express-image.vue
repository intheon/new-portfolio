<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper">
      <h2 class="second-header">Docker Part One: How to create an image from scratch and upload to Docker Hub</h2>
      <p>Docker is great. It'll allow you to run many different apps/services/projects on on machine simaltaneously without having the headache of conflicting dependencies/ports etc.</p>
      <p>First, let's create a basic Express app and turn that into a Docker Image.</p>
      <ol>
        <li>Download docker + install</li>
        <li>Create express app
          <ul>
            <li>command line: npm init -y</li>
            <li>cmd: npm i -S express</li>
            <li>Open package.json and replace test with "start": "node index.js"</li>
            <li><code>const app = require('express')();

            app.get('/', (req, res) => {
              res.send('Awwww yis');
            });

            app.listen(3000, () => console.log('Server running'));</code></li>
          </ul>
        </li>
        <li>Create Dockerfile HINT: to create, out two `..` after Dockerfile and hit enter, windows will remove the fileextention<ul>
          <li><code>FROM mhart/alpine-node

          WORKDIR /src

          COPY package.json .
          RUN npm i

          COPY . .

          EXPOSE 3000

          CMD ["npm", "start"]</code></li><li>We’ll be using the mhart/alpine-node base image, as these is a super tiny NodeJS instance built on the minimalistic Alpine linux distribution. The output of my build was about 55MB. and it took less than a minute for the initial build. Subsequent builds took about one second =)</li>
        </ul>
        </li>
        <li>BUILD IMAGE <code>docker build -t IMAGENAME.</code></li>
        <li>RUN IMAGE <code>docker run -p 3000:3000 -d IMAGENAME</code>HINT: to stop/ kill this type docker ps followed by docker kil APP_NAME HINT: to see images type docker images HINT: to kill EVERYTHING type docker system prune -a (the -a flag goes nuclear)</li>
        <li>Push to docker hub by committing <code>HINT get CONTAINER ID with docker ps</code></li>
        <li><code>docker commit -m "building" -a Ben CONTAINER ID vohzd/express</code></li>
        <li>Itll now be on the hub</li>

      </ol>
    </div>
  </section>
</template>
