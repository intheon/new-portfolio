<template>

	<div class="content-area-wrapper">
		<div class="top-left-image">
			<img src="../../assets/img/portfolio.png">
		</div>
      <section class="content-area left-pad">
	      <h1>Portfolio</h1>
        <section class="portfolio-item">
          <div class="portfolio-wrapping skate" v-bind:style="dynamicTriangleTwo"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/vohzd/skatelocate" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
              <a href="https://vohzd.com/skatelocate" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
            </div>
						<div class="count">1</div>
            <h2>Skate Locate</h2>
            <p>A pretty modern website as far as the technology is concerned.</p>
            <p>Add, view, and filter skateparks in your area of interest.</p>
            <p>Built with VueJS and mostly in ES6, Firebase on the backend, Cloudinary for images, Leaflet/Mapbox for the map engine.</p>
            <ul>
              <li>100% Javascript on front and back end.</li>
              <li>Firebase for data storage and websocket binding</li>
							<li>VueJs which is an amazing library. So much quicker than React!</li>
              <li>Add skateparks, filter by tag or string, see most recently added and voted.</li>
            </ul>
          </div>
        </section>
				<section class="portfolio-item">
					<div class="portfolio-wrapping skate" v-bind:style="dynamicTriangleTwo"></div>
					<div class="portfolio-content">
						<div class="inline-links">
							<a href="https://badluckcollective.co.uk" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
						</div>
						<div class="count">2</div>
						<h2>Bad Luck Collective</h2>
						<p>A boutique marketplace.</p>
						<p>Built to allow small vendors sell their stuff with minimal hassle.</p>
						<ul>
							<li>Custom Wordpress plugin.</li>
							<li>Auto builds a mini-Wordpress site when the site owner greenlights a seller.</li>
							<li>Deployed over SSL onto a traditional Apache/PHP setup.</li>
						</ul>
					</div>
				</section>
				<section class="portfolio-item">
					<div class="portfolio-wrapping springboard" v-bind:style="dynamicTriangleFour"></div>
					<div class="portfolio-content">
						<div class="inline-links">
							<a href="https://github.com/synthy2/springboard" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
							<a href="https://vohzd/springboard" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
						</div>
						<div class="count">3</div>
						<h2>Springboard</h2>
						<p>Google used to offer a personalised dashboard called iGoogle but discontinued it, so I made my own.</p>
						<p>Most complex piece of software I've written from scratch, allows you to have persistent modules that each have their own unique state. You can view your emails, todo's, keep track of your spending etc!</p>
						<ul>
							<li>A dual integration between Googles Federated login which passes tokens to Firebase</li>
							<li>It will retreive your profile from Firebase, but also write to your Google Calendar</li>
							<li>Heavy use VueJS, Webpack 3, and SASS.</li>
							<li>Custom look and feel and fully mobile friendly.</li>
						</ul>
					</div>
				</section>
				<section class="portfolio-item">
					<div class="portfolio-wrapping springboard" v-bind:style="dynamicTriangleFour"></div>
					<div class="portfolio-content">
						<div class="inline-links">
							<a href="https://github.com/synthy2/springboard" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
							<a href="https://vohzd/lepalland" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
						</div>
						<div class="count">4</div>
						<h2>Le Palland</h2>
						<p>Wordpress Booking system for my friends parents' guesthouse.</p>
						<p>Gotta handle those bookings somehow!</p>
						<ul>
							<li>Custom Wordpress theme.</li>
							<li>Deployed with SEO optimisation in mind.</li>
							<li>Has a payment portal to handle bookings and let guest know if that booking is available.</li>
						</ul>
					</div>
				</section>
        <section class="portfolio-item">
          <div class="portfolio-wrapping ed" v-bind:style="dynamicTriangleThree"></div>
          <div class="portfolio-content">
            <div class="inline-links">
              <a href="https://github.com/vohzd/ed" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
            </div>
						<div class="count">5</div>
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
					<div class="count">6</div>
					<h2>Older Projects</h2>
					<p>I've done a lot of different projects over the years, so there's almost too many to list.</p>
					<p>A sample of some of my older bits and pieces can be found here:</p>
					<ul>
						<li><a href="https://vohzd.com/twitter">A mashup of the Twitter API and a Semantic API which searches Twitter for your string, and reads the tweet and tells you if it's happy, sad, or neutral!</a></li>
						<li><a href="https://vohzd.com/promo">A tool to randomly generate promotional codes (originally used for book redemption tokens)</a></li>
						<li><a href="https://vohzd.com/grammatical">A tool to help convert any number from 0 -> 1000 into it's grammatically correct word.</a></li>
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

<style lang="sass">

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


	.count {
		font-size: 64px;
		position: absolute;
		margin-left: -200px;
		margin-top: 200px;
		color: rgba(0,0,0,0.3);
		background: rgba(0,0,0,0.1);
		line-height: 128px;
		border-radius: 50%;
		text-align: center;
		width: 128px;
		height: 128px;
	}




</style>
