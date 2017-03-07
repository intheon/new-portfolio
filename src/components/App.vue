<template>
	<div>

    <!--<div class="background-triangle-left" v-bind:style="dynamicTriangleTwo"></div>-->
    <!--<div class="background-triangle-right"></div>-->


    <div class="content-area-wrapper">

      <div class="big-triangle-wrapping-mask" v-bind:style="dynamicTriangleOne"></div>

      <section class="content-area first">
        <h1>Howdy!</h1>
        <p>I'm Ben, developer of internets.</p>
        <p>I focus on building web-based apps, mostly centered around dashboards and tools.</p>
        <p>Building cross-platform is one of my strengths, as i do that in both my day job and for projects.</p>
        <p>Take a look at my portfolio to see some of my work, or drop me a line and I'll get right back to you!<span v-bind:style="blink">_</span></p>
      </section>

      <section class="content-area">
        <h1>Portfolio</h1>

        <section class="portfolio-item">

          <div class="portfolio-wrapping skate" v-bind:style="dynamicTriangleTwo"></div>

          <div class="portfolio-content">
            <h2>Skate Locate</h2>
            <p>A pretty modern website as far as the technology is concerned.</p>
            <p>Add, view, and filter skateparks in your area of interest</p>
            <p>Built with the MEAN stack, bundled with JSPM, Cloudinary for images, Leaflet/Mapbox for the map engine.</p>
            <ul>
              <li>100% Javascript on front and back end.</li>
              <li>MongoDB for data, and Angular.js for the databinding and keeping the UI snappy.</li>
              <li>Add skateparks, filter by tag or string, see most recently added and voted.</li>
              <li>Deployed to Heroku, and live for all!</li>
            </ul>
          </div>

        </section>

        <section class="portfolio-item">

          <div class="portfolio-wrapping ed"></div>

          <div class="portfolio-content">

            <h2>Ed Hall Audio</h2>
            <p>Created this for a buddy of mine who runs his own recording studio and mixing service.</p>
            <p>Ed works crazy hard so if you're a musician who needs some recording help give him a shout!</p>
            <ul>
              <li>Responsive Design</li>
              <li>Instagram and Soundcloud feeds</li>
              <li>Contact form</li>
              <li>Lightweight, uses only jQuery and Semantic UI</li>
            </ul>

          </div>

        </section>

        <section class="portfolio-item">

          <div class="portfolio-wrapping springboard"></div>

          <div class="portfolio-content">

            <h2>Springboard</h2>
            <p>Google used to offer a personalised dashboard called iGoogle but discontinued it, so I made my own.</p>
            <p>Most complex piece of software I've written from scratch, allows you to have persistent modules that each have their own unique state. You can view your emails, todo's, keep track of your spending etc!</p>
            <ul>
              <li>REST API Backend to interact with database</li>
              <li>Multi-user system with states for each widget</li>
              <li>Heavy use of JavaScript and PHP for some wizardry</li>
              <li>Semantic UI to make it look pretty</li>
            </ul>

          </div>

        </section>


        <section class="portfolio-item">
          <h2>Semantic Twitter</h2>
          <p>An example of what happens when you mash up web API's</p>
          <p>Asks the user for a string, and uses the Twitter API to retreive that from their DB, then crams it through 'Semantic API' to tell you what the users feeling is.</p>
          <ul>
            <li>Ajax based system which uses the Twitter API, and Semantic UI</li>
            <li>Displays users results as soon as they have been parsed</li>
          </ul>
        </section>

        <section class="portfolio-item">
          <h2>Grammatical Numbers</h2>
          <p>A pretty modern website as far as the technology is concerned.</p>
          <p>Add, view, and filter skateparks in your area of interest</p>
          <ul>
            <li>Ajax based system which uses the Twitter API, and Semantic UI</li>
            <li>Displays users results as soon as they have been parsed</li>
          </ul>
        </section>

        <section class="portfolio-item">
          <h2>Promo Codes Generator</h2>
          <p>I needed to generate promo codes for a client so they could distribute out free log in's for their magazine.</p>
          <p>Rather than user excel, i made this service as I no doubt will need it again</p>
          <ul>
            <li>Random code generator using chance.js</li>
            <li>Allows selection of quantity of codes</li>
            <li>Some wizardry to allow the user to download to a csv</li>
          </ul>
        </section>

      </section>
      <section class="content-area">
        <h1>About</h1>
        <p>I've been doing web development stuff for a good 10/11 years now.</p>
        <p>Professionally, I work a digital publishers called YUDU Media and been there for years. My Technical skills include solid understanding of HTML, CSS, JavaScript, PHP, and Graphic Design. Or to more specifically break it down... HTML4/5, CSS2/3, Sass, EcmaScript 5 + 6 (Harmony), Angular.js, Typescript, PHP5, MySQL, and mashing up Web APIs like those provided by Google/Twitter etc.</p>
        <p>To date I've built and submitted iOS/Android/Web apps for small names like the Financial Times, KPMG, Mixmag, the FA to name a few.</p>
        <p>Currently, I work as an Account Manager advising on the best strategy and way forward for clients. I currently look after Time Out, Screwfix, and just shy of 100 others. What I reeeeaaaally want to do is more freelance development. So hit me up if you've got something you want to create!</p>
      </section>
    </div>

	</div>
</template>

<script>
	import { mapGetters }	from "vuex";

	export default {
    data() {
      return {
        numberOne: 99,
        numberTwo: 130,
        numberThree: 7,
        numberFour: 5,
        numberFive: 39,
        display: "none",
      }
    },
    computed: {
      blink(){
        return {
          "display": this.display
        }
      },
      dynamicTriangleOne(){
        return {
          "clip-path": `polygon(0% 0%, ${this.numberOne}% 0%, 0% ${this.numberOne}%)`
        }
      },
      dynamicTriangleTwo(){
        return {
          "clip-path": `polygon(${this.numberTwo}% 0%, ${this.numberFour}% ${this.numberThree}%, ${this.numberFive}% ${this.numberOne}%)`
        }
      }
    },
    name: "app",
    mounted(){
      setInterval(() => {
        this.numberOne = Math.floor(Math.random()*(100-97)+97);
      }, 2500);
      setInterval(() => {
        this.numberTwo = Math.floor(Math.random()*(130-117)+117);
        this.numberThree = Math.floor(Math.random()*(9-6)+6);
        this.numberFour = Math.floor(Math.random()*(8-4)+4);
        this.numberFive = Math.floor(Math.random()*(40-38)+38);
      }, 1900);
      setInterval(() => {
          if (this.display == "inline") this.display = "none";
          else this.display = "inline";
      }, 1400);
    }
	}
</script>

<style lang="scss">

  $background: #ffffff;
  $fontColour: #575c64;
  $masterFont: "Inconsolata", monospace;


  html, body {
    margin: 0;
    padding: 0;
    background: rgba(0,0,0,0.3);
  }

  body {
    background: $background;
    color: $fontColour;
    font-family: $masterFont;
    font-size: 24px;
  }

  .blink {
    font-size: 12px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 64px;
    font-size: 80px;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 48px;
  }

  h1, h2 {
    letter-spacing: 4px;
  }
  /*
    .background-triangle-left {
      width: 1200px;
      height: 1200px;
      display: inline-block;
      float: left;
      z-index: 100;
      background: white;
      position: fixed;
      top: -1300px;
      left: -900px;
      transform: rotate(-45deg);
    }

    */

  .background-triangle-right {
    width: 1700px;
    height: 1100px;
    display: inline-block;
    float: right;
    z-index: 100;
    background: white;
    position: fixed;
    transform: rotate(40deg);
    top: -600px;
    right: -1000px;
  }

  .nav-item-link:nth-child(even) {
    background: purple;
  }

  .nav-item-link:nth-child(even) {
    background: purple;
  }

  .portfolio-wrapping {
    width: 700px;
    height: 700px;
    z-index: 5;
    position: absolute;
    transition: 1s all;
  }

  .portfolio-content {
    z-index: 7;
    margin-bottom: 512px;
    padding-right: 380px;
  }

  .big-triangle-wrapping-mask {
    width: 900px;
    height: 1100px;
    float: left;
    shape-outside: polygon(0% 0%, 100% 0%, 0% 120%);
    margin-right: 256px;
    background: url("../assets/img/bg.jpg");
    background-size: cover;
    transition: 1s all;
  }

  .skate {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../assets/img/skate.png");
    background-size: cover;
    right: 150px;
  }

  .ed {
    clip-path: polygon(50% 0%, 25% 90%, 110% 40%);
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../assets/img/ed.jpg");
    background-size: cover;
    right: 150px;
  }

  .springboard {
    clip-path: polygon(130% 0%, 4% 10%, 39% 80%);
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../assets/img/ed.jpg");
    background-size: cover;
    right: 60px;
  }

  .content-area-wrapper {
    float: left;
    z-index: 4;
    background: white;
  }

  .content-area {
    font-size: 2em;
    margin-left: 20%;
    margin-right: 30%;
    margin-bottom: 30%;
  }

  .first {
    margin-top: 12%;
  }

  .portfolio-item {
    margin-bottom: 512px;
  }

  p, ul {
    font-size: 24px;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    margin-top: 128px;
  }

  li {
    list-style-type: circle;
    margin-bottom: 20px;
    font-size: 16px;
  }


</style>
