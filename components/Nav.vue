<template lang="html">
  <nav class="navigation" v-bind:class="{ 'navigation-strip-minimised': isToolbarMinimised }">
    <div class="toggle-toolbar-width">
      <div class="toggle-toolbar-size toggle-toolbar" v-on:click="toggleToolbarSize" v-show="!isToolbarMinimised">
        <i class="fa fa-arrow-left" aria-hidden="true"></i>
      </div>
      <div class="toggle-toolbar-size toggle-toolbar" v-on:click="toggleToolbarSize" v-show="isToolbarMinimised">
        <i class="fa fa-arrow-right" aria-hidden="true"></i>
      </div>
    </div>
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
    height: 288px;
    background: rgba(0,0,0,0.03);
    width: 156px;
    float: left;
    position: fixed;
    bottom: 0;
    z-index: 9999;
  }

  .navigation-strip {
    position: absolute;
    top: 0;
    width: 100%;
    display: inline-block;
  }

  .navigation-strip-minimised {
    width: 64px;
  }

  .navigation a {
    float: left;
    padding: 24px;
    width: calc(100% - 48px);
    bottom: 0;
    text-decoration: none;
    font-size: 16px;
  }

  .navigation a:hover {
    background: rgba(0,0,0,0.05);
    cursor: pointer;
    color: #000;
  }

  .nuxt-link-exact-active {
    background: rgba(0,0,0,0.05);
    color: #000 !important;
  }

  .navigation a i {
    width: 32px;
    font-size: 16px;
  }

  .toggle-toolbar-width {
    position: absolute;
    margin-top: -35px;
    width: calc(100% - 24px);
    top: 0;
    left: 0;
    color: rgba(0,0,0,0.7);
    font-size: 16px;
    background: rgba(0,0,0,0.03);
    border-bottom: 1px solid rgba(0,0,0,0.07);
    border-top: 1px solid rgba(0,0,0,0.07);
    padding-top: 4px;
    padding-bottom: 4px;
    padding-left: 24px;
  }


  /*

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
  */


</style>
