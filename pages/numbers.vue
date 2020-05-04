<template>
  <section class="background-wrapper gradient1">
    <homepage-hexagons />
    <div class="content-wrapper">
      <h2 class="second-header">Numbers</h2>
      <section>
        <div class="current-number">
          {{ currentNumber }}
        </div>
        <div class="all-numbers">
          {{ allNumbers }}
        </div>
        <div class="waveform">
          waveform
        </div>
      </section>
    </div>
  </section>
</template>

<script>

export default {
  data(){
    return {
      allNumbers: null,
      currentNumber: null
    }
  },
  methods: {
    init(){
      this.startCounter()
    },
    startCounter(){
      setInterval(() => {
        console.log("count...")
      }, 1000);
    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style>

</style>
