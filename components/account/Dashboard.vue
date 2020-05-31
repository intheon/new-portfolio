<template lang="html">
  <div>
    <h1>Dashboard</h1>
    <div class="row">
      <section class="grey-banner user-details mt c50">
        <span >Welcome back, <strong>{{ userMeta.name }}</strong></span>
        <div class="mt fade row">
          <span class="row"><span class="c12 inline-block strong mr">id</span>{{ userMeta._id }}</span>
          <span class="row"><span class="c12 inline-block strong mr">email</span>{{ userMeta.email }}</span>
          <span class="row"><span class="c12 inline-block strong mr">joined</span>{{ userMeta.createdAt }}</span>
        </div>
      </section>
    </div>
    <section class="mt row">
      <div class="user-account-management">
        <button type="button" class="dashboard-button" @click="logout">Logout</button>
      </div>
    </section>

  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "userMeta",
    ])
  },

  methods: {
    ...mapActions([
      "logout"
    ]),
  }
}
</script>
