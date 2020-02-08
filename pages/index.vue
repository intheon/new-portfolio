<template>
  <section class="background-wrapper gradient1">
    <homepage-hexagons />
    <div class="content-wrapper">
      <h2 class="second-header">eCommerce Expertise</h2>
      <section>
        <p>I'm Ben, developer of internets</p>
        <p>I'm a full stack developer, specialising in JavaScript</p>
        <p>> Check out my <nuxt-link to="/portfolio">portfolio</nuxt-link> for cool projects</p>
        <p>> Need tech help? I <nuxt-link to="/services">contract </nuxt-link>too</p>
        <p>> Not sure why you're here? Here's some <nuxt-link to="/tools">interesting stuff</nuxt-link> :D<console-blink /></p>
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
  },
  head () {
    return {
      title: "Home | vohzd.com",
      meta: [
        { hid: "index-description", name: "description", content: "The homepage of superstar developer Vohzd" }
      ]
    }
  },
}
</script>

<style>

</style>
