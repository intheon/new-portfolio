<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper">
      <blog-post />
    </div>
  </section>
</template>

<script>
  import Prism from 'prismjs';

  import BlogPost from "~/components/blog/blog2.vue";

  export default {
    components: {
      "blog-post": BlogPost
    },
    mounted(){
      Prism.highlightAll()
    },
    head () {
      return {
        title: "Provision a VPS | vohzd.com",
        meta: [
          { hid: "provision-description", name: "description", content: "How to provision a VPS" }
        ]
      }
    },
  }

</script>
