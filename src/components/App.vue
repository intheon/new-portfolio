<template>
	<div class="float">
		<nav class="navigation">
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

	.float {
		float: left;
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

	.navigation {
		position: fixed;
		top: 0;
		left: 0;
		float: left;
		z-index: 8888;
		height: 50%;
		padding-top: 473px;
		width: 255px;
		background: #ededed;
	}

	.navigation a {
		padding: 28px;
		float: left;
		line-height: 64px;
		width: calc(100% - 56px);
	}

  .content-area {
		z-index: 100;
		position: relative;
		width: auto;
		padding-left: 542px;
		padding-right: 650px;
		margin-top: 60px;
		letter-spacing: 1px;
  }

	.top-left-image {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 9999;

	}

	a {
		color: #726e6c;
		text-decoration: none;
	}

	a:hover{
		color: #552a3f;
		background: rgba(0,0,0,0.03);
	}

	.router-link-active {
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

		@media(max-width: 1340px){
			.content-area {
				padding-top: 190px;
				padding-left: 420px;
			}
		}

		@media(max-width: 1150px){
			.content-area {
				padding-top: 260px;
				padding-left: 180px;
			}
			.content-area h1 {
				font-size: 37px;
			}
			.content-area h2 {
				font-size: 32px;
			}
			.left-pad {
				padding-left: 380px;
				padding-right: 150px;
			}
		}

		@media(max-width: 1000px){
			.content-area {
				padding-top: 350px;
				padding-left: 100px;
				padding-right: 100px;
			}

			.left-pad {
				padding-left: 310px;
				padding-right: 110px;
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

		@media(max-width: 771px){

			.content-area {
				padding-top: 64px;
			}

			.navigation {
				position: fixed;
				top: 0;
				left: 0;
				float: left;
				z-index: 8888;
				height: 64px;
				padding-top: 0px;
				width: 100%;
				background: #ededed;
			}

			.navigation a {
				padding: 15px;
				float: none;
				width: auto;
			}

			.top-left-image {
				display: none;
			}

			.website-logo {
				display: none;
			}

			.inline-links {
				margin-left: 406px;
			}

			.link {
				margin-right: 16px;
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

		@media(max-width: 540px){

			.content-area h2 {
				font-size: 24px;
			}
			.inline-links {
				margin-left: 240px;
			}

			.link {
				margin-right: 8px;
			}
		}

		@media(max-width: 450px){

			.navigation {
				font-size: 18px;
			}

			.content-area h2 {
				font-size: 18px;
			}
			.inline-links {
				display: none;
				margin-left: 130px;
			}

			.link {
				margin-right: 8px;
			}
		}


</style>
