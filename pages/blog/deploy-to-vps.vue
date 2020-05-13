<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper mtx row">
      <blog-post />
    </div>
  </section>
</template>

<script>
  import Prism from 'prismjs';

  import BlogPost from "~/components/blog/blog3.vue";

  export default {
    components: {
      "blog-post": BlogPost
    },
    mounted(){
      Prism.highlightAll()
    },
    head () {
      return {
        title: "Deploy Docker Image | vohzd.com",
        meta: [
          { hid: "deploy-docker-description", name: "description", content: "How to get your Docker container live on the internet" }
        ]
      }
    },
  }

</script>
