<template>
  <section class="background-wrapper colour4">
    <section class="content-wrapper">
      <h2 class="main-header">services</h2>
			<p>Standard website - £350</p>
      <p>Full eCommerce build - £900</p>
      <p>Conversion Rate Optimisation (10 Campaigns / Split tests) - £150</p>
      <p>Bespoke app/website dev - <nuxt-link to="/contact">Contact me</nuxt-link></p>
		</section>
  </section>
</template>

<script>
	export default {
    head () {
      return {
        title: "Services | vohzd.com",
        meta: [
          { hid: "services-description", name: "description", content: "Development services on offer" }
        ]
      }
    },
	}
</script>

<style>

</style>
