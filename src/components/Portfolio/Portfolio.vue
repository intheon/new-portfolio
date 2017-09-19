<template>

	<div class="content-area-wrapper">
			<div class="big-triangle-wrapping-mask third-bg" v-bind:style="dynamicTriangleOne"></div>
      <section class="content-area">
	      <h1>Portfolio</h1>
        <section class="portfolio-item">
          <div class="portfolio-wrapping skate" v-bind:style="dynamicTriangleTwo"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/vohzd/skatelocate" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
              <a href="http://vohzd.com/software/skatelocate" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
            </div>
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
          <div class="portfolio-wrapping ed" v-bind:style="dynamicTriangleThree"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/synthy2/ed" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
              <a href="https://intheon.uk/ed" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
            </div>
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
          <div class="portfolio-wrapping springboard" v-bind:style="dynamicTriangleFour"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/synthy2/springboard" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
              <a href="https://intheon.uk/springboard" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
            </div>
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
          <div class="portfolio-wrapping twitter" v-bind:style="dynamicTriangleFive"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/synthy2/twitter-sentimental" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
              <a href="https://intheon.uk/twitter" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
            </div>
            <h2>Semantic Twitter</h2>
            <p>An example of what happens when you mash up web API's</p>
            <p>Asks the user for a string, and uses the Twitter API to retreive that from their DB, then crams it through 'Semantic API' to tell you what the users feeling is.</p>
            <ul>
              <li>Ajax based system which uses the Twitter API, and Semantic UI</li>
              <li>Displays users results as soon as they have been parsed</li>
            </ul>
          </div>
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
	</div>
</template>

<script>

export default {
  data(){
    return {
			numberOne: 99,
      numberTwo: 130,
      numberThree: 7,
      numberFour: 5,
      numberFive: 39,
      numberSix: 0
    }
  },
  computed: {
		dynamicTriangleOne(){
			return {
				"clip-path": `polygon(0% 0%, ${this.numberOne}% 0%, 0% ${this.numberOne}%)`
			}
		},
    dynamicTriangleTwo(){
      return {
        "clip-path": `polygon(${this.numberTwo}% ${this.numberThree}%, ${this.numberThree}% ${this.numberFour}%, ${this.numberFive}% ${this.numberTwo}%)`
      }
    },
    dynamicTriangleThree(){
      return {
        "clip-path": `polygon(${this.numberFour}% ${this.numberOne}%, ${this.numberThree}% ${this.numberSix}%, ${this.numberOne}% ${this.numberFive}%)`
      }
    },
    dynamicTriangleFour(){
      return {
        "clip-path": `polygon(${this.numberFour}% ${this.numberOne}%, ${this.numberSix}% ${this.numberThree}%, ${this.numberTwo}% ${this.numberFive}%)`
      }
    },
    dynamicTriangleFive(){
      return {
        "clip-path": `polygon(${this.numberThree}% ${this.numberOne}%, ${this.numberSix}% ${this.numberThree}%, ${this.numberTwo}% ${this.numberFour}%)`
      }
    }
  },
  methods: {
    animateTriangles(){
      setInterval(() => {
				this.numberOne = Math.floor(Math.random()*(100-97)+97);
        this.numberSix  = Math.floor(Math.random()*(2-1)+1);
      }, 2500);
      setInterval(() => {
        this.numberTwo = Math.floor(Math.random()*(130-117)+117);
        this.numberThree = Math.floor(Math.random()*(9-6)+6);
        this.numberFour = Math.floor(Math.random()*(8-4)+4);
        this.numberFive = Math.floor(Math.random()*(40-38)+38);
      }, 1900);
    }
  },
  mounted(){
    this.animateTriangles()
  }
}

</script>

<style lang="scss">

  .skate {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/skate.png");
    background-size: cover;
  }

  .ed {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/ed.jpg");
    background-size: cover;
  }

  .springboard {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/springboard.png");
    background-size: cover;
  }

  .twitter {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/twitter.png");
    background-size: cover;
  }

  .portfolio-wrapping {
    width: 388px;
    height: 412px;
    z-index: 5;
    position: absolute;
    transition: 1s all;
    transition-timing-function: cubic-bezier;
    right: 3px;

  }

  .portfolio-content {
    z-index: 7;
    width: 100%;

  }
  .portfolio-item {
    margin-bottom: 384px;
  }




</style>
