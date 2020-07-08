<template>
  <div class="mtx">
    <h2>Numbers Station</h2>
    <div class="row mbx">
      <p>Front-end experiment with audio. Obviously not real.</p>
    </div>

    <div>
      <div class="current-number row relative" v-if="currentNumber">
        <div class="row">
          {{ currentNumber }}
        </div>
        <button @click="toggleAudio" class="absolute-top-right text-center">
          <span v-if="!allowsAudio">AUDIO ON (recommended!)</span>
          <span v-else>AUDIO OFF</span>
        </button>
      </div>
      <div class="all-numbers row">
        {{ allNumbers }}
      </div>
    </div>
    <div class="audio" v-if="allowsAudio">
      <div class="audio-player">
        <div v-if="currentNumber">
          <vue-plyr :key="getRandomKey()" ref="audioPlayer">
            <audio>
              <source :src="audio" type="audio/mp3"/>
            </audio>
          </vue-plyr>
        </div>
      </div>
      <div class="waveform">
        <canvas width="460" height="320"></canvas>
      </div>
    </div>

  </div>


</template>

<script>

export default {
  data(){
    return {
      allNumbers: [],
      currentNumber: this.getNumber(),
      audio: null,
      allowsAudio: false,
      started: false
    }
  },
  head () {
    return {
      title: "Numbers Station | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "A mock numbers station front end experiement" },
        { hid: "keywords", name: "keywords", content: "numbers, station" },
      ]
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

        if (this.allowsAudio){
          this.audio = `/random/numbers/${this.currentNumber}.mp3`;
        }

        /*
        if (this.allNumbers.length % 3 === 0){
          clearInterval(count);
          setTimeout(() => {
            this.startCounter()
          }, 1500);
        }*/
      }, 1000);
    },
    toggleAudio(){
      this.allowsAudio = !this.allowsAudio;
    },
    startVisualiser(){
      let canvas = document.querySelector("canvas");
      let ctx = canvas.getContext("2d");

      canvas.width = document.body.clientWidth;
      canvas.height = document.body.clientHeight;

      let centerX = canvas.width / 2;
      let centerY = canvas.height / 2;
      let radius = document.body.clientWidth <= 425 ? 120 : 160;
      let steps = document.body.clientWidth <= 425 ? 60 : 120;
      let interval = 360 / steps;
      let pointsUp = [];
      let pointsDown = [];
      let running = false;
      let pCircle = 2 * Math.PI * radius;
      let angleExtra = 90;

      // Create points
      for(let angle = 0; angle < 360; angle += interval) {
        let distUp = 1.1;
        let distDown = 0.9;

        pointsUp.push({
          angle: angle + angleExtra,
          x: centerX + radius * Math.cos((-angle + angleExtra) * Math.PI / 180) * distUp,
          y: centerY + radius * Math.sin((-angle + angleExtra) * Math.PI / 180) * distUp,
          dist: distUp
        });

        pointsDown.push({
          angle: angle + angleExtra + 5,
          x: centerX + radius * Math.cos((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
          y: centerY + radius * Math.sin((-angle + angleExtra + 5) * Math.PI / 180) * distDown,
          dist: distDown
        });
      }

      // -------------
      // Audio stuff
      // -------------

      // make a Web Audio Context
      const context = new AudioContext();
      const splitter = context.createChannelSplitter();

      const analyserL = context.createAnalyser();
      analyserL.fftSize = 8192;

      const analyserR = context.createAnalyser();
      analyserR.fftSize = 8192;

      splitter.connect(analyserL, 0, 0);
      splitter.connect(analyserR, 1, 0);

      // Make a buffer to receive the audio data
      const bufferLengthL = analyserL.frequencyBinCount;
      const audioDataArrayL = new Uint8Array(bufferLengthL);

      const bufferLengthR = analyserR.frequencyBinCount;
      const audioDataArrayR = new Uint8Array(bufferLengthR);

      // Make a audio node
      const audio = new Audio();

      function loadAudio() {
        audio.loop = false;
        audio.autoplay = false;
        audio.crossOrigin = "anonymous";

        // call `handleCanplay` when it music can be played
        audio.addEventListener('canplay', handleCanplay);
        audio.src = "https://s3.eu-west-2.amazonaws.com/nelsoncodepen/Audiobinger_-_The_Garden_State.mp3";
        audio.load();
        running = true;
      }

      function handleCanplay() {
        // connect the audio element to the analyser node and the analyser node
        // to the main Web Audio context
        const source = context.createMediaElementSource(audio);
        source.connect(splitter);
        splitter.connect(context.destination);
      }

      function toggleAudio() {
        if (running === false) {
          loadAudio();
          document.querySelector('.call-to-action').remove();
        }

        if (audio.paused) {
          audio.play();
        } else {
          audio.pause();
        }
      }

      canvas.addEventListener('click', toggleAudio);

      document.body.addEventListener('touchend', function(ev) {
        context.resume();
      });

      // -------------
      // Canvas stuff
      // -------------

      function drawLine(points) {
        let origin = points[0];

        ctx.beginPath();
        ctx.strokeStyle = 'rgba(255,255,255,0.5)';
        ctx.lineJoin = 'round';
        ctx.moveTo(origin.x, origin.y);

        for (let i = 0; i < points.length; i++) {
          ctx.lineTo(points[i].x, points[i].y);
        }

        ctx.lineTo(origin.x, origin.y);
        ctx.stroke();
      }

      function connectPoints(pointsA, pointsB) {
        for (let i = 0; i < pointsA.length; i++) {
          ctx.beginPath();
          ctx.strokeStyle = 'rgba(255,255,255,0.5)';
          ctx.moveTo(pointsA[i].x, pointsA[i].y);
          ctx.lineTo(pointsB[i].x, pointsB[i].y);
          ctx.stroke();
        }
      }

      function update(dt) {
        let audioIndex, audioValue;

        // get the current audio data
        analyserL.getByteFrequencyData(audioDataArrayL);
        analyserR.getByteFrequencyData(audioDataArrayR);

        for (let i = 0; i < pointsUp.length; i++) {
          audioIndex = Math.ceil(pointsUp[i].angle * (bufferLengthL / (pCircle * 2))) | 0;
          // get the audio data and make it go from 0 to 1
          audioValue = audioDataArrayL[audioIndex] / 255;

          pointsUp[i].dist = 1.1 + audioValue * 0.8;
          pointsUp[i].x = centerX + radius * Math.cos(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;
          pointsUp[i].y = centerY + radius * Math.sin(-pointsUp[i].angle * Math.PI / 180) * pointsUp[i].dist;

          audioIndex = Math.ceil(pointsDown[i].angle * (bufferLengthR / (pCircle * 2))) | 0;
          // get the audio data and make it go from 0 to 1
          audioValue = audioDataArrayR[audioIndex] / 255;

          pointsDown[i].dist = 0.9 + audioValue * 0.2;
          pointsDown[i].x = centerX + radius * Math.cos(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
          pointsDown[i].y = centerY + radius * Math.sin(-pointsDown[i].angle * Math.PI / 180) * pointsDown[i].dist;
        }
      }

      function draw(dt) {
        requestAnimationFrame(draw);

        if (running) {
          update(dt);
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        drawLine(pointsUp);
        drawLine(pointsDown);
        connectPoints(pointsUp, pointsDown);
      }

      draw();
    }
  },
  mounted(){
    this.init();
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

  .audio-player {
    display: none;
  }

</style>
