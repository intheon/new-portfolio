<template>
  <div class="mtx">
    <h2>Numbers Station</h2>
    <div class="row mbx">
      <p>Front-end experiment with audio. Obviously not real.</p>
    </div>
    <div v-if="!started">
      <button @click="init">click to start</button>
    </div>
    <div v-else>
      <div class="current-number row" v-if="currentNumber">
        {{ currentNumber }}
      </div>
      <div class="all-numbers row">
        {{ allNumbers }}
      </div>
      <div class="waveform">
        <div v-if="currentNumber">
          <vue-plyr :key="getRandomKey()" ref="audioPlayer">
            <audio>
              <source :src="audio" type="audio/mp3"/>
            </audio>
          </vue-plyr>
        </div>
      </div>
    </div>
  </div>


</template>

<script>

export default {
  data(){
    return {
      allNumbers: [],
      currentNumber: null,
      audio: null,
      started: false
    }
  },
  methods: {
    init(){
      this.started = true;
      this.startCounter()
    },
    getNumber(){
      return Math.floor(Math.random() * 10) + 1;
    },
    getRandomKey(){
      return (Math.floor(Math.random() * 1000) + 1).toString();
    },
    startCounter(){
      let count = setInterval(() => {
        let newNumber = this.getNumber();
        this.allNumbers.push(newNumber);
        this.currentNumber = newNumber;
        this.audio = `/random/numbers/${this.currentNumber}.mp3`;
        if (this.allNumbers.length % 3 === 0){
          clearInterval(count);
          setTimeout(() => {
            this.startCounter()
          }, 1500);
        }
      }, 1000);
    },
  }
}
</script>

<style>

  .current-number {
    font-size: 256px;
  }

  .all-numbers {
    opacity: 0.1;
    font-size: 32px;
 }

  .plyr--audio .plyr__control.plyr__tab-focus, .plyr--audio .plyr__control:hover, .plyr--audio .plyr__control[aria-expanded="true"] {
    background: var(--blue-hex) !important;
  }

  .plyr__control.plyr__tab-focus {
    box-shadow: 0 0 0 5px rgba(var(--blue-r),var(--orange-g),var(--blue-b),0.05) !important;
  }

  .plyr--full-ui input[type="range"] {
    color: var(--blue-hex) !important;
  }

  .waveform {
    display: none;
  }

</style>
