<template>
  <div class="mtx">
    <h1>Blog</h1>
    <div class="blog-posts">

      <div class="row" >
        <div v-html="$md.render(blog)"></div>
      </div>

    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

import parseMD from 'parse-md'

import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters([
      "blogs"
    ])
  },
  data(){
    return {
      blog: "",
      slug: "",
      title: "",
      description: ""
    }
  },
  head () {
    return {
      title: `${this.title} | vohzd.com`,
      meta: [
        { hid: "index-description", name: "description", content: this.description }
      ]
    }
  },
  methods: {
    ...mapActions([
      "getBlogs"
    ]),
    async init(){
      this.slug = window.location.pathname.split("/")[2];
      await this.getBlogs();
      this.blogs.forEach((blog) => {
        const parsed = parseMD(blog);
        if (parsed.metadata.slug === this.slug){
          this.title = parsed.metadata.title;
          this.title = parsed.metadata.description;
          this.blog = parsed.content;
        }
      });
      Prism.highlightAll()
    }
  },
  mounted(){
    this.init();
  },
}
</script>

<style>
  .blog-cta {
    border-bottom: 1px solid;
    padding-bottom: 16px;
  }
</style>
