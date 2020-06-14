<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row">
        <h1>Bookmarks</h1>
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
      "getBookmarks"
    ])
  },
  mounted(){
    this.getBookmarks();
  }
}

</script>

<style lang="css">


</style>
