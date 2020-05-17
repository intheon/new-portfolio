<template>
  <section class="background-wrapper colour4">
    <section class="content-wrapper mtx">
      <h2 class="main-header">Bookmarks</h2>
      <p>nothing here...</p>
      <input type="file" @change="parseFiles">
		</section>
  </section>
</template>

<script>
	export default {
    methods: {
      parseFiles(){
        console.log("hello")
        console.log(event)
      }
    }
	}
</script>

<style>

</style>
