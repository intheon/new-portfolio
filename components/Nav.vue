<template lang="html">
  <nav class="navigation">
      <nuxt-link to="/" class="blue">
        <span class="nav-image"><img src="~/assets/img/admin.png" class="home-image"/></span><label class="offset-left">Home</label>
      </nuxt-link>
      <nuxt-link to="/about" class="blue">
        <label>About</label>
      </nuxt-link>
      <nuxt-link to="/contact" class="blue">
        <label>Contact</label>
      </nuxt-link>
      <nuxt-link to="/portfolio" class="blue">
        <label>Portfolio</label>
      </nuxt-link>
      <!--
      <nuxt-link to="/blog">
        <i class="fa fa-pencil" aria-hidden="true"></i>
        <span v-show="!isToolbarMinimised">Blog</span>
      </nuxt-link>-->
      <!--
      <nuxt-link to="/git" class="orange">
        <i class="fa fa-briefcase" aria-hidden="true"></i> Git
      </nuxt-link>
      <nuxt-link to="/ut" class="pink">
        <i class="fa fa-briefcase" aria-hidden="true"></i> UT
      </nuxt-link>
      <nuxt-link to="/media" class="turqiouse">
        <i class="fa fa-briefcase" aria-hidden="true"></i> Media
      </nuxt-link>-->
  </nav>
</template>


<style>

  .navigation {
    background: rgba(0,0,0,0.03);
    height: 73px;
    width: 100%;
    position: fixed;
    bottom: 0;
    z-index: 30;
    top: 0;
    display:flex;
  }

  .navigation a {
    padding: 24px;
    display: inline;
    bottom: 0;
    text-decoration: none;
    font-size: 16px;
    position: relative;
    outline: none;
    border:  1px solid rgba(0,0,0,0);
  }


  .navigation a {
    filter: blur(0);
  }

  .navigation:hover a:not(:hover) {
    filter: blur(1px);
  }

  .relative-wrapper {
    position: relative;
  }

  .home-image {
    position: absolute;
    width:70px;
    top: 0;
    left: 0;
  }

  .offset-left {
    padding-left: 72px;
  }

  .navigation a:hover {
    border-bottom:  1px solid rgba(0,0,0,0.1) ;
    border-right:  1px solid rgba(0,0,0,0.1) ;

    cursor: pointer;
    color: #000;
  }

  .nuxt-link-exact-active {
    border-bottom:  1px solid rgba(0,0,0,0.1)  !important;
    border-right:  1px solid rgba(0,0,0,0.1)  !important;

    color: #000;
  }

  .navigation a i {
    width: 32px;
    font-size: 16px;
  }

/*
.blue {
  background: "#25437d";
}
.green {
  background: "#5f8659";
}
.red {
  background: "#a45959";
}
.purple {
  background: "#603b85";
}
.orange {
  background: "#d9aa4f";
}
.pink {
  background: "#e798e6";
}
.turqiouse {
  background: "#CC0000";
}*/


</style>
