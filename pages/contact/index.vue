<template>
  <div class="content-wrapper mtx">
    <h1>Contact</h1>

    <div class="row">
      <p>{{ welcomeText }}</p>
      <div class="c50">
        <input class="row mb" v-model="name" placeholder="name" />
        <input class="row mb" v-model="email" placeholder="email" />
        <textarea class="row mb" v-model="message" placeholder="message"></textarea>
        <form-button @click.native="handleMessage" class="text-center" :button-text="buttonText" :is-loading="isLoading" :is-disabled="isDisabled" ></form-button>
      </div>
      <div class="c50">
        <div class="c20 right">
          <a href="https://github.com/vohzd" target="_blank" class="text-center"><font-awesome-icon :icon="['fab', 'github']"></font-awesome-icon> @vohzd</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { mapActions } from "vuex";
import FormButton from "~/components/form/FormButton.vue";
export default {
  components: {
    FormButton
  },
  data(){
    return {
      buttonText: "Send!",
      isLoading: false,
      isDisabled: true,
      name: "",
      email: "",
      message: "",
      regEx: /\S+@\S+\.\S+/,
      welcomeText: "Send me a message directly. I'll get back to you asap."
    }
  },
  head () {
    return {
      title: "Contact | vohzd.com",
      meta: [
        { hid: "description", name: "description", content: "Send me a direct message." },
        { hid: "keywords", name: "keywords", content: "contact, message" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "sendMessage"
    ]),
    async handleMessage(){
      this.isLoading = true;

      await this.sendMessage({
        "from": this.email,
        "name": this.name,
        "message": this.message
      });

      this.welcomeText = "Thank you! That's been sent!"
      this.reset();
    },
    testIsValid(){
      if (this.name && this.regEx.test(this.email) && this.message){
        this.isDisabled = false;
      }
      else {
        this.isDisabled = true;
      }
    },
    reset(){
      this.isLoading = false;
      this.name = "";
      this.email = "";
      this.message = "";
    }
  },
  watch: {
    name(){
      this.testIsValid();
    },
    email(){
      this.testIsValid()
    },
    message(){
      this.testIsValid();
    }
  }
}
</script>

<style>




</style>
