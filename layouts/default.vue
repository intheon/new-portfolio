<template>
  <div>
    <top-nav></top-nav>
    <nuxt class="main-view"></nuxt>
  </div>
</template>

<script>

import { mapActions, mapGetters } from "vuex";

import TopNav from "~/components/nav/Top.vue";

export default {
  components: {
    TopNav
  }
};
</script>

<style lang="css">

  :root {
    --first-hex: #1e1c1f;
    --first-hex-darker: #110e12;
    --first-r: 30;
    --first-g: 28;
    --first-b: 31;
    --second-hex: #a9bfd5;
    --second-hex-darker: #597490;
    --second-r: 134;
    --second-g: 158;
    --second-b: 182;
    --third-hex: #3f6e8b;
    --third-r: 25;
    --third-g: 73;
    --third-b: 103;
    height: 100%;
  }


  @font-face {
      font-family: "dank";
      src: url("~assets/fonts/dank.woff");
      font-weight: normal;
      font-style: normal;
  }


  @font-face {
      font-family: "inconsolata";
      src: url("~assets/fonts/inconsolata.ttf");
      font-weight: normal;
      font-style: normal;
  }

  /* mini reset */
  html,body,p,ol,ul,li,dl,dt,dd,blockquote,figure,fieldset,legend,textarea,pre,iframe,hr,h1,h2,h3,h4,h5,h6{margin:0;padding:0}h1,h2,h3,h4,h5,h6{font-size:100%;font-weight:normal}ul{list-style:none}button,input,select,textarea{margin:0}html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}iframe{border:0}table{border-collapse:collapse;border-spacing:0}td,th{padding:0;text-align:left}
  /* input[type="number"] remove arrows */
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  input[type=number] {
    -moz-appearance: textfield;
  }

  /* styles begin here */

  a:focus {
      outline:0;
  }

  a:active,
  a:hover {
      outline: 0;
  }


  body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #eee;
    background: var(--first-hex);
    background-size: cover;
    font-family: "dank";
    margin: 0;
    padding: 0;
    width: 100%;
    height: calc(100% - 64px);
    font-size: 24px;
    text-shadow: 1px 1px rgba(0,0,0,0.05);
    line-height: 1.5em;
    position: relative;
  }

  .vc-chrome {
    font-family: "inconsolata" !important;
  }

  a {
    color: var(--second-hex);
    text-decoration: none;
    transition: 0.5s all;
    display: inline-block;
    padding: 4px;
    background: rgba(255,255,255,0.03);
    border-radius: 3px;
  }

  a:hover {
    color: var(--third-hex);
    cursor: pointer;
    background: rgba(255,255,255,0.0);

  }


  h1 {
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.25);
    width: 1em;
    white-space: nowrap;
    padding: 16px;
    padding-left: 8px;
    border-radius: 4px;
    font-size: 48px;
    margin-bottom: 1.2em;
  }

  h2 {
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.25);
    width: 1.5em;
    white-space: nowrap;
    padding: 8px;
    border-radius: 4px;
    font-size: 32px;
    margin-bottom: 1.2em;
  }

  h3 {
    font-size: 32px;
    margin-bottom: 1.2em;
  }

  p {
    margin-bottom: 1.2em;
  }

  .text-ellipsis {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    width: 75%;
    display: inline-block;
  }

  .main-view {
    width: 50%;
    top: 64px;
    margin: auto;
    position: relative;
    z-index: 2;
  }

  .site-logo-wrapper {
    width: 256px;
    float:left;
  }

  .right {
    float: right;
  }

  .text-right {
    text-align: right;
  }

  .banner {
    padding: 6px;
    background: rgba(0,0,0,0.05);
    font-size: 12px;
    border-radius: 4px;
    z-index: 1;
  }

  .large-icon {
    font-size: 26px;
    color: black;
    line-height: 64px;
  }

  .tiny {
    font-size: 12px;
  }

  .small {
    font-size: 14px;
  }

  .medium {
    font-size: 16px;
  }

  .large {
    font-size: 22px;
  }

  .huge {
    font-size: 28px;
  }

  .massive {
    font-size: 36px;
  }

  .bold, .strong {
    font-weight: 700;
  }

  .fileuploader {
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }

  .small-button {
    font-size: 12px;
    padding: 4px;
    margin: 0px;
  }

  .disabled-button label:hover {
    cursor: not-allowed;
  }

  .radio-buttons {
    border-radius: 4px;
    border: 1px solid rgba(0,0,0,0.15);
    background: rgba(0,0,0,0.05);
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .radio-button {
    flex-grow: 1;
    background: rgba(0,0,0,0.05);
    border: none;
    padding: 0px;
    border-radius: 0px;
    box-shadow: none;
    border-right: 1px solid rgba(0,0,0,0.05);
  }

  .radio-button:last-child {
    border-right:none;
  }

  .radio-button label {
    width: auto;
    padding: 12px;
    text-align: center;
    color: black;
  }

  .radio-button:not(.tab-selected):hover {
    cursor: pointer;
    background: rgba(0,0,0,0.1);
  }

  .radio-button input[type="radio"]{
    display: none;
  }

  .ml {
    margin-left: 16px;
  }

  .mr {
    margin-right: 16px;
  }

  .mt {
    margin-top: 16px;
  }

  .mb {
    margin-bottom: 16px;
  }

  .mx {
    margin: 64px;
  }

  .mtx {
    margin-top: 64px;
  }

  .mbx {
    margin-bottom: 64px;
  }

  .mlx {
    margin-left: 64px;
  }

  .mrx {
    margin-right: 64px;
  }

  .px {
    padding: 64px;
  }

  .p2 {
    padding: 32px;
  }

  .p2mb {
    padding: 32px 32px 0px 32px;
  }

  .p2b {
    padding-bottom: 32px;
  }

  .ptx {
    padding-top: 64px;
  }

  .pbx {
    padding-bottom: 64px;
  }

  .bt {
    border-top: 1px solid rgba(255,255,255,0.3);
  }

  .br {
    border-right: 1px solid rgba(255,255,255,0.3);
  }

  .bb {
    border-bottom: 1px solid rgba(255,255,255,0.3);
  }

  .bl {
    border-left: 1px solid rgba(255,255,255,0.3);
  }

  .ba {
    border: 1px 1px solid rgba(255,255,255,0.3);
  }

  .reduced-lh {
    line-height: 50%;

  }

  .ma {
    margin: auto;
  }
  .fh {
    height: 100%;
  }

  .flex-wrapper {
    display: flex;
  }

  .flex-column {
    flex-direction: column;
  }

  .flex-item {
    flex: 1;
  }

  .flex-item-25 {
    flex: 1;
  }

  .flex-item-50 {
    flex: 2;
  }

  .flex-item-75 {
    flex: 3;
  }

  .flex-item-100 {
    flex: 3;
  }

  .flex-grid {
    display: flex;
    flex-wrap: wrap;
    column-gap: 8px;
  }

  .flex-grid-item {
    flex-grow: 1;
  }

  .row {
    display: inline-block;
    width: 100%;
  }

  .vcenter {
    vertical-align: bottom;
  }

  .relative {
    position: relative;
  }


  .site-header {
    padding: 8px;
    background: #eee;
    width: 69px;
    margin-bottom: 16px;
    white-space: nowrap;
  }

  .navigation-links {
    display: inline-block;
    float: left;
  }

  .navigation-links .link {
    font-size: 18px;
    line-height: 64px;
    display: inline-block;
    color: black;
    padding: 0px 8px;
    float:left;
    outline: none;
  }

  .navigation-links .link:hover {
    text-shadow: 0px 0px 18px rgba(0,0,0,0.7);
  }

  .site-logo .nuxt-link-active {
  }

  .fixed-bottom {
    bottom: 0;
    position: fixed;
    left: 0;
  }

  .inline-block {
    display: inline-block;
  }

  .fade {
    opacity: 0.4;
  }

  .strong {
    font-weight: 700;
  }

  .auto {
    width: auto;
  }

  .c5 {
    width: 5%;
    float:left;

  }
  .c6 {
    width: 6.25%;
    float:left;
  }
  .c7 {
    width: 7%;
    float:left;
  }
  .c8 {
    width: 8%;
    float:left;
  }
  .c9 {
    width: 9%;
    float:left;
  }

  .c10 {
    width: 10%;
    float:left;
  }

  .c12 {
    width: 12%;
    float:left;
  }

  .c14 {
    width: 14%;
    float:left;
  }

  .c15 {
    width: 15%;
    float:left;
  }

  .c16 {
    width: 16%;
    float:left;
  }

  .c18 {
    width: 18%;
    float:left;
  }

  .c20 {
    width: 20%;
    float:left;
  }


  .c22 {
    width: 22%;
    float:left;
  }

  .c23 {
    width: 23%;
    float:left;
  }


  .c24 {
    width: 24%;
    float:left;
  }

  .c25 {
    width: 25%;
    float:left;
  }

  .c28 {
    width: 28%;
    float:left;
  }

  .c33 {
    width: 33%;
    float:left;
  }

  .c30 {
    width: 30%;
    float:left;
  }

  .c40 {
    width: 40%;
    float: left;
  }

  .c41 {
    width: 41%;
    float: left;
  }

  .c42 {
    width: 42%;
    float: left;
  }

  .c43 {
    width: 43%;
    float: left;
  }

  .c44 {
    width: 44%;
    float: left;
  }

  .c45 {
    width: 45%;
    float: left;
  }

  .c46 {
    width: 46%;
    float: left;
  }

  .c47 {
    width: 47%;
    float: left;
  }

  .c48 {
    width: 48%;
    float: left;
  }

  .c50 {
    width: 50%;
    float:left;
  }


  .c58 {
    width: 58%;
    float:left;
  }

  .c57 {
    width: 57%;
    float:left;
  }

  .c60 {
    width: 60%;
    float:left;
  }

  .c67 {
    width: 67%;
    float: left;
  }

  .c70 {
    width: 70%;
    float:left;
  }

  .c75 {
    width: 75%;
    float:left;
  }

  .c80 {
    width: 80%;
    float:left;
  }

  .c90 {
    width: 90%;
    float:left;
  }

  .c95 {
    width: 95%;
    float:left;
  }

  .c98 {
    width: 98%;
    float:left;
  }

  .c100 {
    width: 100%;
    float:left;
  }

  .c-offset {
    left: -17.5%;
  }

  .pad {
    padding: 16px;
  }

  .nopad {
    padding: 0px;
  }

  .cta {
    border: none;
  }

  .red-cta {
    background: #b51d13;
    color: white;
    border-radius: 4px;
  }

  .orange-cta {
    background: #c87132;
    color: white;
    border-radius: 4px;
  }

  .blue-cta {
    background: #137bb5;
    color: white;
    border-radius: 4px;
  }

  .purple-cta {
    background: #573183;
    color: white;
    border-radius: 4px;
  }

  .green-cta {
    background: #288e3b;
    color: white;
    border-radius: 4px;
  }

  .order {
    border: 1px solid;
    border-radius: 4px;
  }

 .pt {
   padding-top: 8px;
 }

 .pr {
   padding-right: 8px;
 }

 .pr2 {
   padding-right: 16px;
 }

 .pr3 {
   padding-right: 32px;
 }

 .pl {
   padding-left: 8px;
 }

 .pl2 {
   padding-left: 16px;
 }

 .pl3 {
   padding-left: 32px;
 }

 .svg-align-left {
   position: absolute;
   top: 0;
   left: 0;
 }

 .svg-align-right {
   margin-top: 4px;
   position: absolute;
   top: 0;
   right: 0;
 }

 .checkbox {
   width: auto;
   display: inline;
   padding: 8px;
   outline: none;
 }

 .force-center {
   margin: 0;
   position: absolute;
   top: 50%;
   left: 50%;
   transform: translateY(-50%) translateX(-50%);
 }
 .spaced-letters {
   letter-spacing: 6px;
 }

 .pulse {
   animation: pulseAnim 2s infinite;
 }

   .black-fullscreen-overlay {
     background: black;
     width: 100% !important;
     height: 100vh;
     position: absolute;
     z-index:999999999;
     margin: 0;
     top: 0;
     color: white;
     transition: 1s all;
   }
   .half-panel {
     overflow: hidden;
   }
   .login-image img {
     height: 100vh;
   }
   .login-panel {
     padding: 32px;
     float: left;
   }

   .account-screen {
     background: #000;
     position: absolute;
     z-index:99999999999999;
     top: -64px;
     left: 0;
     width: 100vw !important;
     height: calc(100vh + 64px);
     margin: 0;
     overflow: hidden;
   }

  input, textarea, .StripeElement, .input-field {
    padding: 24px;
    border: 0;
    outline: 0;
    width: 100%;
    font-family: "dank";
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.28);
    color: #eee;
    font-size: 24px;
    border-radius: 4px;
    transition: 0.4s all;
  }


  input:focus, textarea:focus, .input-field:focus {
    transform: scale(1.04);
  }

  input:focus, .input-field:focus {
    margin-left: 8px;
  }
  .ProseMirror-focused {
    outline: none;
  }

  select {
    width: 100%;
    border: 1px solid rgba(0,0,0,0.08);
    padding: 6px;
    outline: none;
  }

  option {
    outline: none;
  }

  textarea {
    resize: vertical;
    outline: none;
    transition: transform margin 0.4s ;
  }

  button {
    padding: 24px;
    border: 0;
    outline: 0;
    font-family: "inconsolata";
    font-weight: normal;
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.5);
    border-radius: 3px;
    text-align: left;
    width: auto;
    font-size: 24px;
    color: #eee;
    transition: 0.4s all;
  }

  button:hover:not(:disabled) {
    transform: scale(0.95);
    cursor: pointer;
  }

  button::-moz-focus-inner {
    border: 0;
  }

  .secondary-button {
    background: rgba(var(--first-r),var(--first-g),var(--first-b),0.15);
    border-bottom: 4px solid rgba(var(--first-r),var(--first-g),var(--first-b),0.1);
  }

  .no-shadow {
    box-shadow: none;
  }

  label {
    width: 100%;
    font-size: 16px;
    display: inline-block;
  }

  .right {
    float: right;
  }

  .table-item {
    line-height: 64px;
  }

  .table-item:nth-child(odd) {
    background: rgba(0,0,0,0.03);
  }

  .table-item button {
    margin-top: 8px;
    margin-right: 8px;
  }

  .fileuploader-label {
    margin: 0;
    padding: 16px;
    border: 0;
    outline: 0;
    width: 100%;
    font-family: "inconsolata";
    background: rgba(0,0,0,0.08);
    border-bottom: 4px solid black;
    border-style: inset;
    font-size: 16px;
    text-align: center;
    border-radius: 2px;
    transition: 0.4s all;
    color: rgba(0,0,0,0.5);
    height: 184px;
    display:inline-block;
    position: relative;
    overflow: hidden;
  }

  .input-item {
    width: 100%;
  }

  .capitalise {
    text-transform: capitalize;
  }

  .fileuploader-label img {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    background-position: center;
  }

  .fileuploader-label:hover {
    cursor: pointer;
  }

  .fileuploader-label svg {
    height:100%;
    transform: scale(2.5);
    opacity: 0.4;
    transition: "opacity" 0.3s;
  }

  .fileuploader-label:hover svg {
    opacity: 0.7;
    cursor: pointer;
  }


  .small-file-uploader .fileuploader-label{
    height: 75px;
  }

  .small-file-uploader .fileuploader-label svg{
    transform: scale(1.5);
  }



  .button-container {
    font-size: 0px;
  }

  .button-container button {
    border-radius: 0px;
  }

  .button-container button:nth-child(odd) {
    background: rgba(0,0,0,0.2);
    border-color: rgba(0,0,0,0.2);
    color: black;
  }


  .focus-bg {
    background: var(--second-hex);
    filter: hue-rotate(-5deg);
    border-radius: 3px;
  }

  .dashed-border {
    border: 1px dashed rgba(0,0,0,0.3);
    border-radius: 2px;
  }

  .submit-project label {
    font-weight: 600;
  }

  /*
  .small-number-indicator {
    font-size: 12px;
    background: var(--second-hex);
    opacity: 0.4;
    position: absolute;
    text-align: center;
    height: 16px;
    width: auto;
    padding-left: 4px;
    padding-right: 4px;
    color: white;
    line-height: 16px;
    z-index: 100;
  }*/

  .small-number-indicator {
    font-size: 10px;
    position: absolute;
    text-align: center;
    height: 16px;
    top: 17px;
    width: 24px;
    left: 6px;
    padding-left: 4px;
    padding-right: 4px;
    color: white;
    line-height: 16px;
    z-index: 100;
  }
  .cart-indicator svg {
    position: relative;
    font-size: 26px;
  }

  .modal-inner h2 {
    font-size: 22px;
  }

  .tags input {
    font-size: 11px;
    border-radius: 0px;
  }

  .tags button svg {
    opacity: 0.7;
    transform: scale(0.8);
    top: 6px;
    position: absolute;
  }

  .tags .tag {
    display: inline;
    padding: 6px;
    font-size: 12px;
    line-height: 12px;
    background: rgba(0,0,0,0.1);
    border-radius: 6px;
    margin-right: 6px;
    position: relative;
  }

  .tags .tag:hover{
    cursor: pointer;
  }

  .tag-delete, .delete-cta{
    position: absolute;
    top: -5px;
    text-align: center;
    right: -5px;
    border-radius: 50%;
    background: rgb(167, 67, 49);
    width: 12px;
    height: 12px;
    display: inline-block;
    font-size: 12px;
    color: white;
  }

  .tag-delete:hover, .delete-cta:hover{
    background: rgb(212, 74, 49);
    cursor: pointer;
  }

  .tag-selected {
    opacity: 0.2;
  }


  .tag-red {
    background: rgb(240, 140, 77) !important;
  }

  .tag-purple {
    background: rgb(149, 129, 158) !important;
  }

  .tag-blue {
    background: rgb(91, 139, 171) !important;
  }

  .tag-green {
    background: rgb(192, 227, 186) !important;
  }


  .checkout-items-sidebar {
    height: calc(100vh - 264px);
    overflow: auto;
  }

  .order-item-image {
    width: 64px;
    height: 64px;
    overflow: hidden;
  }

  .order-item {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
    float: left;
  }

  .cart-item {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
    float: left;
  }

  .cart-summary {
    border: 1px solid rgba(0,0,0,0.08);
    background: rgba(0,0,0,0.015);
    box-shadow: inset 0px 0px 64px rgba(0,0,0,0.025);
    border-radius: 4px;
  }

  .order-item-quantity {
    position: absolute;
    top: 0;
    right: 0;
    background: black;
    color: white;
    width: 16px;
    height: 16px;
    text-align: center;
    line-height: 16px;
    font-size: 12px;
  }

  .absolute-top-right {
    position: absolute;
    top: 0;
    right: 0;
  }

  .absolute-bottom-right {
    position: absolute;
    bottom: 0;
    right: 0;
  }

  .absolute-right {
    position: absolute;
    right: 0;
  }

  .absolute-center {
    position: absolute;
    text-align: center;
    width: 50%;
    height: 20%;
    top: 50%;
    left: 25%;
    z-index: 999;
  }

  button.absolute-center {
    background: black;
    border: none;
    color: white;
  }

  .icon.absolute-center {
    top: 35%;
    left: 20%;
  }

  .absolute-bottom {
    position: absolute;
    bottom: 0;
  }

  .absolute-top {
    position: absolute;
    top: 0;
  }

  .absolute-top-left {
    position: absolute;
    top: 0;
    left: 0;
  }

  .absolute-bottom-left {
    position: absolute;
    bottom: 0;
    left: 0;
  }

  .max-height {
    max-height: 250px;
    overflow: hidden;
  }

  .offset-image {
    top: -50px;
  }

  .vc-chrome-toggle-btn, .vc-chrome-alpha-wrap {
    display: none !important;
  }

  .vc-chrome-hue-wrap .vc-hue-picker, .vc-chrome-alpha-wrap .vc-alpha-picker {
    width: 17px !important;
    height: 17px !important;
    border-radius: 8px !important;
  }

  .vc-chrome-hue-wrap {
    height: 16px !important;
  }

  .nuxt-link-exact-active {
    color: var(--third-hex) !important;
    text-shadow: none;
  }

  .nuxt-link-exact-active:hover {
    text-shadow: 0px 0px transparent !important;
    color: var(--third-hex) !important;
    opacity: 1;
    cursor: default;
  }

  .tabs {
    width:40%;
    float: left;
    margin-left: 8px;
  }

  .tab {
    width: auto;
    display:inline-block;
    float: left;
    padding: 4px;
    color: black;
    border: 1px dashed #f1e9cf;
    outline: none;
    font-size: 48px;
  }

  .tab:hover {
    cursor: pointer;
  }

  .tab-selected {
    background: #f1e9cf;
    color: black !important;
    outline: none;
  }

  .selected-order-step {
    background: rgba(var(--second-r),var(--second-g),var(--second-b),0.20);
    color: var(--second-hex);
    white-space: nowrap;
    padding-left: 3px;
    padding-right: 3px;
    border-radius: 3px;
    font-weight: 700;
    font-size: 26px;
    top: 3px;
    position: relative;
  }

  .message {
    padding: 8px;
    background: rgba(0,0,0,0.02);
    border: 1px solid rgba(0,0,0,0.05);
    display: inline-block;
    border-radius: 2px;
  }

  .no-bg {
    float: left;
    background: none !important;
    width: auto;
    padding: 0px;
  }


  .swatch-style {
    width: 100% !important;
    display: inline-block;
  }

  .flex {
    display: flex;
  }

  .flex-wrap {
    flex-wrap: wrap;
  }

  .flex-fill-height {
    display: flex;
    align-self: normal;
    flex-flow: row wrap;
    justify-content: flex-start;
  }

  .scroll-horizontal {
    width: 100%;
    overflow-x: scroll;
  }
  .scroll-vertical {
    height: 100%;
    overflow-y: scroll;
  }
  .breadcrumb-toolbar {
    font-size: 0px;
    display: flex;
  }

  .breadcrumb-toolbar .admin-toolbar-item {
    font-size: 0px;
    flex: 1;
    margin-right: 0px;
    text-align: center;
  }

  .horizontal-rule {
    width: 100%;
    height: 2px;
    background: #dbd6c4;
  }

  .box-shadow {
    box-shadow: inset 0px 0px 384px #f6f5f0;
  }

  .editor-button {
    height: 32px;
    width: 32px;
    border: none;
    padding: 3px;
    min-width: 32px;
    text-align: center;
    border-radius: 0px;
    background: none;
    position: relative;
    display: inline-block;
  }

  .is-active {
    font-weight: 700;
    background: rgba(255,255,255,0.2);
  }


  .uppercase {
    text-transform: uppercase;
  }


  .lds-ellipsis {
      display: inline-block;
      position: relative;
      width: 64px;
      height: 10px;
  }

  .page-enter-active {
    animation: acrossIn .2s ease-out both;
  }

  .page-leave-active {
    animation: acrossOut .2s ease-in both;
  }

  @keyframes acrossIn {
    0% {
      transform: translate3d(0, -100%, 0);
    }
    100% {
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes acrossOut {
    0% {
      transform: translate3d(0, 0, 0);
    }
    100% {
      transform: translate3d(0, 100%, 0);
    }
  }

    .text-center {
      text-align: center;
    }

  .lds-ellipsis div {
      position: absolute;
      top: 1px;
      width: 11px;
      height: 11px;
      border-radius: 50%;
      background: #eee;
      animation-timing-function: cubic-bezier(0, 1, 1, 0);
  }
  .lds-ellipsis div:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(3) {
      left: 26px;
      animation: lds-ellipsis2 0.6s infinite;
  }
  .lds-ellipsis div:nth-child(4) {
      left: 45px;
      animation: lds-ellipsis3 0.6s infinite;
  }
  @keyframes lds-ellipsis1 {
      0% {
          transform: scale(0);
     }
      100% {
          transform: scale(1);
     }
  }
  @keyframes lds-ellipsis3 {
      0% {
          transform: scale(1);
     }
      100% {
          transform: scale(0);
     }
  }
  @keyframes lds-ellipsis2 {
      0% {
          transform: translate(0, 0);
     }
      100% {
          transform: translate(19px, 0);
     }
  }

  .desktop-navigation {
    display: inline-block;
    float: left;
  }

  .mobile-navigation {
    display: none;
  }

  iframe {
    height: 420px;
  }

    .disabled-button, button[disabled] {
      opacity: 0.45;
    }

    .disabled-button:hover, button[disabled] {
      cursor: not-allowed;
      opacity: 0.45;
    }

  .draggable-list-item {
    background: rgba(0,0,0,0.005);
    z-index: 2;
    user-select: none;
    border-left: 1px solid rgba(0,0,0,0.09);
    border-right: 1px solid rgba(0,0,0,0.09);
    border-top: 1px solid rgba(0,0,0,0.09);
  }
  .draggable-list-item:last-child {
    border-bottom: 1px solid rgba(0,0,0,0.09);
  }


  .draggable-list-item input {
  }

  .draggable-list-item .delete-button {
    padding: 4px;
    opacity: 0.2;
  }

  .hooper-next, .hooper-prev {
    top: 150px !important;
    background-color: white !important;
  }
  .hooper-prev{
    left: 5% !important;
  }

  .hooper-next{
    right: 5% !important;
  }

  @media (min-width: 1796px){

    iframe {
      height: 530px;
    }

    .site-logo {
      width: 374px;
    }

    .main-view {
      width: 50%
    }

    .site-logo-wrapper {
      width: 384px;
    }

  }

  @media (max-width: 1500px){

    .main-view {
      width: 80%;
    }

  }

  @media (max-width: 1300px){


    .navigation-links .link {
      font-size: 14px;
    }

  }

  /* MOBILE STARTS HERE */
  @media (max-width: 1200px){

    iframe {
      height: 420px;
    }

    .main-view {
      width: 85%;
    }


  }

  @media (max-width: 1000px){

    iframe {
      height: 380px;
    }

    .main-view {
      width: 95%;
    }

    .site-logo-wrapper {
      width: 256px;
    }

    .site-logo {
      width: 256px;
    }


    .c50 {
      width: 100%;
    }

    .c12 {
      width: 25%;
    }

    .desktop-navigation {
      display: none;
    }
    .mobile-navigation {
      display: inline-block;
    }

  }

  @media (max-width: 900px){
    body {
      font-size: 16px;
    }

    h1 {
      width: 23%;
      font-size: 32px;
    }

    h2 {
      width: 23%;
    }

    .audio-block {
      width: 100%;
    }

    iframe {
      width: 100%;
    }

    .c33 {
      width: 100%;
      margin-bottom: 8px;
    }

    .c33.ml.mr {
      margin-left: 0px;
      margin-right: 0px;
    }

    .inline-image.c44 {
      width: 100%;
      margin-right: 0px;
      margin-bottom: 8px;
    }

    .tabs {
      width: 100%;
    }

    .pricing-block.c16 {
      display: none;
    }

    .pricing-block.c28 {
      width: 100%;
    }

    .submit-project.main-view {
      padding-bottom: 32px;
    }

    .submit-project.main-view .mt.c33 .row.mlx {
      margin-left: 0px;
    }

    .submit-project.main-view .c50.mt.pbx {
      padding-bottom: 0px;
    }

    .category-product {
      width: 100% !important;
    }

    .flex-wrapper.mt {
      display: inline-block;
    }

    .product-detail .flex-item-50 {
      width: 100%;
      margin-left: 0px;
    }

    .cart-items.mt.c58 {
      width: 100%;
    }
  }


  @media (max-width: 600px){
    .sidebar {
      display: none;
    }
    .app-view {
      width: 100%;
      margin: 0;
    }
  }
  @media (max-width: 1600px) {
   .main-view {
     width: 80%;
   }
  }

  @media (max-width: 1000px) {
   .main-view {
     width: 96%;
     margin: 0 2%;
   }
  }

  @media (max-width: 700px){

    .main-view {
        padding-left: 32px;
        padding-right: 32px;
    }


    .explore-filters .ml {
      margin-left: 0px;
    }

  }


</style>
