<template>
  <div class="mtx">
    <section class="content-wrapper">
      <h2 > Promo Codes</h2>
      <strong>Number of codes: {{ numCodes }}</strong>
      <input type="range" v-model="numCodes" min="1" max="3009" step="1" default="10">
      <div class="row">
        <span v-for="(code, i) in parseInt(numCodes)">
          {{ generateCode() }}
        </span>
      </div>
    </section>
  </div>

</template>

<script>
	export default {
    data(){
      return {
        chars: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
        numCodes: 10
      }
    },
    methods: {
      generateCode(){
        let result = " ";
        let charactersLength = this.chars.length;
        for ( let i = 0; i < 7; i++ ) {
          result += this.chars.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
      }
    },
    head () {
      return {
        title: "Promo Codes | vohzd.com",
        meta: [
          { hid: "description", name: "description", content: "Generate Some unique promo codes" },
          { hid: "keywords", name: "keywords", content: "promo" },
        ]
      }
    },
	}

</script>

<style>

</style>
