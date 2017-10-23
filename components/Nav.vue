<template lang="html">
  <nav class="navigation">
    <div class="fixed-bottom">
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/about">About</nuxt-link>
      <nuxt-link to="/blog">Blog</nuxt-link>
      <nuxt-link to="/portfolio">Portfolio</nuxt-link>
    </div>
  </nav>
</template>

<script>
export default {
}
</script>

<style>

  .navigation {
    height: 100vh;
    background: rgba(255,255,255,0.9);
    width: 256px;
    float: left;
    position: fixed;
    z-index: 9999;
  }


  .fixed-bottom {
    position: absolute;
    bottom: 0;
    width: 256px;
    display: inline-block;
  }
  .navigation a {
    float: left;
    padding: 32px;
    width: calc(256px - 64px);
    bottom: 0;
    text-decoration: none;
    color: black;
  }

  .navigation a:hover {
    background: rgba(0,0,0,0.05);
    cursor: pointer;
    color: #552a3f;
  }

  @media (max-width: 1000px){
    .navigation {
      width: 128px;
    }

    .navigation a {
      float: left;
      font-size: 24px;
      padding: 16px;
      width: calc(128px - 10px);
    }

  }


</style>
