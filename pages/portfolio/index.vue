<template>
  <div class="mtx">
    <h1>Portfolio</h1>
    <p>Here's a list of more complex projects I'm working on.</p>

    <a href="https://epitrade.io" class="row mb pad" target="_blank">
      <h3>Epitrade</h3>
      <p class="medium">My eCommerce platform specialised for digital businesses. Allows sale of complex digital services which would be a nightmare with Magento/Shopify otherwise.</p>
    </a>

    <a href="https://allsilkmasteringhouse.com" class="row mb pad" target="_blank">
      <h3>All Silk Mastering House</h3>
      <p class="medium">Professional Mastering services done in the UK</p>
    </a>

    <a href="https://allsilkrecordingstudio.com" class="row mb pad" target="_blank">
      <h3>All Silk Recording Studio</h3>
      <p class="medium">A second website for the recording studio. Built with epitrade.io</p>
    </a>

    <a href="https://skatemark.com" class="row mb pad" target="_blank">
      <h3>Skatemark</h3>
      <p class="medium">The very first app I put into production done entirely with JavaScript (Vue, Webpack, Firebase)</p>
      <p class="medium">Previously Skatelocate. Located @ https://github.com/vohzd/skatemark</p>
    </a>

    <a href="https://snagmark.com" class="row mb pad" target="_blank">
      <h3>Snagmark</h3>
      <p class="medium">An open source StumbleUpon. Self-hostable and will support ActivityPub</p>
      <p class="medium">Located @ https://github.com/vohzd/snagmark</p>
    </a>

    <a href="https://chantry.io" class="row mb pad" target="_blank">
      <h3>Chantry.io</h3>
      <p class="medium">An archiving page dedicated to works at risk of being lost.</p>
      <p class="medium">We of course have archive.org, but this is being built as I want to learn webscraping in depth.</p>
    </a>

  </div>
</template>

<script>

export default {
  head () {
    return {
      title: "Portfolio | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Cool professional projects I've done" },
        { hid: "keywords", name: "keywords", content: "portfolio, professional, past work" },
      ]
    }
  }
}
</script>

<style>

</style>
