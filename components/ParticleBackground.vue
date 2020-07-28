<template lang="html">
  <div class="">
    <div v-show="isLoading"></div>
    <div v-show="!isLoading" class="particle-background"></div>
  </div>

</template>

<script>
export default {
  data(){
    return {
      isLoading: true
    }
  },
  mounted(){
    const lib = document.createElement("script");
    lib.src = "nodes.js";
    document.getElementsByTagName("head")[0].appendChild(lib);
    this.isLoading = false;
  }
}

</script>
