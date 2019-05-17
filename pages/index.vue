<template>
  <section class="background-wrapper colour1">
    <homepage-hexagons />
    <div class="content-wrapper">
      <h2 class="second-header">eCommerce Expertise</h2>
      <section>
        <p>I'm Ben, developer of internets</p>
        <p>I'm a full stack developer, specialising in JavaScript</p>
        <p>> Check out <nuxt-link to="/portfolio">portfolio</nuxt-link> for cool projects</p>
        <p>> Need tech help? I <nuxt-link to="/services">freelance</nuxt-link> too :D<console-blink /></p>
        <social-links />
      </section>
    </div>
  </section>
</template>

<script>
import ConsoleBlink from "~/components/ConsoleBlink.vue";
import SocialLinks from "~/components/SocialLinks.vue";
import HomepageHexagons from "~/components/HomepageHexagons.vue";

export default {
  components: {
    "console-blink": ConsoleBlink,
    "social-links": SocialLinks,
    "homepage-hexagons": HomepageHexagons
  }
}
</script>

<style>

</style>
