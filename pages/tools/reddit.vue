<template>
  <section class="background-wrapper colour2">
    <section class="content-wrapper flex pad">
      <section class="c50">
        <h2 class="second-header mb">reddit exporter</h2>
        <!--<input v-model="user" placeholder="reddit username" class="mr" /><button @click="go">{{ buttonText }}</button>-->

        <span v-if="!token">
          <a href="https://www.reddit.com/api/v1/authorize?client_id=834_wrFhMNGjkQ&response_type=code&state=1235323&redirect_uri=http://localhost:3000/tools/reddit&scope=history">Click here to grant access</a>
        </span>
        <span v-else>
          <button @click="getSavedPosts">Get Saved posts</button>
        </span>

        <div class="row mt">
          {{ output }}
        </div>
      </section>
    </section>
  </section>

</template>

<script>
	export default {
    data(){
      return {
        token: null,
        output: null
      }
    },
    methods: {
      init(){
        let q = window.location.search;
        if (q){
          this.token = q.split("code=")[1]
        }
      },
      async getSavedPosts(){
        try {

          /*
          this.$axios.onRequest(config => {
            config.headers.common['Authorization'] = `Bearer ${this.token}`;
          })*/
          const { data } = await this.$axios.$get("https://reddit.com/api/v1/me", {
            withCredentials: true,
            headers: { "authorization": `Bearer ${this.token}` }
          });
          console.log(data)
        }
        catch (e){
          console.log("wtf")
          console.log(e)
        }

      }
    },
    mounted(){
      this.init();
    }
	}
</script>

<style>


</style>
