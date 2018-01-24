<template>
  <section class="main-content purple">
    <section class="main-text">
      <h1>Portfolio</h1>
      <section class="portfolio-item">
        <div class="portfolio-content">
          <div class="inline-links">
            <a href="https://github.com/vohzd/skatelocate" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
            <a href="https://vohzd.com/skatelocate" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
          </div>
  				<div class="count">1</div>
          <h2>Skate Locate</h2>
          <p>A realtime map of skateparks and skatespots around the world.</p>
          <p>Add, view, and filter skateparks in your area of interest.</p>
          <p>Built with VueJS and mostly in ES6/7. Is completely realtime with Firebase on the backend, which features websockets, Cloudinary for images, Leaflet/Mapbox for the map engine.</p>
          <div class="portfolio-image skate"></div>
          <ul>
            <li>100% Javascript on front and back end.</li>
            <li>Firebase for data storage and websocket binding</li>
  					<li>VueJS at the view layer, with Vuex managing the application state.</li>
            <li>Built and Bundled with Webpack3.</li>
          </ul>
        </div>
      </section>
  		<section class="portfolio-item">
  			<div class="portfolio-content">
  				<div class="inline-links">
  					<a href="https://badluckcollective.co.uk" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
  				</div>
  				<div class="count">2</div>
  				<h2 class="blc-shorten">Bad Luck Collective</h2>
  				<p>A boutique marketplace.</p>
  				<p>Built to allow vendors sell their products with minimal hassle, and minimal cost.</p>
          <div class="portfolio-image blc"></div>
  				<ul>
  					<li>Framework is based upon Sharetribe.</li>
  					<li>Self hosted on a custom VPS running Ubuntu, with Ruby as the backend language.</li>
  					<li>Custom front-end view layers built in VueJS.</li>
  				</ul>
  			</div>
  		</section>
  		<section class="portfolio-item">
  			<div class="portfolio-content">
  				<div class="inline-links">
  					<a href="https://github.com/vohzd/springboard" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
  					<a href="https://vohzd.com/springboard" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
  				</div>
  				<div class="count">3</div>
  				<h2>Springboard</h2>
  				<p>Google used to offer a personalised dashboard called iGoogle but discontinued it, so I made my own.</p>
  				<p>Most complex piece of software I've written from scratch, allows you to have persistent modules that each have their own unique state. You can view your emails, todo's, keep track of your spending etc!</p>
          <div class="portfolio-image springboard"></div>
          <ul>
  					<li>A dual integration between Googles Federated login which passes tokens to Firebase</li>
  					<li>It will retreive your profile from Firebase, but also write to your Google Calendar</li>
  					<li>Heavy use VueJS, Webpack 3, and SASS.</li>
  					<li>Custom look and feel and fully mobile friendly.</li>
  				</ul>
  			</div>
  		</section>
      <!--
  		<section class="portfolio-item">
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
  		</section>-->
      <section class="portfolio-item">
        <div class="portfolio-content">
          <div class="inline-links">
            <a href="https://github.com/vohzd/ed" target="_blank"><div class="link large"><i class="fa fa-github" aria-hidden="true"></i></div></a>
            <a href="https://vohzd.com/ed" target="_blank"><div class="link small"><i class="fa fa-link" aria-hidden="true"></i></div></a>
          </div>
  				<div class="count">4</div>
          <h2>Ed Hall Audio</h2>
          <p>Created this for a buddy of mine who runs his own recording studio and mixing service.</p>
          <p>Ed works crazy hard so if you're a musician who needs some recording help give him a shout!</p>
          <div class="portfolio-image ed"></div>
          <ul>
            <li>Responsive Design</li>
            <li>Instagram and Soundcloud feeds</li>
            <li>Contact form</li>
            <li>Lightweight, uses only jQuery and Semantic UI</li>
          </ul>
        </div>
      </section>
  		<section class="portfolio-item purple">
  			<div class="count">5</div>
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
  </section>
</template>

<script>
  export default {
  }
</script>

<style lang="css">


  .portfolio-item {
    float: left;
    width: 100%;
  }

  .portfolio-content p {

  }

  .portfolio-content h2 {
    margin-bottom: 32px;
  }

  .portfolio-image {

  }

  .skate {
    background: url("~assets/img/portfolio-image-mile.png");
    width: 100%;
    height: 200px;
  }

  .blc {
    background: url("~assets/img/portfolio-image-blc.png");
    width: 100%;
    height: 200px;
  }

  .springboard {
    background: url("~assets/img/portfolio-image-springboard.png");
    width: 100%;
    height: 200px;
  }

  .ed {
    background: url("~assets/img/portfolio-image-ed.png");
    width: 100%;
    height: 200px;
  }
</style>
