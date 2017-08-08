<template>
	<div>
    <div class="content-area-wrapper">
			<div class="big-triangle-wrapping-mask" v-bind:style="dynamicTriangleOne"></div>
      <section class="content-area">
        <h1>Howdy!</h1>
        <p>I'm Ben, developer of internets.</p>
        <p>I focus on building web-based apps, mostly centered around dashboards and tools.</p>
        <p>Building cross-platform is one of my strengths, as i do that in both my day job and for projects.</p>
        <p>Take a look at my portfolio to see some of my work, or drop me a line and I'll get right back to you!<span v-bind:style="blink">_</span></p>
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
  /*
    .background-triangle-left {
      width: 1200px;
      height: 1200px;
      display: inline-block;
      float: left;
      z-index: 100;
      background: white;
      position: fixed;
      top: -1300px;
      left: -900px;
      transform: rotate(-45deg);
    }

    */

  .background-triangle-right {
    width: 1700px;
    height: 1100px;
    display: inline-block;
    float: right;
    z-index: 100;
    background: white;
    position: fixed;
    transform: rotate(40deg);
    top: -600px;
    right: -1000px;
  }

  .nav-item-link:nth-child(even) {
    background: purple;
  }

  .nav-item-link:nth-child(even) {
    background: purple;
  }

  .portfolio-wrapping {
    width: 388px;
    height: 412px;
    z-index: 5;
    position: absolute;
    transition: 1s all;
    transition-timing-function: cubic-bezier;
		right: 3px;

  }

  .portfolio-content {
    z-index: 7;
    margin-bottom: 512px;
    padding-right: 380px;
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



  .skate {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/skate.png");
    background-size: cover;
  }

  .ed {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/ed.jpg");
    background-size: cover;
  }

  .springboard {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/springboard.png");
    background-size: cover;
  }

  .twitter {
    shape-outside: polygon(110% 0%, 10% 50%, 90% 70%);
    background: url("../../assets/img/twitter.png");
    background-size: cover;
  }

	.snap-scrolling-toggle-link {
		position: fixed;
		right: 0;
		top: 0;
		font-size: 24px;
		background: none;
		outline: none;
		border: none;
		margin: 16px;
		margin-right: 64px;
		z-index: 6000;
	}




  .portfolio-item {
    margin-bottom: 512px;
  }

  p, ul {
    font-size: 24px;
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
