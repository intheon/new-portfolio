<template>
  <section class="main-content blue">
    <section class="main-text">
      <h1>Howdy!</h1>
      <p>I'm Ben, developer of internets.</p>
      <p>I focus on building web-based apps - Projects to help make sense of large datasets and make them look aesthetically ace.</p>
      <p>Check out my <nuxt-link to="/portfolio">portfolio</nuxt-link> for projects I've been building. :D<span v-bind:style="blink">_</span></p>
      <ul class="about-social-links">
        <a href="https://github.com/vohzd" target="_blank"><li><i class="fa fa-github" aria-hidden="true"></i></li></a>
        <a href="https://angel.co/vohzd" target="_blank"><li><i class="fa fa-angellist" aria-hidden="true"></i></i></li></a>
        <a href="https://www.linkedin.com/in/benjamin-n-smith" target="_blank"><li><i class="fa fa-linkedin" aria-hidden="true"></i></i></li></a>
        <a href="https://stackoverflow.com/users/3609943/vohzd" target="_blank"><li><i class="fa fa-stack-overflow" aria-hidden="true"></i></li></a>
        <a href="https://twitter.com/vohzd" target="_blank"><li><i class="fa fa-twitter" aria-hidden="true"></i></i></li></a>
      </ul>
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
.about-social-links{
  margin: 0;
  padding: 0;
  margin-bottom: 32px;
}

.about-social-links li {
  list-style: none;
  display: inline;
  font-size: 24px;
  padding-right: 16px;
}

.about-social-links a:hover{
  background: none;
  color: #552a3f;
}
</style>
