<template>
	<div class="float">
		<nav class="navigation">
			<router-link to="/home">
				<div class="website-logo">
					<img src="../assets/img/admin.png" class="me"/>
					<span class="logo-name">vohzd<span class="logo-tagline">software</span></span>
				</div>
			</router-link>
			<router-link to="/about">About</router-link>
			<router-link to="/blog">Blog</router-link>
			<router-link to="/portfolio">Portfolio</router-link>
		</nav>

		<router-view></router-view>
	</div>
</template>

<script>
export default {
}
</script>

<style lang="sass">

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
		height: 100vh;
		padding-top: 25%;
		width: 255px;
		background: rgba(237, 237, 237, 0.9);
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
		letter-spacing: 1px;
		padding-top: 12%;
  }

	.bg-image img{
		position: fixed;
		z-index: 1;
		overflow-y: hidden;
		overflow-x: hidden;
		margin: 0;
		padding: 0;
		width: 100%;
		float: left;
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
		color: #552a3f;
		line-height: 63px !important;
		background: rgba(0,0,0,0.03);

	}

	.website-logo {
		float: left;
	}

	.website-logo img {
		float: left;
	}

	.website-logo .logo-name {
		line-height: 64px;
		font-size: 22px;
		text-align: center;
		float: left;
		width: 44%;
	}

	.website-logo .logo-tagline {
		font-size: 12px;
		letter-spacing: 1px;
		line-height: 0px;
		margin-left: 17px;
		text-align: center;
		color: #5f4140;
		margin-top: -21px;
		float: left;
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
