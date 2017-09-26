<template>
	<div>
		<nav class="top-left-nav">
			<router-link to="/home">Home</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/blog">Blog</router-link>
			<router-link to="/portfolio">Portfolio</router-link>
		</nav>
		<div class="website-logo">
			<span class="logo-name">vohzd</span>
			<span class="logo-tagline">software</span>
		</div>
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
					"clip-path": `polygon(0% 0%, ${this.numberOne}% 0%, 0% 210%)`
				}
			}
		},
		mounted(){
			setInterval(() => {
				this.numberOne = Math.floor(Math.random()*(100-92)+92);
			}, 2500);
		}
	}
</script>

<style lang="scss">

  $background: #ffffff;
  $fontColour: #1a130d;
	$headerColour: #552a3f;
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
		overflow-y:scroll;
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
		color: $headerColour;
  }

  h2 {
    font-size: 44px;
    margin-bottom: 32px;
  }

  h1, h2 {
    letter-spacing: 2px;
  }

	.top-left-nav {
		position: fixed;
		top: 0;
		left: 0;
		float: left;
		z-index: 8888;
	}

	.top-left-nav a {
		padding: 28px;
		float: left;
		line-height: 64px;
		background: rgba(0,0,0,0.3);
	}

  .content-area {
		z-index: 100;
		position: relative;
		width: auto;
		padding-left: 630px;
		padding-right: 650px;
		padding-top: 100px;
		margin-top: 100px;
		letter-spacing: 1px;
  }


		a {
			color: #726e6c;
			text-decoration: none;
		}

		a:hover{
			color: #552a3f;
			background: rgba(0,0,0,0.08);
		}


		.router-link-active {

			border-bottom: 1px inset;
			color: #9d7660;
			line-height: 63px !important;

		}

		.website-logo {
			top: 0;
	    right: 0;
	    position: fixed;
	    z-index: 900;
	    margin: 32px;
	    width: 96px;
	    height: 96px;
	    line-height: 96px;
	    border-radius: 50%;
			background: rgba(255,255,255,0.6);
		}

		.website-logo .logo-name {
			display: block;
			line-height: 77px;
			font-size: 25px;
			color: $headerColour;
			text-align: center;
		}

		.website-logo .logo-tagline {
			display: block;
			font-size: 14px;
			letter-spacing: 1px;
			line-height: 0px;
			margin-left: 3px;
			text-align: center;
			color: #5f4140;
			margin-top: -21px;
		}

		.slide-left-enter-active, .slide-left-leave-active {
	  	transition: all 0.6s ease-out;
		}
		.slide-left-enter, .slide-left-leave-active {
			margin-left:-3000px;
		}

		.big-triangle-wrapping-mask {
			width: 750px;
			height: 900px;
			shape-outside: polygon(0% 0%, 92% 0%, 0% 210%);
			margin-right: 256px;
			transition: 1s all;
			position: fixed;
			top: 0;
			left: 0;
			z-index: 200;
		}

		.first-bg {
			background: url("../assets/img/bg.jpg");
			background-size: cover;
		}

		.second-bg {
			background: url("../assets/img/about.jpg");
			background-size: cover;
			background-position: center;
		}

		.third-bg {
			background: url("../assets/img/portfolio.jpg");
			background-size: cover;
			background-position: center;

		}



		@media(max-width: 1700px){
			.content-area {
				padding-left: 200px;
				padding-right: 200px;
			}

			.left-pad {
				padding-left: 600px;
			}

			.portfolio-wrapping {
				display: none;
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
			.left-pad {
				padding-left: 380px;
				padding-right: 150px;
			}
		}

		@media(max-width: 1000px){
			.content-area {
				padding-left: 100px;
				padding-right: 100px;
			}

			.left-pad {
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
