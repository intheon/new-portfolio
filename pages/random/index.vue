<template>
  <div class="mtx">
    <h1>random</h1>

    <nuxt-link to="/random/numbers" class="row mtx bb">
      <h3>numbers station</h3>
      <p class="medium">A fake numbers station</p>
    </nuxt-link>

    <nuxt-link to="/random/lastfm" class="row mtx bb">
      <h3>lastfm profile exporter</h3>
      <p class="medium">export your ENTIRE lastfm history</p>
    </nuxt-link>

    <nuxt-link to="/random/sleepytime" class="row mtx bb">
      <h3>vuejs port of sleepyti.me</h3>
      <p class="medium">a little app to help maximise your sleep cycles</p>
    </nuxt-link>


    <nuxt-link to="/random/ut" class="row mtx">
      <h3>unreal tournament</h3>
      <p class="medium">useful unreal tournament tools, maps, and my mirror of the unrealarchive</p>
    </nuxt-link>

  </div>
</template>

<script>

export default {
  head () {
    return {
      title: "About  | vohzd.com",
      meta: [
        { hid: "index-description", name: "description", content: "The homepage of superstar developer Vohzd" }
      ]
    }
  },
}
</script>

<style>

</style>
