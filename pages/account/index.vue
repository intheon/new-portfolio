<template lang="html">
  <div class="center-container ptx">
    <dashboard-module v-if="userMeta"></dashboard-module>
    <h1 v-if="!userMeta">{{ siteHeader }}</h1>
    <authentication-module v-if="!userMeta"></authentication-module>
  </div>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

import AuthenticationModule from "~/components/account/Authentication.vue";
import DashboardModule from "~/components/account/Dashboard.vue";

export default {
  components: {
    AuthenticationModule,
    DashboardModule
  },
  computed: {
    ...mapGetters([
      "userMeta"
    ])
  },
  data(){
    return {
      siteHeader: "Welcome",
    }
  },
  middleware: "dashboard",
  watch: {
    userMeta(){
      if (this.userMeta.isAdmin){
        this.$router.push("/admin")
      }
    }
  }
}
</script>

<style lang="css">


</style>
