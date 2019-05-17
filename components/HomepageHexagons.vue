<template>

  <div class="hexagon-wrapper">

    <div class="hexagon hexagon-one"></div>

    <div class="hexagon hexagon-two hexagon-video">
      <video autoplay playsinline muted loop preload poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/oceanshot.jpg">
        <source src="~/assets/video/skate.mp4" />
      </video>
    </div>

    <div class="hexagon hexagon-three"></div>


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
  top:25%;
  left: 40%;
  position: absolute;
}

.hexagon {
  position: absolute;
  width: 384px;
  height: 384px;
  background-color: #c4c8ff;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hexagon-one {
  left: 384px;
  top: 0px;
}

.hexagon-two {

}

.hexagon-three {
  left: -192px;
  top: 288px;
}

.hexagon-video video {
  height:512px;
  top: -64px;
  position: absolute;
}

</style>
