<template>
  <section class="background-wrapper colour4">
    <section class="content-wrapper mtx">
      <h1 class="main-header">Unreal Tournament</h1>
      <p>Here be useful stuff for the amazing game Unreal Tournament.</p>
      <p>I've been playing UT since 2000/2001. I used to create maps by the name 'Sabre' and made 'Chantry'.</p>
      <p>Send me a message if you need anything hosting.</p>

			<div class="row mt  pt">
        <h3>> UNREAL ARCHIVE</h3>
        <p>An amazing piece of engineering. A full archive of all the user created mods, maps, and other goodness from the past 20+ years!!!</p>
        <p>I host a mirror which is found @ files.vohzd.com</p>
        <a href="https://unrealarchive.org" target="_blank">https://unrealarchive.org</a>
      </div>

      <div class="row mtx  pt">
        <h3>> MAP INSPECTOR</h3>
        <p>COMING SOON</p>
        <p>A VueJS port of the one at <a href="https://www.bunnytrack.net/package-explorer/" target="_blank">bunnytrack.net</a> that will allow you to deconstruct .unr files</p>
        <!--<nuxt-link to="/random/ut/map-inspect">Map Inspector</nuxt-link>-->
      </div>

      <div class="row  mtx  pt">
        <h3>> OPEN TOURNAMENT</h3>
        <p>Hopefully the UT4 that never was.</p>
        <p>Since UT4 had all it's devs reassigned, development halted years ago. Some talented devs are making an open remake which is in it's early stages here: <a href="https://opentournamentgame.com/" target="_blank">https://opentournamentgame.com/</a>.</p>
      </div>
		</section>
  </section>
</template>

<script>
	export default {
    head () {
      return {
        title: "Unreal Tournament | vohzd.com",
        meta: [
          { hid: "description", name: "description", content: "Unreal Tournament tools and happenings" },
          { hid: "keywords", name: "keywords", content: "unreal, tournament, assets" },
        ]
      }
    }
	}
</script>

<style>

</style>
