<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row relative">
        <h1>Bookmarks</h1>
        <nuxt-link to="/admin/bookmarks/new" class="absolute-top-right"><button>Create New</button></nuxt-link>
      </div>
      <div class="row">
        <h4>Existing Bookmarks</h4>
        <div class="row mt" v-for="bookmark in bookmarks">
          <a target="_blank" :href="bookmark.url">{{ bookmark.name }}</a>
          <p>{{ bookmark.description }}</p>
        </div>
      </div>
    </main>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";


export default {
  computed: {
    ...mapGetters([
      "bookmarks"
    ])
  },
  methods: {
    ...mapActions([
      "logout",
      "getBookmarks"
    ])
  },
  middleware: ["isAdmin"],
  mounted(){
    this.getBookmarks();
  }
}

</script>

<style lang="css">


</style>
