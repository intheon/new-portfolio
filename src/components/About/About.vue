<template>
	<div class="content-area-wrapper">
		<div class="big-triangle-wrapping-mask second-bg" v-bind:style="dynamicTriangleOne"></div>
		<section class="content-area left-pad">
			<h1>About</h1>
			<p>I've been doing web development stuff for a good 10/11 years now.</p>
			<p>I have returned from the land of Vietnam, having been traveling there over the previous 2 months, and have just returned.</p>
			<p>My recent interests are blockchain technology, and how proof-of-work can be used to authenticate transactions such as publishing events.</p>
			<p>Professionally, I recently worked for a digital publishers called YUDU Media. 4+ Years in Operations &amp; 2+ years in Account Management/Customer Liasion.</p>
			<p>I have a solid understanding of full stack JS inc. building apps which utilise tech like websockets, oAuth/SSO, ES6 syntax, SaSS, and all the other latest and greatest ways of getting an app deployed.</p>
		</section>

	</div>
</template>

<script>

	export default {
		data() {
			return {
				numberOne: 99,
				display: "none",
			}
		},
		computed: {
			dynamicTriangleOne(){
				return {
					"clip-path": `polygon(0% 0%, ${this.numberOne}% 0%, 0% ${this.numberOne}%)`
				}
			}
		},
		mounted(){
			setInterval(() => {
				this.numberOne = Math.floor(Math.random()*(100-97)+97);
			}, 2500);
		}
	}
</script>

<style lang="scss">



</style>
