<template lang="html">
  <span v-bind:style="blink" class="absolute">_</span>
</template>

<script>
export default {
  data() {
    return {
      display: "none"
    }
  },
  computed: {
    blink(){
      return {
        "display": this.display
      }
    }
  },
  mounted(){
    setInterval(() => {
      if (this.display == "inline"){
        this.display = "none";
      }
      else {
        this.display = "inline";
      }
    }, 800);
  }
}

</script>
