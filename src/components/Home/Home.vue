<template>
	<div>

    <div class="content-area-wrapper">

			<!-- anchor #1 -->
			<div id="anchor1">
	      <section class="content-area">
	        <h1>Howdy!</h1>
	        <p>I'm Ben, developer of internets.</p>
	        <p>I focus on building web-based apps, mostly centered around dashboards and tools.</p>
	        <p>Building cross-platform is one of my strengths, as i do that in both my day job and for projects.</p>
	        <p>Take a look at my portfolio to see some of my work, or drop me a line and I'll get right back to you!<span v-bind:style="blink">_</span></p>
	      </section>
			</div>

      <section class="content-area">
				<!-- anchor #2 -->
				<div id="anchor2">
	        <h1>Portfolio</h1>
	        <section class="portfolio-item">
	          <div class="portfolio-wrapping skate" v-bind:style="dynamicTriangleTwo"></div>
	          <div class="portfolio-content">

	            <div class="inline-links">
	              <a href="https://github.com/synthy2/skateLocate-angular/tree/winter-2016-update" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
	              <a href="https://intheon.uk/skatelocate" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
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
				</div>

				<!-- anchor #3 -->
				<div id="anchor3">
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
				</div>

				<!-- anchor #4 -->
				<div id="anchor4">
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
			  </div>

				<!-- anchor #5 -->
				<div id="anchor5">
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
				</div>

				<!-- anchor #6 -->
				<div id="anchor6">
	        <section class="portfolio-item">
	          <h2>Grammatical Numbers</h2>
	          <p>A pretty modern website as far as the technology is concerned.</p>
	          <p>Add, view, and filter skateparks in your area of interest</p>
	          <ul>
	            <li>Ajax based system which uses the Twitter API, and Semantic UI</li>
	            <li>Displays users results as soon as they have been parsed</li>
	          </ul>
	        </section>
				</div>

				<!-- anchor #7 -->
				<div id="anchor7">
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
				</div>
      </section>
</div>

	</div>
</template>

<script>

	export default {
    data() {
      return {
        numberOne: 99,
        numberTwo: 130,
        numberThree: 7,
        numberFour: 5,
        numberFive: 39,
        numberSix: 0,
        display: "none",
				toggleScrollingAnchorMsgOn: "Anchored scroll",
				toggleScrollingAnchorMsgOff: "Smoothed scroll",
				isAnchoredScrolling: false
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
    name: "app",
		methods: {
			toggleScrollingAnchorState(){
				this.isAnchoredScrolling = !this.isAnchoredScrolling;
			}
		},
    mounted(){
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
      setInterval(() => {
          if (this.display == "inline") this.display = "none";
          else this.display = "inline";
      }, 800);
    }
	}
</script>

<style lang="scss">

$background: #ffffff;
$fontColour: #575c64;
$masterFont: "Inconsolata", monospace;
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
    margin-bottom: 512px;
    padding-right: 380px;
  }

  .inline-links {
    float: left;
    position: absolute;
    margin-left: 384px;
    margin-top: -8px;
    font-size: 20px;
  }

  .link {
    display: inline;
    background: rgba(0,0,0,0.1);
    margin-right: 100px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    float: left;
    border-radius: 50%;
    text-align: center;
  }

  .inline-links a {
    color: $fontColour;
    text-decoration: none;
  }

  .link:hover {
    opacity: 0.7;
    cursor: pointer;
  }

  .large {
    font-size: 48px;
  }

  .small {
    font-size: 42px;
  }



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

	.snap-scrolling-toggle-link {
		position: fixed;
		right: 0;
		top: 0;
		font-size: 24px;
		background: none;
		outline: none;
		border: none;
		margin: 16px;
		margin-right: 64px;
		z-index: 6000;
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

	.tooltip {
	  display: none;
	  opacity: 0;
	  transition: opacity .15s;
	  pointer-events: none;
	  padding: 4px;
	  z-index: 10000;

	  .tooltip-content {
	    background: black;
	    color: white;
	    border-radius: 8px;
	    padding: 8px;
			font-size: 16px;
	  }

	  &.tooltip-open-transitionend {
	    display: block;
	  }

	  &.tooltip-after-open {
	    opacity: 1;
	  }
	}


</style>
