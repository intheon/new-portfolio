<template>

  <div class="hexagon">

    <div class="hexagon-wrapper">
      <video autoplay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
        <source src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/ocean-small.webm" />
        <source src="http://thenewcode.com/assets/videos/ocean-small.mp4" />
      </video>
    </div>

    <div class="hexagon2">

    </div>

  </div>


</template>

<script>
export default {
  props: {
    text: String
  }
}
</script>

<style lang="css">


.hexagon-wrapper {
  position: absolute;
  z-index: 1;
  clip-path: polygon(50% 0%, 100% 25%, 100% 74%, 50% 100%, 0% 75%, 0% 25%);
  width:384px;
  height:384px;
  overflow: hidden;

}

.hexagon-wrapper video{
  top: -64px;
  width: 1024px;
  position: absolute;
}

.hexagon2 {
  position: absolute;
  width: 384px;
  height: 221.70px;
  background-color: #c4c8ff;
}

.hexagon2:before,
.hexagon2:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 192px solid transparent;
  border-right: 192px solid transparent;
}

.hexagon2:before {
  bottom: 100%;
  border-bottom: 110.85px solid #c4c8ff;
}

.hexagon2:after {
  top: 100%;
  width: 0;
  border-top: 110.85px solid #c4c8ff;
}

/*
.hexagon {
  position: relative;
  width: 420px;
  height: 242.49px;
  background-color: #9cae82;
  margin-top: 256px;
  margin-left: 768px;
}

.hexagon:before,
.hexagon:after {
  content: "";
  position: absolute;
  width: 0;
  border-left: 210px solid transparent;
  border-right: 210px solid transparent;
}

.hexagon:before {
  bottom: 100%;
  border-bottom: 121.24px solid #9cae82;
}

.hexagon:after {
  top: 100%;
  width: 0;
  border-top: 121.24px solid #9cae82;
}


.video-header {
  height: 200px;
  overflow: hidden;
  margin-left: -32px;
}

.video-header video {
  -webkit-clip-path: url(#clip);
  clip-path: url(#clip);
  width: 768px;
  z-index: 1;
}

.video-header svg text {
  font-weight: 700;
  line-height: 32px;

}

/*


  .video-header video {
    display:inline-block;
    overflow: hidden;
    width: 768px;
  }

  .video-header svg {
  	width:  1024px;
  	position: absolute;
  	left: 0;
  }

  .video-header svg text {

  	font-weight: 700;
  	text-transform: uppercase;
  	font-size: 64px;
  }

  .video-header svg rect {
  	fill: white;
  }

  .video-header svg>rect {
  	mask: url(#mask) unset;
  }
*/

</style>
