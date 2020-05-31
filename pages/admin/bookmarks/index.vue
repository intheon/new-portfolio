<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row relative">
        <h1>Bookmarks</h1>
        <nuxt-link to="/admin/bookmarks/new" class="absolute-top-right"><button>Create New</button></nuxt-link>
      </div>
      <div class="row">
        <h4>Existing Bookmarks</h4>
        <p>None</p>
      </div>
    </main>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";


export default {
  meta: [
    {
      "test": "123"
    }
  ],
  methods: {
    ...mapActions([
      "logout"
    ])
  },
  middleware: ["isAdmin"]
}

</script>

<style lang="css">


</style>
