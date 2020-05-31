<template lang="html">
  <div class="">
    checking....
  </div>
</template>

<script>

import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "userMeta"
    ])
  },
  watch: {
    userMeta(){
      if (this.userMeta.isAdmin){
        this.$router.push(this.$route.query.returnTo)
      }
      else {
        this.$router.push("/account")
      }
    }
  }
}
</script>

<style lang="css">
</style>
