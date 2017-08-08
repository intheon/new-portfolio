<template>
	<div>
		<nav class="top-right-nav">
			<router-link to="/">Home</router-link>
			<router-link to="/about">About</router-link>
			<!--<router-link to="/blog">Blog</router-link>-->
			<router-link to="/portfolio">Portfolio</router-link>
		</nav>
		<router-view></router-view>
	</div>
</template>

<script>

	export default {
		data() {
			return {
				numberOne: 99,
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

  $background: #ffffff;
  $fontColour: #575c64;
  $masterFont: "Saira Semi Condensed", sans-serif;


  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: $background;
    color: $fontColour;
    font-family: $masterFont;
    font-size: 24px;
		overflow-x: hidden;
  }

  .blink {
    font-size: 12px;
  }

  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    padding: 0;
  }

  h1 {
    margin-bottom: 64px;
    font-size: 80px;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 48px;
  }

  h1, h2 {
    letter-spacing: 4px;
  }

	.top-right-nav {
		position: absolute;
		top: 0;
		right: 0;
		margin: 16px;
	}

	.content-area-wrapper {
		z-index: 100;
		background: white;
	}


	  .content-area {
	    margin: 128px;
			margin-left: 650px;
			height: 100vh;
			z-index: 100;
			position: relative;
			padding: 16px;
			background: rgba(255,255,255,0.85);
	  }

		.big-triangle-wrapping-mask {
			width: 750px;
			height: 900px;
			//shape-outside: polygon(0% 0%, 100% 0%, 0% 120%);
			margin-right: 256px;
			background: url("../assets/img/bg.jpg");
			background-size: cover;
			transition: 1s all;
			position: absolute;
			top: 0;
			left: 0;
		}

		a {
			color: #9d7660;
			text-decoration: none;
		}

		a:hover{
			color: #82718e;
		}

		@media(max-width: 1240px){
			.big-triangle-wrapping-mask {
				width: 650px;
				height: 800px;
			}
		}

		@media(max-width: 1150px){
			.content-area {
				margin-left: 250px;
			}
		}

		@media(max-width: 1000px){
			.content-area {
				margin-left: 200px;
			}
			.big-triangle-wrapping-mask {
				width: 550px;
				height: 700px;
			}

			.content-area h1 {
				font-size: 35px;
			}

			.content-area p {
				font-size: 18px;
			}

			.portfolio-content {
				padding-right: 0px;
			}

			.portfolio-wrapping {
				margin-top: -400px;
				width: 228px;
				height: 382px;
				right: 150px;
			}

		}

		@media(max-width: 700px){

			.content-area {
				margin-left: 100px;
			}

			.content-area h1 {
				font-size: 24px;
			}

			.content-area p {
				font-size: 17px;
			}
		}


</style>
