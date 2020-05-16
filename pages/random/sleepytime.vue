<template>
  <section class="background-wrapper colour2">
    <section class="content-wrapper">
      <h2 class="second-header mb">Sleepytime</h2>
      <h3>If you need to go to bed now, you should wake up at:</h3>
      <div>The time is now {{ timeNow | dateFilter }}</div>
      <div>Cycle 1: {{ cycle1 | dateFilter }}</div>
      <div>Cycle 2: {{ cycle2 | dateFilter  }}</div>
      <div>Cycle 3: {{ cycle3 | dateFilter }}</div>
      <div>Cycle 4: {{ cycle4 | dateFilter }}</div>
      <div>Cycle 5: {{ cycle5 | dateFilter }}</div>
      <div>Cycle 6: {{ cycle6 | dateFilter }}</div>
    </section>
  </section>

</template>

<script>
	export default {
    data(){
      return {
        timeNow: Date.now(),
        cycle1: Date.now(),
        cycle2: Date.now(),
        cycle3: Date.now(),
        cycle4: Date.now(),
        cycle5: Date.now(),
        cycle6: Date.now(),
      }
    },
    methods: {
      tick(){
        setInterval(() => {
          this.timeNow = Date.now();
          this.cycle1 = this.timeNow + 104*60000;
          this.cycle2 = this.timeNow + 208*60000;
          this.cycle3 = this.timeNow + 312*60000;
          this.cycle4 = this.timeNow + 416*60000;
          this.cycle5 = this.timeNow + 520*60000;
          this.cycle6 = this.timeNow + 624*60000;
        }, 1000);
      }
    },
    mounted(){
      this.tick();
    }
	}

  /*

  var zDate = new Date();

  var res1 = new Date(zDate.getTime() + 104*60000);
  var res2 = new Date(res1.getTime() + 90*60000);
  var res3 = new Date(res2.getTime() + 90*60000);
  var res4 = new Date(res3.getTime() + 90*60000);
  var res5 = new Date(res4.getTime() + 90*60000);
  var res6 = new Date(res5.getTime() + 90*60000);
  */
</script>

<style>

</style>
