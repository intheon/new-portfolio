<template lang="html">
  <main class="container">
    <section v-if="!token || !userID">
      <h1>No token information</h1>
      <nuxt-link to="/account">Go back</nuxt-link>
    </section>
    <section v-if="token && userID">
      <h1>{{ headerText }}</h1>
      <section>
        <input v-model="password" placeholder="Password" @keyup.enter.prevent="handleReset"  v-if="!hasCompleted" />
        <input v-model="passwordConfirm" placeholder="Confirm password" @keyup.enter.prevent="handleReset" class="mt" v-if="!hasCompleted" />

        <button class="mt" @click="handleReset" :disabled="!isFormValid()" :class="generateFormValidationClass()" v-if="!hasCompleted">
          <span v-if="!isLoading">Go</span>
          <span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span>
        </button>
      </section>
    </section>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "serverEndpoint"
    ])
  },
  data(){
    return {
      password: null,
      passwordConfirm: "",
      headerText: "Enter your new password",
      isLoading: false,
      hasCompleted: false,
      token: window.location.search ? window.location.search.split("=")[1].split("&")[0] : undefined,
      userID: window.location.search ?  window.location.search.split("=")[2] : undefined
    }
  },
  head () {
    return {
      title: "Reset Password | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Reset your password" },
        { hid: "keywords", name: "keywords", content: "reset, password" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "sendEmail",
      "requestPasswordReset"
    ]),
    isFormValid(){
      return (this.password === this.passwordConfirm) ? true : false;
    },
    generateFormValidationClass(){
      return (this.isFormValid()) ? "" : "disabled-button"
    },
    async handleReset(){
      if (!this.isFormValid()){
        return;
      }
      this.isLoading = true;

      try {
        let res = await this.$axios.post(`${this.getters.serverEndpoint}/perform-password-reset/`, {
          "userID": this.userID,
          "token": this.token,
          "password": this.password
        });

        if (res.status === 200){
          this.headerText = "Thanks, your password has now been reset";
        }
      }
      catch (e) {
        if (e.response.status === 401){
          this.headerText = e.response.data.message;
        }
      }
      this.isLoading = false;
      this.hasCompleted = true;
    }
  }
}

</script>
