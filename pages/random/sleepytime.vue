<template>
  <div class="mtx">
    <section class="content-wrapper">
      <h2 >Sleepytime</h2>
      <h3>If you need to go to bed now, you should wake up at:</h3>
      <div>The time is now {{ timeNow | timeStamp }}</div>
      <div>Cycle 1: {{ cycle1 | timeStamp }}</div>
      <div>Cycle 2: {{ cycle2 | timeStamp  }}</div>
      <div>Cycle 3: {{ cycle3 | timeStamp }}</div>
      <div>Cycle 4: {{ cycle4 | timeStamp }}</div>
      <div>Cycle 5: {{ cycle5 | timeStamp }}</div>
      <div>Cycle 6: {{ cycle6 | timeStamp }}</div>
    </section>
  </div>

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
    head () {
      return {
        title: "Sleepytime | vohzd.com",
        meta: [
          { hid: "description", name: "description", content: "Calculate the best time to go to sleep based on sleep cycles." },
          { hid: "keywords", name: "keywords", content: "sleep, cycles" },
        ]
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

</script>

<style>

</style>
