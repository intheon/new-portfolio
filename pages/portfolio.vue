<template>
  <section class="background-wrapper colour4">
    <section class="content-wrapper">
      <h2 class="main-header">portfolio</h2>
      <div class="flex scroll">
        <section class="portfolio-item">
          <div class="overflow-wrapper">
            <img src="~assets/img/portfolio-image-ed.png" class="portfolio-image" />
          </div>
          <h2>All Silk Mastering</h2>
          <a href="https://allsilkmasteringhouse.com" target="_blank">https://allsilkmasteringhouse.com</a>
          <p>Created this for a buddy of mine who runs his own recording studio and mixing service.</p>
          <p>Ed works crazy hard so if you're a musician who needs some recording help give him a shout!</p>
          <ul>
            <li>Responsive Single Page App built with NuxtJS</li>
            <li>Instagram and Soundcloud feeds</li>
            <li>Upload and book mixes with Stripe Checkout</li>
            <li>Custom admin dashboard for managing orders, customers, and messages.</li>
          </ul>
        </section>
        <section class="portfolio-item">
          <div class="overflow-wrapper">
            <img src="~assets/img/portfolio-image-mile.png" class="portfolio-image" />
          </div>
          <h2>Skate Locate</h2>
          <a href="https://github.com/vohzd/skatelocate" target="_blank"><i class="fab fa-github" aria-hidden="true"></i></a>
          <a href="https://skatelocate.vohzd.com/" target="_blank">https://skatelocate.vohzd.com/</a>
          <p>A realtime map of skateparks and skatespots around the world.</p>
          <p>Add, view, and filter skateparks in your area of interest.</p>
          <p>Built with VueJS and mostly in ES6/7. Is completely realtime with Firebase on the backend, which features websockets, Cloudinary for images, Leaflet/Mapbox for the map engine.</p>
          <ul>
            <li>100% Javascript on front and back end.</li>
            <li>Firebase for data storage and websocket binding</li>
            <li>VueJS at the view layer, with Vuex managing the application state.</li>
            <li>Built and Bundled with Webpack3.</li>
          </ul>
        </section>
      </div>
    </section>
  </section>
</template>

<script>
  export default {
    head () {
      return {
        title: "Portfolio | vohzd.com",
        meta: [
          { hid: "portfolio-description", name: "description", content: "Cool stuff I've built" }
        ]
      }
    },
  }
</script>

<style lang="css">


  /*
  .portfolio-item {
    flex: 1 0 10%;
    margin-right: 3%;
    position: relative;
  }*/
  .portfolio-item {
    width: 30%;
    margin-right: 5%;
  }

  .portfolio-content p {

  }

  .scroll {
    overflow-x: scroll;
  }

  .portfolio-item h2 {
    font-weight: normal;
  }

  .portfolio-image {
    width: 100%;
  }

  .overflow-wrapper {
    overflow: hidden;
    max-height: 320px;
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

  @media (max-width: 1500px){
    .portfolio-item {
      flex: 1 0 43%;
      margin-right: 3%;
      position: relative;
    }
  }

  @media (max-width: 800px){
    .portfolio-item {
      flex: 1 0 97%;
      margin-right: 3%;
      position: relative;
    }
  }


</style>
