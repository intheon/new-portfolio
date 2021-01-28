<template>
  <div class="mtx">
    <h1>Blog</h1>

    <div class="blog-toolbar row mb medium">
      <span>Sort by </span>
      <span class="tags">
        <span class="tag" @click="sortPosts('latest')">Latest</span>
        <span class="tag" @click="sortPosts('oldest')">Oldest</span>
      </span>
    </div>
    <div class="blog-posts">
      <nuxt-link :to="`/blog/${blog.slug}`" class="mbx pad row" v-for="(blog, i) in parsedBlogs" :key="i">
        <article class="blog-cta">
          <h3>{{ blog.title }}</h3>
          <div class="blog-fixed-bottom medium">
            <time>{{ blog.published  | dateFilter }}</time>
          </div>
          <div class="row mt mb">
            {{ blog.description }}
          </div>
          <div class="tags mb">
            <span v-for="tag in blog.tags" class="tag">{{ tag }}</span>
          </div>
        </article>
      </nuxt-link>

    </div>
  </div>
</template>

<script>
import Prism from "prismjs";

import parseMD from 'parse-md';
import parseISO from "date-fns/parseISO";

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
        { hid: "description", name: "description", content: "Useful technical tutorials for DIY DevOps & Full Stack Development" },
        { hid: "keywords", name: "keywords", content: "blog, tutorials" },
      ]
    }
  },
  methods: {
    ...mapActions([
      "getBlogs"
    ]),
    async init(){
      this.blogs.forEach((blog) => {
        let parsed = parseMD(blog).metadata;
            parsed.published = parseISO(parsed.published)
        this.parsedBlogs.push(parsed);
      });
      this.sortPosts("latest")
      Prism.highlightAll()
    },
    sortPosts(direction){
      let sortFn = null;
      direction === "latest" ? sortFn = (a, b) => b.published - a.published : sortFn = (a, b) => a.published - b.published;
      this.parsedBlogs.sort(sortFn)
    }
  },
  mounted(){
    this.init();
  },
  middleware: ["getBlogs"]
}
</script>

<style>
  .blog-cta {
    border-bottom: 1px solid;
    padding-bottom: 16px;
  }
</style>
