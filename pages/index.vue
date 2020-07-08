<template>
  <div class="mtx">
    <h1>Oh hai...</h1>
    <section>
      <p>I'm Ben, developer of internets</p>
      <p>I'm a full stack developer, specialising in JavaScript</p>
      <p>> Check out my <nuxt-link to="/portfolio">portfolio</nuxt-link> for cool projects</p>
      <p>> Need tech help? <nuxt-link to="/contact">Contact</nuxt-link> me</p>
      <p>> Not sure why you're here? Here's some <nuxt-link to="/random">interesting stuff</nuxt-link> :D<console-blink></console-blink></p>
    </section>
  </div>
</template>

<script>

import ConsoleBlink from "~/components/ConsoleBlink.vue";

export default {
  components: {
    "console-blink": ConsoleBlink,
  },
  head () {
    return {
      title: "Home | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "vohzd | Marvellous full-stack developer!" },
        { hid: "keywords", name: "keywords", content: "home, welcome" },
      ]
    }
  },
}
</script>

<style>

</style>
