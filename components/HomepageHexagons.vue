<template>

  <div class="hexagon-wrapper">

    <div class="hexagon hexagon-one"></div>

    <div class="hexagon hexagon-two hexagon-video">
      <video autoplay playsinline muted loop preload poster="~/assets/img/placeholder.png">
        <source src="~/assets/video/loop.mp4" />
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
  background: linear-gradient(to bottom right, #d5caff, #a8a0b7);
  box-shadow: inset 10px 0px 100px 16px #cdcfec;
  clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
}

.hexagon-one {
  left: 384px;
  top: 0px;
}

.hexagon-two {
  opacity: 0.6
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
