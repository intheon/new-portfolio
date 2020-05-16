<template>
  <div class="mtx">
    <h1>Blog</h1>
    <div class="blog-posts">
      <nuxt-link to="/blog/cheaper-heroku" class="mbx row">
        <article class="blog-cta">
          <h3>Cheaper automated deployments (4x cheaper than Heroku)</h3>
          <div class="blog-fixed-bottom">
            <time>8th Feb 2020</time>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link to="/blog/deploy-to-vps" class="mbx row">
        <article class="blog-cta">
          <h3>Docker Part Three: Time to deploy your container live!</h3>
          <div class="blog-fixed-bottom">
            <time>22th June 2019</time>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link to="/blog/provision-vps" class="mbx row">
        <article class="blog-cta">
          <h3>Docker Part Two: How to provision a VPS, install Nginx, and configure SSL.</h3>
          <div class="blog-fixed-bottom">
            <time>18th June 2019</time>
          </div>
        </article>
      </nuxt-link>
      <nuxt-link to="/blog/create-docker-image" class="mbx row">
        <article class="blog-cta">
          <h3>Docker Part One: How to create an image from scratch and upload to Docker Hub</h3>
          <div class="blog-fixed-bottom">
            <time>19th May 2019</time>
          </div>
        </article>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
  export default {
    head () {
      return {
        title: "Blog | vohzd.com",
        meta: [
          { hid: "index-description", name: "description", content: "Useful technical tutorials for DIY DevOps & Full Stack Development" }
        ]
      }
    },
  }
</script>

<style>
  .blog-cta {
    border-bottom: 1px solid;
    padding-bottom: 16px;
  }
</style>
