<template lang="html">
  <div>
    <main class="center-container mtx">
      <div class="row">
        <h1>Admin Dashboard</h1>
      </div>
      <div class="row">
        <p>Please select an option.</p>
        <div class="mt row">
          <button type="button" class="dashboard-button" @click="logout">Logout</button>
        </div>
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
