<template>
	<div>

		<div class="website-logo">
			<span class="logo-name">vohzd</span>
			<span class="logo-tagline">software</span>
		</div>

		<nav class="top-right-nav">
			<router-link to="/home">Home</router-link>
			<router-link to="/about">About</router-link>
			<!--<router-link to="/blog">Blog</router-link>-->
			<router-link to="/portfolio">Portfolio</router-link>
		</nav>
		<transition name="fade" mode="out-in">
			<router-view></router-view>
		</transition>
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
  $fontColour: #1a130d;
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
    margin-bottom: 32px;
    font-size: 74px;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 32px;
  }

  h1, h2 {
    letter-spacing: 2px;
  }

	.top-right-nav {
		position: absolute;
		top: 0;
		right: 0;
		margin-top: 42px;
    margin-right: 37px;
	}

	.top-right-nav  a{
		margin-right: 32px;
	}

	.router-link-active {
		border-bottom: 1px solid;
		color: #9d7660;
	}


	  .content-area {
			z-index: 100;
			min-height: calc(100vh - 130px);
			position: relative;
			background: rgba(26, 19, 13, 0.06);
			width: auto;
			padding-left: 630px;
			padding-right: 650px;
			margin-top: 128px;
			border-top: 1px solid rgba(26, 19, 13, 0.1);
			border-bottom: 1px solid rgba(26, 19, 13, 0.1);
			text-align: justify;
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
			z-index: 200;
		}

		a {
			color: #726e6c;
			text-decoration: none;
		}

		a:hover{
			color: #82718e;
		}

		.website-logo {
			top: 0;
			left: 0;
			position: absolute;
			z-index: 900;
			margin:32px;
			width: 200px;
		}

		.website-logo .logo-name {
			display: block;
			color: white;
			line-height: 12px;
			font-size: 25px;
			color: #552a3f;

		}

		.website-logo .logo-tagline {
			display: block;
			font-size: 14px;
			color: white;
			letter-spacing: 1px;
			line-height: 28px;
			margin-left: 3px;
			text-align: justify;
			color: #5f4140;
		}

		.fade-enter-active, .fade-leave-active {
	  	transition: opacity .4s ease;
		}
		.fade-enter, .fade-leave-active {
		  opacity: 0
		}



		@media(max-width: 1700px){
			.content-area {
				padding-left: 200px;
				padding-right: 200px;
			}

			.home {
				padding-left: 600px;
			}
		}

		@media(max-width: 1240px){
			.big-triangle-wrapping-mask {
				width: 650px;
				height: 800px;
			}
		}

		@media(max-width: 1150px){
			.content-area {
				padding-left: 150px;
			}
			.big-triangle-wrapping-mask {
				width: 450px;
				height: 600px;
			}
			.home {
				padding-left: 380px;
				padding-right: 150px;
			}
		}

		@media(max-width: 1000px){
			.content-area {
				padding-left: 100px;
				padding-right: 100px;
			}

			.home {
				padding-left: 310px;
				padding-right: 110px;
			}
			.big-triangle-wrapping-mask {
				width: 350px;
				height: 500px;
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
				display: none;
				width: 228px;
				height: 382px;
				right: 150px;
			}

		}

		@media(max-width: 700px){
			.big-triangle-wrapping-mask {
				display: none;
			}
			.content-area {
				padding-left: 50px;
				padding-right: 50px;
			}

			.content-area h1 {
				font-size: 24px;
			}

			.content-area p {
				font-size: 17px;
			}
		}


</style>
