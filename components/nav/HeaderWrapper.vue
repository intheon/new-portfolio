<template lang="html">
  <header class="main-header">
    <nuxt-link to="/" class="nav-link ml mrx">
      <img src="~assets/img/zombiehand.png" class="home-logo"/>
      <span class="mlx">vohzd.com</span>
    </nuxt-link>
    <desktop-navigation class="desktop-navigation"></desktop-navigation>
    <mobile-navigation class="mobile-navigation row"></mobile-navigation>
  </header>

</template>

<script>


import DesktopNavigation from "~/components/nav/DesktopNavigation.vue";
import MobileNavigation from "~/components/nav/MobileNavigation.vue";

export default {
  components: {
    DesktopNavigation,
    MobileNavigation,
  }
}

</script>

<style>

.main-header {
  width: 100%;
  background: #121116;
  color: #6f3a1f;
  height: 72px;
  border-bottom: 1px solid #1b1a21;
  position: fixed;
  z-index: 9999;
  top: 0;
}

.nav-link {
  display: inline-block;
  line-height: 62px;
  background: none;
}

.home-logo {
  width: 72px;
  position: absolute;
  top: 0;
}
</style>
