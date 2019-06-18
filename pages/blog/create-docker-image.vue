<template>
  <section class="background-wrapper colour6">
    <div class="blog-content-wrapper">
      <blog-post />
    </div>
  </section>
</template>

<script>
  import Prism from 'prismjs';

  import BlogPost from "~/components/blog/blog1.vue";

  export default {
    components: {
      "blog-post": BlogPost
    },
    mounted(){
      Prism.highlightAll()
    }
  }


</script>
