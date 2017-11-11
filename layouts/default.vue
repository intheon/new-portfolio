<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script>
import Nav from '~/components/Nav.vue'
export default {
  components: {
    'navigation-bar': Nav
  }
}
</script>

<style>


  html, body {
    margin: 0;
    padding: 0;
  }

  body {
    background: #ffffff;
    color: #1a130d;
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 24px;
		overflow-x: hidden;
		overflow-y: scroll;
  }

  h1, h2, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: #3b1329;
  }

  h3 {
    margin: 0;
    padding: 0;
    color: #4a1f35;
  }

  h1 {
    font-size: 58px;
    margin-bottom: 32px;
    position: relative;
    float: left;
    width: calc(100% + 36px);
    margin-left: -32px;
    margin-top: -32px;
    background: rgba(15, 4, 10, 0.74);
    border-top-right-radius: 32px;
    padding-left: 28px;
  }

  h1, h2 {
    letter-spacing: 2px;
  }

  p {
    font-size: 18px;
  }
  .overlay {
    position: relative;
    z-index: 500;
    margin-left: 587px;
    margin-top: 212px;
    width: calc(100vw - 1075px);
    height: 100%;
    float: left;
    background: rgba(0,0,0,0.95);
    border-top-right-radius: 32px;
    border-bottom-left-radius: 32px;
    box-shadow: 2px 2px 2px 2px ;
    padding: 32px;
    color: rgba(255,255,255,0.8);
    -webkit-box-shadow: inset 0px 0px 100px -6px rgba(0,0,0,0.9);
    -moz-box-shadow: inset 0px 0px 100px -6px rgba(0,0,0,0.9);
    box-shadow: inset 0px 0px 100px -6px rgba(0,0,0,0.9);
  }

  .about-img {
    float: left;
    background: url("~assets/img/home.jpg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: absolute;
  }

  .home-img {
    float: left;
    background: url("~assets/img/home.jpg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: absolute;
  }

  .portfolio-img {
    float: left;
    background: url("~assets/img/home.jpg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: fixed;
  }

  .blog-img {
    float: left;
    background: url("~assets/img/home.jpg");
    width: 100vw;
    height: 100vh;
    background-size: cover;
    position: fixed;
  }

  a {
    color: #726e6c;
    text-decoration: none;
  }

  a:hover{
    color: #552a3f;
    background: rgba(0,0,0,0.03);
  }

  p, ul {
    font-size: 17px;
  }

  ul {
    margin: 0;
    padding: 0;
    margin-left: 20px;
    margin-top: 42px;
    margin-bottom: 64px;
  }

  li {
    list-style-type: circle;
    margin-bottom: 20px;
    font-size: 16px;
  }

  .nuxt-link-active {
    color: #552a3f;
    background: rgba(0,0,0,0.03);
  }

  .inline-links {
    float: left;
    position: absolute;
    margin-left: 408px;
    margin-top: 89px;
    font-size: 42px;
    width: 50%;
    color: white;
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

  .count {
    font-size: 64px;
    position: absolute;
    margin-left: -212px;
    color: rgba(255,255,255,0.2);
    margin-top: 100px;
    background: rgba(0,0,0,0.45);
    line-height: 128px;
    text-align: center;
    width: 128px;
    height: 128px;
    border-radius: 50%;
  }

  @media (max-width: 1500px){
    .overlay {
      margin-left: 512px;
      margin-top: 128px;
      width: calc(100vw - 800px);
    }
  }

  @media (max-width: 1200px){
    .overlay {
      margin-left: 384px;
      margin-top: 128px;
      width: calc(100vw - 650px);
    }

    .count {
      display: none;
    }

    .link {
      margin-right: 55px;
    }

    .inline-links {
      margin-left: 290px;
    }

    .blc-shorten {
      content: 'BLC';
    }
  }

  @media (max-width: 1000px){
    .overlay {
      margin-left: 256px;
      margin-top: 128px;
      width: calc(100vw - 512px);
    }

    h1 {
      font-size: 30px;
    }

  }

  @media (max-width: 800px){
    .overlay {
      margin-left: 156px;
      margin-top: 64px;
      width: calc(100vw - 256px);
    }

    h1 {
      font-size: 24px;
    }

    p {
      font-size: 14px;
    }

  }


</style>
