<template>
  <section class="background-wrapper colour3">
    <section class="content-wrapper">
      <h2 class="main-header">contact</h2>
      <ul class="about-social-links">
        <a href="https://github.com/vohzd" target="_blank"><li><i class="fab fa-github" aria-hidden="true"></i></li></a>
        <a href="https://angel.co/vohzd" target="_blank"><li><i class="fab fa-angellist" aria-hidden="true"></i></i></li></a>
        <a href="https://www.linkedin.com/in/benjamin-n-smith" target="_blank"><li><i class="fab fa-linkedin" aria-hidden="true"></i></i></li></a>
        <a href="https://stackoverflow.com/users/3609943/vohzd" target="_blank"><li><i class="fab fa-stack-overflow" aria-hidden="true"></i></li></a>
        <a href="https://twitter.com/vohzd" target="_blank"><li><i class="fab fa-twitter" aria-hidden="true"></i></i></li></a>
      </ul>
      <div class="contact-form">
        <input type="text" placeholder="Name" v-model="name">
        <input type="text" placeholder="Message" v-model="message">
        <input type="text" placeholder="Email" v-model="email">
        <button @click="sendMessage">{{ buttonText }}</button>
      </div>
		</section>
  </section>
</template>

<script>

	export default {
    data(){
      return {
        name: "",
        message: "",
        email: "",
        buttonText: "Send!",
        serverURL: "https://vohzd.com/email"
      }
    },
    methods: {
      async sendMessage(){
        this.buttonText = "Working...";
        try {
          await this.$axios.post(this.serverURL, {
            fromName: this.name,
            fromEmail: this.email,
            toEmail: "<allobon@gmail.com>",
            toName: "Ben",
            subject: "Message from vohzd.com",
            html: this.message
          });
          this.buttonText = "Thanks, sent!";
          setTimeout(() => { this.clear(); }, 1500)
        }
        catch (e){
          this.buttonText = "Error";
          setTimeout(() => { this.clear(); }, 1500)
        }
      },
      clear(){
        this.name = "";
        this.message = "";
        this.email = "";
        this.buttonText = "Send!"
      }
    }
	}

</script>

<style>

  .contact-form input {
    font-family: 'Saira Semi Condensed', sans-serif;
    background: rgba(255,255,255,0.5);
    padding: 16px;
    outline: none;
    border: none;
  }

  .contact-form button {
    font-family: 'Saira Semi Condensed', sans-serif;
    background: rgba(255,255,255,0.75);
    padding: 16px;
    outline: none;
    border: none;
  }

</style>
