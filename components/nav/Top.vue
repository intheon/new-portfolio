<template lang="html" >
 	<header class="toolbar">

    <nuxt-link to="/" class="nav-link absolute-left ml">
      home
    </nuxt-link>

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


	</header>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "isLoading",
      "userMeta"
    ])
  },
}

</script>

<style>
	.toolbar {
		width: 100%;
    background: #121116;
		color: #6f3a1f;
		height: 64px;
		border-bottom: 1px solid #1b1a21;
    position: fixed;
    z-index: 9999;
    top: 0;
	}

	.nav-link {
    display: inline-block;
		line-height: 54px;
    background: none;
	}

</style>
