<template lang="html">
  <nav class="navigation">
    <div class="fixed-top">
      <nuxt-link to="/">
        <i class="fa fa-home" aria-hidden="true"></i>
        <span>Home</span>
      </nuxt-link>
      <nuxt-link to="/about">
        <i class="fa fa-question" aria-hidden="true"></i>
        <span>About</span>
      </nuxt-link>
      <nuxt-link to="/blog">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span>Blog</span>
      </nuxt-link>
      <nuxt-link to="/portfolio">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        <span>Portfolio</span>
      </nuxt-link>
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
    background: rgba(0,0,0,0.5);
    width: 222px;
    float: left;
    position: fixed;
    z-index: 9999;
  }

  .fixed-bottom {
    position: absolute;
    bottom: 0;
    width: 222px;
    display: inline-block;
  }

  .fixed-top {
    position: absolute;
    top: 0;
    width: 256px;
    display: inline-block;
  }

  .navigation a {
    float: left;
    padding: 32px;
    width: calc(222px - 64px);
    bottom: 0;
    text-decoration: none;
    color: rgba(255,255,255,0.6);
    font-size: 20px;
  }

  .navigation a:hover {
    background: rgba(0,0,0,0.3);
    cursor: pointer;
    color: #69324d;
  }

  .nuxt-link-exact-active {
    background: rgba(0,0,0,0.3);
    color: #69324d !important;
  }

  .navigation a i {
    width: 64px;
  }

  @media (max-width: 1000px){
    .navigation {
      width: 128px;
    }

    .navigation a {
      float: left;
      font-size: 24px;
      padding: 16px;
      width: calc(128px - 31px);
    }

    .navigation a span {
      display: none;
    }

    .navigation a i {
      width: 100px;
      font-size: 25px;
      text-align: center;
    }

  }

  @media (max-width: 768px){

    .fixed-top {
      width: auto;
      text-align: center;
      width: 100%;

    }
    .navigation {
      width: 100%;
      height: 64px;

    }

    .navigation a {
      float: left;
      font-size: 24px;
      padding: 8px;
      width: calc(25% - 16px);
      line-height: 42px;
    }

  }


</style>
