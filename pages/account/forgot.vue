<template lang="html">
  <main class="container mtx">
    <h1>{{ headerText }}</h1>
    <h3>{{ bodyText }}</h3>
    <section class="mt c50">
      <div class="row">
        <input v-model="email" v-if="!emailSent" placeholder="Email Address" @keyup.enter.prevent="handleReset" />
        <button class="mt" @click="handleReset" :disabled="!isFormValid()" :class="generateFormValidationClass()" v-if="!emailSent">
          <span v-if="!isLoading">Check</span>
          <span v-if="isLoading"><div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div></span>
        </button>
      </div>

      <div class="row mtx">
        <nuxt-link to="/account" class="medium">Back to login?</nuxt-link>
      </div>

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
      email: "",
      emailSent: false,
      headerText: "Forgot your password?",
      bodyText: "Enter your email and we'll send you a reset link",
      isLoading: false,
      regEx: /\S+@\S+\.\S+/
    }
  },
  head () {
    return {
      title: "Forgot Password | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Forgot my password" },
        { hid: "keywords", name: "keywords", content: "forgot, credentials" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "sendEmail",
      "requestPasswordReset"
    ]),
    isFormValid(){
      return (this.regEx.test(this.email)) ? true : false;
    },
    generateFormValidationClass(){
      return (this.isFormValid()) ? "" : "disabled-button"
    },
    async handleReset(){
      this.isLoading = true;
      let res = await this.$axios.get(`${this.serverEndpoint}/user/${this.email}/`);
      if (res.data.userExists){
        setTimeout(() => {
          this.bodyText = "Thanks, an email with your reset link has been sent.";
          this.emailSent = true;
          this.isLoading = false;
          this.requestPasswordReset(this.email);
        }, 1000);
      }
      else {
        this.headerText = "That user doesn't exist";
        this.isLoading = false;
        setTimeout(() => this.reset(), 2000);
      }
    },
    reset(){
      this.headerText = "Forgot your password?";
      this.bodyText = "Enter your email and we'll send you a reset link";
    }
  }
}

</script>
