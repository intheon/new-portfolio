<template>
  <section class="main-content blue">
    <section class="main-text">
      <h1 class="site-identity">Vohzd</h1>
      <h2 class="site-tagline">eCommerce Expertise</h2>
      <section>
        <p>I'm Ben, developer of internets.</p>
        <p>I'm a full stack JS developer, with a specialist leaning towards eCommerce.</p>
        <p>Check out my <nuxt-link to="/portfolio">portfolio</nuxt-link> for projects I've been building, or check out what <nuxt-link to="/services">skills</nuxt-link>  I can offer :D<span v-bind:style="blink">_</span></p>
        <ul class="about-social-links">
          <a href="https://github.com/vohzd" target="_blank"><li><i class="fa fa-github" aria-hidden="true"></i></li></a>
          <a href="https://angel.co/vohzd" target="_blank"><li><i class="fa fa-angellist" aria-hidden="true"></i></i></li></a>
          <a href="https://www.linkedin.com/in/benjamin-n-smith" target="_blank"><li><i class="fa fa-linkedin" aria-hidden="true"></i></i></li></a>
          <a href="https://stackoverflow.com/users/3609943/vohzd" target="_blank"><li><i class="fa fa-stack-overflow" aria-hidden="true"></i></li></a>
          <a href="https://twitter.com/vohzd" target="_blank"><li><i class="fa fa-twitter" aria-hidden="true"></i></i></li></a>
        </ul>
      </section>
    </section>
  </section>
</template>

<script>
/* eslint-disable */
export default {
data() {
  return {
    display: 'none'
  }
},
computed: {
  blink(){
    return {
      'display': this.display
    }
  }
},
mounted(){
    setInterval(() => {
      if (this.display == 'inline'){
        this.display = 'none';
      }
      else {
        this.display = 'inline';
      }
    }, 800);
  }
}
</script>

<style>

</style>
