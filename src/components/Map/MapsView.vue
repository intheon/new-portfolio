<template lang="html">
  <main>
    <section id="map">
    </section>
  </main>
</template>

<script>

import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default {
    mounted(){
      this.buildMap();
    },
    methods: {
      buildMap(){
        let map = L.map("map").setView([51.505, -0.09], 13);

        L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
            maxZoom: 18,
            id: 'ciu8pd4ly004j2imly4ombo2',
            accessToken: 'pk.eyJ1IjoiaW50aGVvbiIsImEiOiJjaW5lZ3RkaDUwMDc2d2FseHhldHl0Y3dyIn0.L1RWCbggwqkNegUc1ZIwJw'
        }).addTo(map);
      }
    }
}
</script>

<style lang="scss">

  #map {
    height: 50vh;
  }

</style>
