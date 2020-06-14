<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row">
        <h1>Create New Bookmark</h1>
        <label class="medium">Status: {{ status }}</label>
        <button class="absolute-top-right" @click="handleNewBookmark">Create</button>
      </div>
      <div class="row mt">
        <div class="c50">
          <label>URL</label>
          <input v-model="url" placeholder="Website URL"/>
        </div>
        <div class="c50">
          <div v-if="status === 'retreived'">
            <img :src="screenshotURL" class="row">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="c50">
          <label>Name</label>
          <input v-model="name" placeholder="Name"/>
          <label class="mt">Description</label>
          <textarea v-model="description" placeholder="description"></textarea>
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
      description: "",
      name: "",
      status: "ready",
      screenshotURL: null,
      url: null
    }
  },
  middleware: ["isAdmin"],
  methods: {
    ...mapActions([
      "createBookmark"
    ]),
    async handleNewBookmark(){
      await this.createBookmark({
        "url": this.url,
        "name": this.name,
        "description": this.description
      })
      this.reset();
    },
    reset(){
      this.description = "";
      this.url = "";
      this.name = "";
    }

    /* unneeded for now
    async handleWebsiteSnapshot(){
      console.log("this function has run...")
      console.log(this.url)
      this.status = "retreiving...";
      const fileName = await this.getWebsiteScreenshot(this.url);
      this.screenshotURL = `http://localhost:5566/screenshots/${fileName}`
      this.status = "retreived";



    }*/
  },
  /*
  watch: {
    url(){
      console.log("does this fire twice?!?!")
      this.handleWebsiteSnapshot()
    }
  }*/
}

</script>

<style lang="css">


</style>
