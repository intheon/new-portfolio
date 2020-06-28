<template lang="html">
  <span>

    <nuxt-link to="/blog" class="nav-link mlx">
      blog
    </nuxt-link>

    <nuxt-link to="/contact" class="nav-link mlx">
      contact
    </nuxt-link>

    <nuxt-link to="/portfolio" class="nav-link mlx">
      portfolio
    </nuxt-link>

    <nuxt-link to="/random" class="nav-link mlx">
      random stuff
    </nuxt-link>


    <div class="absolute-top-right">
      <account-icon></account-icon>
    </div>
  </span>
</template>

<script>

import AccountIcon from "~/components/nav/AccountIcon.vue";

import { mapGetters } from "vuex";

export default {
  components: {
    AccountIcon
  }
}

</script>

<style lang="css">


</style>
