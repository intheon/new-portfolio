<template>
  <section class="background-wrapper colour5">
    <section class="content-wrapper">
      <h2 class="second-header mb">nope</h2>
      <span class="error-message">{{ error.message }}</span>
      <img src="~/assets/img/404.png" />
		</section>
  </section>
</template>

<script>
  export default {
    props: ["error"]
  }
</script>

<style>
  .error-message {
    width: 100%;
    display: inline-block;
    margin-top: 32px;
    margin-bottom: 32px;
  }
</style>
