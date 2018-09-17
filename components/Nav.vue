<template lang="html">
  <nav class="navigation">
    <div>
      <nuxt-link to="/">
        <img src="~/assets/img/admin.png" width="64px" />
        <p>vohzd</p>
      </nuxt-link>
      <nuxt-link to="/about">
        <i class="fa fa-question" aria-hidden="true"></i>
        About
      </nuxt-link>
      <nuxt-link to="/contact">
        <i class="fa fa-question" aria-hidden="true"></i>
        Contact
      </nuxt-link>
      <!--
      <nuxt-link to="/blog">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">Blog</span>
      </nuxt-link>-->
      <nuxt-link to="/portfolio">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        Portfolio
      </nuxt-link>
      <nuxt-link to="/git">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        Git
      </nuxt-link>
      <nuxt-link to="/ut">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        UT
      </nuxt-link>
      <nuxt-link to="/media">
        <i class="fa fa-briefcase" aria-hidden="true"></i>
        Media
      </nuxt-link>
    </div>
  </nav>
</template>


<style>

  .navigation {
    background: rgba(0,0,0,0.03);
    width: 100%;
    height: 64px;
    position: fixed;
    bottom: 0;
    z-index: 30;
    top: 0;
  }

  .navigation a {
    float: left;
    padding: 24px;
    display: inline;
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


</style>
