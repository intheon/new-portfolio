<template>
  <section class="background-wrapper colour6">
    <div class="content-wrapper">
      <h1 class="main-header">blog</h1>
      <h2 class="second-header">Goings on in tech</h2>
      <section class="blog-posts">
        <nuxt-link to="/blog/docker-part-one-express-image">
          <article class="blog-cta">
            <h3>Docker Part One: How to create an image from scratch and upload to Docker Hub</h3>
          </article>
        </nuxt-link>
        <nuxt-link to="/blog/docker-part-two-deploy-to-vps">
          <article class="blog-cta">
            <h3>Docker Part Two: How to put online to a VPS</h3>
          </article>
        </nuxt-link>
      </section>
    </div>
  </section>
</template>

<script>


</script>

<style>

  .blog-posts {
    margin-left: -7px;
  }

  .blog-cta {
    background: rgba(255,255,255,0.6);
    width: 256px;
    height: 128px;
    margin: 8px;
    display: inline-block;
    padding: 16px;
    font-size: 18px;
    position: relative;
    transition: all 0.4s;
  }

  .blog-cta:hover {
    opacity: 0.7;
  }

  .blog-cta h3 {
    bottom: 16px;
    position: absolute;
  }

</style>
