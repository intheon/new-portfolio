<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script>
//import "~/static/fonts/fontawesome.js";

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

  .main-header {
    font-size: 122px;
    padding: 0;
    margin: 0;
    opacity: 0.68;
    margin-left: -7px;
  }

  .second-header {
    opacity: 0.88;
    font-size: 32px;
  }

  p {
    font-size: 18px;
  }

  .background-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  .content-wrapper {
    margin-top: 73px;
    margin-left: 73px;
  }

  .scroll-container {
    margin-top: 7vh;
    height: 93vh;
    overflow-y: scroll;
    overflow-x: hidden;
  }

  .flex {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    height: 100vh;
  }

  .colour1 {
    background-color: #d1d5ff;
  }

  .colour2 {
    background-color: #d1edff;
  }

  .colour3 {
    background-color: #ffd1d1;
  }

  .colour4 {
    background-color: #ffe9d1;
  }

  .green {
    background-color: #b0d4aa;
  }

  .orange {
    background: #f6e8d9;
  }

  .purple {
    background-color: #eedef5;
  }

  /*
  .main-text {
    float: left;
    width: 40vw;
    margin-top: 15%;
    margin-left: 30%;
  }
  */

  .main-text {

  }

  .main-text h1 {
    line-height: 72px;
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
    color: rgba(0,0,0,0.7);
    text-decoration: none;
  }

  p a {
    border-bottom: 1px solid rgba(0,0,0,0.2);
  }


  a:hover{
    color: #921d56;
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

  input, button {
    font-family: 'Saira Semi Condensed', sans-serif;
    background: rgba(255,255,255,0.5);
    padding: 16px;
    outline: none;
    border: none;
  }


  .nuxt-link-exact-active {
    color: #552a3f;
    background: rgba(0,0,0,0.03);
  }

  .inline-links {
    position: absolute;
    font-size: 30px;
    right: 0;
    color: white;
    background: rgba(0,0,0,0.8);
    width: 16%;
    text-align: center;
  }

  .link {
    display: inline;
    background: rgba(0,0,0,0.6);
    margin-right: 100px;
    width: 64px;
    height: 64px;
    line-height: 64px;
    float: left;
    border-radius: 50%;
    text-align: center;
  }

  .inline-links a {
    text-decoration: none;
    color: white;
  }

  .inline-links a:hover {
    opacity: 0.7;
    cursor: pointer;
    color: #921d56;
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
