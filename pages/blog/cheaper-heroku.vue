<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper pb mtx row">
      <blog-post></blog-post>
    </div>
  </section>
</template>

<script>
  import Prism from 'prismjs';

  import BlogPost from "~/components/blog/blog4.vue";

  export default {
    components: {
      "blog-post": BlogPost
    },
    mounted(){
      Prism.highlightAll()
    },
    head () {
      return {
        title: "Cheaper Heroku | vohzd.com",
        meta: [
          { hid: "index-description", name: "description", content: "A cheaper way to do automate Docker deployments" }
        ]
      }
    },
  }

</script>
