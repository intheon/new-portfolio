<template>
  <div class="mtx">
    <div class="row" >
      <div v-html="$md.render(blog)"></div>
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
    }
  },
  mounted(){
    this.init();
  },
}
</script>

<style>

</style>
