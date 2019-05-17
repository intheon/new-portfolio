<template>
  <section class="background-wrapper colour1">
    <div class="content-wrapper">
      <video-header text="vohzd" />
      <h2 class="second-header">eCommerce Expertise</h2>
      <section>
        <p>I'm Ben, developer of internets</p>
        <p>I'm a full stack developer, specialising in JavaScript</p>
        <p>Check out my <nuxt-link to="/portfolio">portfolio</nuxt-link> for projects I've been building, or check out what <nuxt-link to="/services">skills</nuxt-link>  I can offer :D<console-blink /></p>
        <social-links />
      </section>
    </div>
  </section>
</template>

<script>
import ConsoleBlink from "~/components/ConsoleBlink.vue";
import SocialLinks from "~/components/SocialLinks.vue";
import VideoHeader from "~/components/VideoHeader.vue";

export default {
  components: {
    "console-blink": ConsoleBlink,
    "social-links": SocialLinks,
    "video-header": VideoHeader
  }
}
</script>

<style>

</style>
