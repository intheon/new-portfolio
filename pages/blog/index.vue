<template>
  <section class="background-wrapper colour6">
    <div class="content-wrapper">
      <h1 class="main-header">blog</h1>
      <section class="blog-posts">
        <nuxt-link to="/blog/cheaper-heroku">
          <article class="blog-cta">
            <h3>Cheaper automated deployments (4x cheaper than Heroku)</h3>
            <div class="blog-fixed-bottom">
              <time>8th Feb 2020</time>
            </div>
          </article>
        </nuxt-link>
        <nuxt-link to="/blog/deploy-to-vps">
          <article class="blog-cta">
            <h3>Docker Part Three: Time to deploy your container live!</h3>
            <div class="blog-fixed-bottom">
              <time>22th June 2019</time>
            </div>
          </article>
        </nuxt-link>
        <nuxt-link to="/blog/provision-vps">
          <article class="blog-cta">
            <h3>Docker Part Two: How to provision a VPS, install Nginx, and configure SSL.</h3>
            <div class="blog-fixed-bottom">
              <time>18th June 2019</time>
            </div>
          </article>
        </nuxt-link>
        <nuxt-link to="/blog/create-docker-image">
          <article class="blog-cta">
            <h3>Docker Part One: How to create an image from scratch and upload to Docker Hub</h3>
            <div class="blog-fixed-bottom">
              <time>19th May 2019</time>
            </div>
          </article>
        </nuxt-link>
      </section>
    </div>
  </section>
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
