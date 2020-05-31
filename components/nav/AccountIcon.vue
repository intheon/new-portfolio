<template lang="html">
  <div class="account-icon  large-icon mr hover">
    <nuxt-link to="/account" class="no-colour"><font-awesome-icon icon="user-circle"></font-awesome-icon ></nuxt-link>
    <div class="login-status" :class="{ 'login-status--green': userMeta  }"></div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
  export default {
    computed: {
      ...mapGetters([
        "userMeta"
      ])
    }
  }
</script>

<style lang="css">

  .account-icon {
    display: inline-block;
    right: 0;
    top: 4px;
    width: 48px;
    position: absolute;
  }

  .account-icon a {
    background: none;

  }

  .account-icon svg {
    color: white;

  }

  .login-status {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    position: absolute;
    top: 6px;
    background: grey;
    right: 6px;
  }
  .login-status--green {
    background: rgb(109, 227, 29);
  }

</style>
