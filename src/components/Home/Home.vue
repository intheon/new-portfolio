<template>
	<div>
		<div class="top-left-image">
			<img src="../../assets/img/home.png">
		</div>
    <section class="content-area left-pad">
      <h1>Howdy!</h1>
      <p>I'm Ben, developer of internets.<img src="../../assets/img/admin.png" class="me"></p>
      <p>I focus on building web-based apps - Projects to help make sense of large datasets and make them look aesthetically ace.</p>
      <p>I'm currently freelancing, so could very well help you if you've got something in the works.</p>
			<p>Check out my <router-link to="/portfolio">portfolio</router-link> for projects I've recently done for both clients and myself. :D<span v-bind:style="blink">_</span></p>
			<ul class="about-social-links">
				<a href="https://github.com/vohzd" target="_blank"><li><i class="fa fa-github" aria-hidden="true"></i></li></a>
				<a href="https://angel.co/vohzd" target="_blank"><li><i class="fa fa-angellist" aria-hidden="true"></i></i></li></a>
				<a href="https://www.linkedin.com/in/benjamin-n-smith" target="_blank"><li><i class="fa fa-linkedin" aria-hidden="true"></i></i></li></a>
				<a href="https://stackoverflow.com/users/3609943/vohzd" target="_blank"><li><i class="fa fa-stack-overflow" aria-hidden="true"></i></li></a>
				<a href="https://twitter.com/vohzd" target="_blank"><li><i class="fa fa-twitter" aria-hidden="true"></i></i></li></a>
			</ul>
    </section>
	</div>
</template>

<script>
export default {
  data() {
    return {
      display: "none"
    }
  },
  computed: {
    blink(){
      return {
        "display": this.display
      }
    }
  },
  mounted(){
    setInterval(() => {
        if (this.display == "inline") this.display = "none";
        else this.display = "inline";
    }, 800);
  }
}
</script>

<style lang="sass">

$background: #ffffff;
$fontColour: #575c64;

  .inline-links {
    float: left;
    position: absolute;
    margin-left: 406px;
    margin-top: -8px;
    font-size: 20px;
		width: 50%;
  }

  .link {
    display: inline;
    background: rgba(0,0,0,0.1);
    margin-right: 100px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    float: left;
    border-radius: 50%;
    text-align: center;
  }

  .inline-links a {
    color: #552a3f;
    text-decoration: none;
  }

  .link:hover {
    opacity: 0.7;
    cursor: pointer;
  }

	.about-social-links{
		margin: 0;
		padding: 0;
	}

	.about-social-links li {
		list-style: none;
		display: inline;
		font-size: 24px;
		padding-right: 16px;
	}

	.about-social-links a:hover{
		background: none;
		color: #552a3f;
	}

	.me {
		width: 64px;
		height: 64px;
		border-radius: 50%;
		margin-top: -64px;
		margin-left: 32px;
	}

  .large {
    font-size: 48px;
  }

  .small {
    font-size: 42px;
  }

  p, ul {
    font-size: 21px;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    margin-top: 128px;
  }

  li {
    list-style-type: circle;
    margin-bottom: 20px;
    font-size: 16px;
  }

</style>
