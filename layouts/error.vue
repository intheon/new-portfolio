<template>
  <section class="background-wrapper colour5">
    <section class="content-wrapper">
      <h1 class="main-header">nope</h1>
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
