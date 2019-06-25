<template>
  <div>
    <navigation-bar />
    <nuxt />
  </div>
</template>

<script>
//import "~/static/fonts/fontawesome.js";
import "~/node_modules/prismjs/themes/prism-twilight.css"

import Nav from "~/components/Nav.vue"
export default {
  components: {
    "navigation-bar": Nav
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
    font-family: "Stylish";
    font-size: 28px;
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
    font-size: 100px;
    padding: 0;
    margin: 0;
    opacity: 0.68;
    margin-left: -7px;
    margin-top: 32px;
    display: inline-block;
  }

  .second-header {
    opacity: 0.88;
    font-size: 44px;
    margin-top: 64px;
    display: inline-block;
    width: 100%;
  }

  .background-wrapper {
    width: 100vw;
    height: 100vh;
    position: fixed;
  }

  .content-wrapper {
    margin-top: 73px;
    margin-left: 73px;
    z-index: 2;
    position: relative;
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

  .colour5 {
    background-color: #ffa6a6;
  }

  .colour6 {
    background-color: #f6edce;
  }

  .gradient1 {
    background: linear-gradient(to bottom right, #d1d5ff, #ebeaec);
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

  .mt {
    margin-top: 64px;
  }
  .ml {
    margin-left: 64px;
  }
  .mb {
    margin-bottom: 32px;
  }

  .c50 {
    width: 50%;
  }

  a, .eva {
    color: rgba(0,0,0,0.4);
    text-decoration: none;
    transition: 0.4s all;
  }

  a:hover, .eva:hover{
    color: #921d56;
    fill: #921d56;
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
    font-family: "Stylish";
    background: rgba(255,255,255,0.5);
    padding: 16px;
    outline: none;
    border: none;
  }

  .absolute {
    position: absolute;
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

  .blog-posts {
    margin-left: -7px;
  }

  .blog-cta {
    background: rgba(255,255,255,0.6);
    width: 384px;
    min-height: 200px;
    vertical-align: top;
    margin: 8px;
    display: inline-block;
    padding: 32px;
    border-radius: 2px;
    font-size: 18px;
    position: relative;
    transition: all 0.4s;
  }

  .blog-cta:hover {
    opacity: 0.7;
  }

  .blog-cta h3 {
    margin-bottom: 32px;
    font-size: 28px;
  }

  .blog-fixed-bottom {
    position: absolute;
    bottom: 32px;
  }

  .blog-cta time {
    display: inline-block;
  }

  .blog-content-wrapper h2 {
    margin-top: 32px;
  }

  .blog-content-wrapper h3 {
    margin-top: 32px;
  }

  .blog-content-wrapper {
    margin-top: 73px;
    padding-left: 15%;
    padding-right: 16%;
    height: 94vh;
    overflow: scroll;
    width: 69%;
    z-index: 2;
    position: relative;
  }

  .blog-content-wrapper pre {
    border-radius: .5em;
    border: .3em solid hsl(0, 0%, 33%);
    box-shadow: 1px 1px .5em black inset;
    margin: .5em 0;
    overflow: auto;
    padding: 1em;
    background: hsl(0, 0%, 8%);
    color: white;
    font-family: Consolas, Monaco, 'Andale Mono', 'Ubuntu Mono', monospace;
    font-size: 16px !important;
    text-align: left;
    text-shadow: 0 -.1em .2em black;
    white-space: pre;
    word-spacing: normal;
    word-break: normal;
    word-wrap: normal;
    line-height: 1.5;
    -moz-tab-size: 4;
    -o-tab-size: 4;
    tab-size: 4;
    -webkit-hyphens: none;
    -ms-hyphens: none;
    hyphens: none;
  }

  .tool-item {
    padding: 16px;
    background: rgba(255,255,255,0.2);
  }

  .tool-description {
    width: 100%;
    display: inline-block;
    margin-left: 20px;
    font-size: 0.7em;
    color: rgba(0,0,0,0.3);
  }

  .blog-content-wrapper em {
    opacity: 0.3;
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
      content: "BLC";
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
