<template>
  <div class="mtx">
    <h1>Blog</h1>
    <div class="blog-posts">

      <nuxt-link :to="`/blog/${blog.slug}`" class="mbx pad row" v-for="blog in parsedBlogs">
        <article class="blog-cta">
          <h3>{{ blog.title }}</h3>
          <div class="">
            {{ blog.description }}
          </div>
          <span v-for="tag in blog.tags">{{ tag }}</span>
          <div class="blog-fixed-bottom">
            <time>{{ blog.published }}</time>
          </div>
        </article>
      </nuxt-link>

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
      parsedBlogs: []
    }
  },
  head () {
    return {
      title: "Blog | vohzd.com",
      meta: [
        { hid: "index-description", name: "description", content: "Useful technical tutorials for DIY DevOps & Full Stack Development" }
      ]
    }
  },
  methods: {
    ...mapActions([
      "getBlogs"
    ]),
    async init(){
      await this.getBlogs();

      this.blogs.forEach((blog) => {
        this.parsedBlogs.push(parseMD(blog).metadata);
      });


      Prism.highlightAll()

    }
  },
  mounted(){
    this.init();
  }
}
</script>

<style>
  .blog-cta {
    border-bottom: 1px solid;
    padding-bottom: 16px;
  }
</style>
