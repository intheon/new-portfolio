<template>
  <section class="background-wrapper colour2">
    <section class="content-wrapper">
      <h2 class="second-header mb">sleepytime</h2>

      <div>The time is now {{ timeNow }}</div>
    </section>
  </section>

</template>

<script>
	export default {
    data(){
      return {
        timeNow: Date.now()
      }
    },
    methods: {
      tick(){
        setInterval(() => {
          this.timeNow = Date.now()
        }, 1000);
      }
    },
    mounted(){
      this.tick();
    }
	}
</script>

<style>
</style>
