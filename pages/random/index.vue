<template>
  <div class="mtx">
    <h1>Random</h1>

    <nuxt-link to="/random/domains" class="row mtx bb pad">
      <h3>> Domain Dictionary</h3>
      <p class="medium">Find some cool domain name hacks</p>
    </nuxt-link>

    <nuxt-link to="/random/numbers" class="row mtx bb pad">
      <h3>> Numbers station</h3>
      <p class="medium">A fake numbers station</p>
    </nuxt-link>

    <a href="https://scp.vohzd.com" class="row mtx bb pad" target="_blank">
      <h3>> SCP Stories</h3>
      <p class="medium">A mirror of the SCP Wiki, scraped, indexed, and searchable.</p>
    </a>

    <nuxt-link to="/random/midst" class="row mtx bb pad">
      <h3>> In the midst of</h3>
      <p class="medium">Quickly get the number of days between two random dates</p>
    </nuxt-link>

    <nuxt-link to="/random/ut" class="row mtx bb pad">
      <h3>> Unreal Tournament</h3>
      <p class="medium">Useful unreal tournament tools, maps, and my mirror of the unrealarchive</p>
    </nuxt-link>

    <nuxt-link to="/random/lastfm" class="row mtx bb pad">
      <h3>> Lastfm profile exporter</h3>
      <p class="medium">Export your ENTIRE lastfm history</p>
    </nuxt-link>

    <nuxt-link to="/random/promo" class="row mtx bb pad">
      <h3>> Generate Promo Codes</h3>
      <p class="medium">Easily generate promo codes (e.g for competitions etc)</p>
    </nuxt-link>


    <nuxt-link to="/random/sleepytime" class="row mtx bb pad">
      <h3>> VueJS port of sleepyti.me</h3>
      <p class="medium">A little app to help maximise your sleep cycles</p>
    </nuxt-link>



  </div>
</template>

<script>

export default {
  head () {
    return {
      title: "Random Stuff | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Cool and random stuff worth looking at" },
        { hid: "keywords", name: "keywords", content: "fun, random, games, tools, stuff" },
      ]
    }
  }
}
</script>

<style>

</style>
