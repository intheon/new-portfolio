<template>
  <section class="background-wrapper colour2">
    <section class="content-wrapper">
      <h2 class="second-header mb">tools</h2>

      <div class="tools-wrapper c50">

        <nuxt-link to="/tools/lastfm">
          <div class="tool-item mb">
            <label>> Last.fm exporter</label>
            <span class="tool-description">
              Export your ENTIRE last.fm profile in 2 clicks of a button.
            </span>
          </div>
        </nuxt-link>

        <nuxt-link to="/tools/sleepytime">
          <div class="tool-item mb">
            <label>> Sleepy Time</label>
            <span class="tool-description">
              Mirror of sleepyti.me - Good for figuring out circadiam rhythms.
            </span>
          </div>
        </nuxt-link>

        <nuxt-link to="/tools/fonts">
          <div class="tool-item mb">
            <label>> Font Selector</label>
            <span class="tool-description">
              Useful for deciding on which font to use for web dev. Available as a VueJS plugin here.
            </span>
          </div>
        </nuxt-link>

        <nuxt-link to="/tools/lorum">
          <div class="tool-item mb">
            <label>> Lorum ipsum generator</label>
            <span class="tool-description">
              Many different flavours of lorum ipsum generation. vanilla, bacon, hipster, jesus, its all here!
            </span>
          </div>
        </nuxt-link>

        <nuxt-link to="/tools/palettes">
          <div class="tool-item mb">
            <label>> Colour palette generator</label>
            <span class="tool-description">
              Find colour schemes that work based on a single colour.
            </span>
          </div>
        </nuxt-link>

        <nuxt-link to="/tools/ut">
          <div class="tool-item mb">
            <label>> Unreal Tournament</label>
            <span class="tool-description">
              I run both UT99 and UT4 servers. Ultrrraaaa Killll!
            </span>
          </div>
        </nuxt-link>

      </div>

    </section>
  </section>

</template>

<script>
	export default {
	}
</script>

<style>
</style>
