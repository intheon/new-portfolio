<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row">
        <h1>Create New Bookmark</h1>
        <label class="medium">Status: {{ status }}</label>
        <button class="absolute-top-right">Create</button>
      </div>
      <div class="row mt">


        <div class="c50">
          <div class="c90">
            <label>URL</label>
            <input v-model="url" placeholder="Website URL"/>
          </div>
        </div>

        <div class="c50">
          <div v-if="status === 'retreived'">
            <img :src="screenshotURL" class="row">
          </div>
        </div>

      </div>
    </main>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";


export default {
  data(){
    return {
      url: null,
      status: "ready",
      screenshotURL: null
    }
  },
  middleware: ["isAdmin"],
  methods: {
    ...mapActions([
      "getWebsiteScreenshot"
    ]),
    async handleWebsiteSnapshot(){
      console.log("this function has run...")
      console.log(this.url)
      this.status = "retreiving...";
      const fileName = await this.getWebsiteScreenshot(this.url);
      this.screenshotURL = `http://localhost:5566/screenshots/${fileName}`
      this.status = "retreived";



    }
  },
  watch: {
    url(){
      console.log("does this fire twice?!?!")
      this.handleWebsiteSnapshot()
    }
  }
}

</script>

<style lang="css">


</style>
