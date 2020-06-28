<template>
  <div class="mtx">
    <h1>Portfolio</h1>
    <p>Here's my professional projects I've done for clients.</p>

    <a href="https://allsilkmasteringhouse.com" class="row mb pad" target="_blank">
      <h3>All Silk Mastering House</h3>
      <p class="medium">Professional Mastering services done in the UK</p>
    </a>
    <a href="https://skatelocate.vohzd.com" class="row mb pad" target="_blank">
      <h3>Skate Locate</h3>
      <p class="medium">The very first app I put into production done entirely with JavaScript (Vue, Webpack, Firebase)</p>
    </a>
    <a href="#" class="row mb pad" >All Silk Recording Studio (coming soon)</a>
    <a href="#" class="row mb pad" >Superyagi Antennas (coming soon)</a>

  </div>
</template>

<script>

export default {
  head () {
    return {
      title: "Portfolio | vohzd.com",
      meta: [
        { hid: "portfolio-description", name: "description", content: "Cool professional projects I've done" }
      ]
    }
  },
}
</script>

<style>

</style>
