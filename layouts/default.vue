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
    font-family: 'Saira Semi Condensed', sans-serif;
    font-size: 24px;
  }

  h1, h2, h4, h5, h6 {
    margin: 0;
    padding: 0;
    color: #090311;
  }

  h3 {
    margin: 0;
    padding: 0;
    color: #4a1f35;
  }

  .site-identity {
    font-size: 122px;
    padding: 0;
    margin: 0;
  }

  p {
    font-size: 18px;
  }


  .main-content {
    width: 100vw;
    height: 100vh;
    position: fixed;

  }

  .scroll-container {
    margin-top: 7vh;
    height: 93vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }



  .blue {
    background-color: #e5edf4;
    background-image: url("~/assets/img/city.png");
    background-size: cover;
  }

  .green {
    background-color: #b0d4aa;
    background-image: url("~/assets/img/forest.png");
    background-size: cover;
  }

  .orange {
    background: #f6e8d9;
    background-image: url("~/assets/img/blog.png");
    background-size: cover;
  }

  .purple {
    background-color: #eedef5;
    background-image: url("~/assets/img/museum.png");
    background-size: cover;
  }

  .main-text {
    float: left;
    width: 40vw;
    margin-top: 15%;
    margin-left: 30%;
  }

  .main-text h1 {
    line-height: 60px;
    margin-right: 8px;
    letter-spacing: 2px;
  }

  .about-social-links{
    margin: 0;
    padding: 0;
    margin-bottom: 32px;
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


  a {
    color: #726e6c;
    text-decoration: none;
  }

  p a {
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }


  a:hover{
    color: #552a3f;
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

  .nuxt-link-exact-active {
    color: #552a3f;
    background: rgba(0,0,0,0.03);
  }

  .inline-links {
    float: left;
    position: absolute;
    margin-left: 386px;
    margin-top: 0px;
    font-size: 42px;
    width: 50%;
    color: white;
  }

  .link {
    display: inline;
    background: rgba(0,0,0,0.04);
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
    color: rgba(0,0,0,0.1);
    margin-top: 100px;
    background: rgba(0,0,0,0.02);
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
