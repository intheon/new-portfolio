<template>
	<div>
    <div>
			<div class="big-triangle-wrapping-mask first-bg" v-bind:style="dynamicTriangleOne"></div>
      <section class="content-area home">
        <h1>Howdy!</h1>
        <p>I'm Ben, developer of internets.</p>
        <p>I focus on building web-based apps - Projects to help make sense of large datasets and make them look aesthetically ace.</p>
        <p>The Open Source community is an amazing asset, and I hope to give back by releasing constantly developed tools on my Github.</p>
        <p>I'm currently freelancing and looking for work, so please take a look at my portfolio, or drop me a line on my contact page :D<span v-bind:style="blink">_</span></p>
      </section>
		</div>
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
      blink(){
        return {
          "display": this.display
        }
      },
      dynamicTriangleOne(){
        return {
          "clip-path": `polygon(0% 0%, ${this.numberOne}% 0%, 0% ${this.numberOne}%)`
        }
			}
    },
    name: "app",
    mounted(){
      setInterval(() => {
        this.numberOne = Math.floor(Math.random()*(100-97)+97);
      }, 2500);
      setInterval(() => {
        this.numberTwo = Math.floor(Math.random()*(130-117)+117);
        this.numberThree = Math.floor(Math.random()*(9-6)+6);
        this.numberFour = Math.floor(Math.random()*(8-4)+4);
        this.numberFive = Math.floor(Math.random()*(40-38)+38);
      }, 1900);
      setInterval(() => {
          if (this.display == "inline") this.display = "none";
          else this.display = "inline";
      }, 800);
    }
	}
</script>

<style lang="scss">

$background: #ffffff;
$fontColour: #575c64;


  .nav-item-link:nth-child(even) {
    background: purple;
  }

  .nav-item-link:nth-child(even) {
    background: purple;
  }




  .inline-links {
    float: left;
    position: absolute;
    margin-left: 384px;
    margin-top: -8px;
    font-size: 20px;
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
    color: $fontColour;
    text-decoration: none;
  }

  .link:hover {
    opacity: 0.7;
    cursor: pointer;
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

	.tooltip {
	  display: none;
	  opacity: 0;
	  transition: opacity .15s;
	  pointer-events: none;
	  padding: 4px;
	  z-index: 10000;

	  .tooltip-content {
	    background: black;
	    color: white;
	    border-radius: 8px;
	    padding: 8px;
			font-size: 16px;
	  }

	  &.tooltip-open-transitionend {
	    display: block;
	  }

	  &.tooltip-after-open {
	    opacity: 1;
	  }
	}


</style>
