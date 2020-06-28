<template lang="html">
  <nav class="relative">
    <div class="menu-bg" :class="{ 'fs': isMenuShown }" @click="handleMenu"></div>
    <div class="menu-burger" :class="{ 'fs': isMenuShown }" @click="handleMenu">
      <font-awesome-icon :icon="['fas', 'bars']" v-if="!isMenuShown"></font-awesome-icon>
      <font-awesome-icon :icon="['fas', 'times']" v-if="isMenuShown"></font-awesome-icon>
    </div>
    <div class="menu-items" :class="{ 'fs': isMenuShown }" >

      <nuxt-link to="/" class="row mb"  @click.native="handleMenu" >home</nuxt-link>
      <nuxt-link to="/blog" class="row mb" @click.native="handleMenu" >blog</nuxt-link>
      <nuxt-link to="/contact" class="row mb" @click.native="handleMenu" >contact</nuxt-link>
      <nuxt-link to="/portfolio" class="row mb" @click.native="handleMenu" >portfolio</nuxt-link>
      <nuxt-link to="/random" class="row mb" @click.native="handleMenu" >random</nuxt-link>

    </div>
  </nav>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  data(){
    return {
      isMenuShown: false
    }
  },
  computed: {
    ...mapGetters([
      "totalCartQuantity"
    ])
  },
  methods: {
    handleMenu(){
      this.isMenuShown = !this.isMenuShown;
    }
  }
}
</script>

<style lang="css">

.menu, .menu-bg, .menu-burger {
  position: fixed;
  width: 54px;
  line-height: 48px;
  text-align: center;
  right: 0;
  padding-right: 8px;
  top: 8px;
}
.menu-bg {
  background: black;
  top: -64px;
  pointer-events: none;
  transition: 0.3s;
}
.menu-bg.fs {
  width: calc(100% + 64px);
  height: calc(100% + 64px );
}
.menu-burger {
  color: white;
  -webkit-user-select: none;
  cursor: pointer;
  transition: 0.3s;
  transform-origin: center;
  height: 72px;
}
.menu-burger.fs {
  transform: rotate(-180deg) ;
  color: white;
  width: 48px;
  right: 8px;
  top: -4px;
}
.menu-items {
  position: absolute;
  font-weight: bold;
  font-size: 40px;
  letter-spacing: 4px;
  color: black;
  width: 100%;
  text-align: center;
  transition: 0.3s;
  transition-timing-function: ease-out;
  transform: translateY(-200%);
  pointer-events: none;
}
.menu-items div {
  transition: 1s;
  opacity: 0;
  margin-top: 0px;
}
.menu-items.fs {
  transform: translateY(0);
  pointer-events: auto;
  opacity: 1;
}
.menu-items.fs div {
  opacity: 1;
  margin-top: 75px;
}
.content {
  padding: 100px 50px;
  line-height: 1.62em;
  color: #444;
}
.content h1 {
  font-weight: bold;
  font-size: 2em;
  margin-bottom: 1em;
}

</style>
