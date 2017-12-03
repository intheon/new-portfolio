<template lang="html">
  <nav class="navigation" v-bind:class="{ 'navigation-strip-minimised': isToolbarMinimised }">
    <div class="navigation-strip">
      <nuxt-link to="/">
        <i class="fa fa-home" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">Home</span>
      </nuxt-link>
      <nuxt-link to="/about">
        <i class="fa fa-question" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">About</span>
      </nuxt-link>
      <nuxt-link to="/blog">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">Blog</span>
      </nuxt-link>
      <nuxt-link to="/portfolio">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">Portfolio</span>
      </nuxt-link>
      <div class="fix-bottom">
        <div class="toggle-toolbar-size toggle-toolbar" v-on:click="toggleToolbarSize" v-show="!isToolbarMinimised">
          <i class="fa fa-arrow-left" aria-hidden="true"></i>
        </div>
        <div class="toggle-toolbar-size toggle-toolbar" v-on:click="toggleToolbarSize" v-show="isToolbarMinimised">
          <i class="fa fa-arrow-right" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data () {
    return {
      isToolbarMinimised: false
    }
  },
  methods: {
    toggleToolbarSize () {
      this.isToolbarMinimised = !this.isToolbarMinimised
    }
  }
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

  .navigation-strip {
    position: absolute;
    top: 0;
    width: auto;
    display: inline-block;
  }

  .navigation-strip-minimised {
    width: 90px;
  }

  .navigation a {
    float: left;
    padding: 32px;
    width: calc(100% - 80%);
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

  .fix-bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    padding: 32px;
  }

  .toggle-toolbar {
    color: rgba(255,255,255,0.8);
    font-size: 24px;
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

    .navigation-strip {
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
