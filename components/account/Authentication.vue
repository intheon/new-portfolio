<template lang="html">
  <section>
    <div class="row">
      <p class="">{{ welcomeMessage }}</p>
    </div>
    <div class="row">
      <input type="text" v-model="email" @keyup.enter="handleForm" placeholder="Email Address"  class=""/>
    </div>
    <div class="row" v-if="needsPassword">
      <input type="password" v-model="password" placeholder="Password" @keyup.enter="handleForm" class="mt" />
    </div>
    <div class="row" v-if="needsName">
      <input type="text" v-model="name" placeholder="Name" @keyup.enter="handleForm"  class="mt" />
    </div>
    <button type="button" @click="handleForm" class="mt" :disabled="!buttonIsDisabled ? false : true " :class="{ 'disabled-button': !buttonIsDisabled ? false : true  }">
      {{ buttonMessage }}
    </button>
    <div class="row mt">
      <span v-if="notificationMessage" class="login-notification medium">{{ notificationMessage }}</span>
    </div>
    <div class="row mt">
      <nuxt-link to="/account/forgot" class="medium">Forgot Password?</nuxt-link>
    </div>
  </section>
</template>

<script>

import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "userMeta"
    ])
  },
  data(){
    return {
      buttonMessage: "Check",
      buttonIsDisabled: true,
      backupEmail: "",
      email: "",
      password: "",
      name: "",
      needsName: false,
      needsPassword: false,
      notificationMessage: null,
      isRegistering: false,
      isLoggingIn: false,
      welcomeMessage: "Enter your email."
    }
  },
  props: ["redirect"],
  methods: {
    ...mapActions([
      "checkUserExists",
      "register",
      "login",
      "logout"
    ]),
    checkRegistrationOrLoginFormIsValid(){
      if (this.needsPassword && this.needsName){
        this.password.length && this.name.length ? this.buttonIsDisabled = false : this.buttonIsDisabled = true
      }
      else {
        this.password.length ? this.buttonIsDisabled = false : this.buttonIsDisabled = true
      }
    },
    async handleForm(){
      if (!this.isRegistering){
        if (this.isLoggingIn){
          this.buttonMessage = "Working...";
          this.notificationMessage = null;
          try {
            await this.login({
              email: this.email.toLowerCase(),
              password: this.password
            });
          }
          catch (e){
            if (e.response.status === 401){
              this.notificationMessage = "Wrong Credentials!!";
              this.buttonMessage = "Check";
            }
          }
        }
        else {
          let serverResponse = await this.checkUserExists(this.email.toLowerCase());
          serverResponse === "WRONG_EMAIL_FORMAT" ? this.notificationMessage = "An error occured" : serverResponse.data.userExists  ? this.needsLogin() : this.needsRegister()
        }
      }
      else {
        if (this.password.length && this.name.length){
          this.register({
            name: this.name,
            email: this.email,
            password: this.password
          });
        }
      }
    },
    isEmailValid(){
      let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(this.email).toLowerCase())
    },
    needsRegister(){
      this.buttonMessage = "Register";
      this.isRegistering = true;
      this.backupEmail = this.email;
      this.needsName = true;
      this.needsPassword = true;
      this.siteHeader = "Register a new account";
      this.welcomeMessage = "Please enter your credentials below to sign up for a new account.";
      this.buttonIsDisabled = true;
    },
    needsLogin(){
      this.isLoggingIn = true;
      this.needsPassword = true;
      this.backupEmail = this.email;
      this.buttonMessage = "Login";
      this.siteHeader = "Welcome Back";
      this.welcomeMessage = "As you have an account, please enter your password to continue.";
      this.buttonIsDisabled = true;
    },
    redirectToDashboard(){
      if (this.userMeta){
        this.$router.push("/account/dashboard");
      }
    },
    resetForm(){
      this.needsPassword = false;
      this.needsName = false;
      this.isRegistering = false;
      this.isLoggingIn = false;
      this.password = "";
      this.name = "";
      this.siteHeader = "Welcome";
      this.welcomeMessage = "Enter your email."
      this.buttonMessage = "Check";
      this.buttonIsDisabled = true;
      this.notificationMessage = null;
    }
  },
  middleware: "loggedIn",
  watch: {
    email(){
      if (this.isEmailValid()){
        if (this.needsName || this.needsPassword){
          if (this.backupEmail !== this.email){
            this.resetForm()
          }
        }
        else {
          this.buttonIsDisabled = false;
        }
      }
      else {
        this.buttonIsDisabled = true;
      }
    },
    password(){
      this.checkRegistrationOrLoginFormIsValid();
    },
    name(){
      this.checkRegistrationOrLoginFormIsValid();
    },
    userMeta(){
      if (this.redirect !== false){
        this.redirectToDashboard();
      }
    }
  }
}
</script>

<style lang="css">

  .login-notification {
    width: 100%;
    padding: 8px;
    background: rgba(251, 212, 181, 0.4);
  }

</style>
