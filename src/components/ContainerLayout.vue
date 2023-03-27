<template>
  <ul class="container">
    <li class="flex flex1">1: flex-basis test</li>
    <li class="flex flex2">2: flex-basis test222222222222</li>
    <li class="flex flex3">3: flex-basis test</li>
    <!-- <li class="flex flex4">4: flex-basis test</li>
    <li class="flex flex5">5: flex-basis test</li> -->
  </ul>

  <!-- <ul class="container">
    <li class="flex flex6">6: flex-basis test</li>
  </ul> -->
  <div class="total-item-inner"> </div>
</template>

<script setup lang="ts"></script>

<style lang="scss" scoped>
  .total-item-inner {
    width: 310px;
    height: 108px;
    padding: 16px;
    background: linear-gradient(to left, #0dd7b5, #0dd7b5) left top no-repeat,
      linear-gradient(to bottom, #0dd7b5, #0dd7b5) left top no-repeat,
      linear-gradient(to left, #0dd7b5, #0dd7b5) right top no-repeat,
      linear-gradient(to bottom, #0dd7b5, #0dd7b5) right top no-repeat,
      linear-gradient(to left, #0dd7b5, #0dd7b5) left bottom no-repeat,
      linear-gradient(to bottom, #0dd7b5, #0dd7b5) left bottom no-repeat,
      linear-gradient(to left, #0dd7b5, #0dd7b5) right bottom no-repeat,
      linear-gradient(to left, #0dd7b5, #0dd7b5) right bottom no-repeat;
    background-size: 2px 8px, 8px 2px, 2px 8px, 8px 2px;
  }
  .container {
    font-family: arial, sans-serif;
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    width: 600px;
  }

  .flex {
    background: #6ab6d8;
    padding: 10px;
    margin-bottom: 50px;
    border: 3px solid #2e86bb;
    color: white;
    font-size: 20px;
    text-align: center;
    position: relative;
    box-sizing: border-box;
    // word-wrap: break-word;
  }

  .flex:after {
    position: absolute;
    z-index: 1;
    left: 0;
    top: 100%;
    margin-top: 10px;
    width: 100%;
    color: #333;
    font-size: 18px;
  }

  .flex {
    flex-basis: 33.33333%;
  }

  .flex1 {
    flex-basis: calc(33.33333%);
  }

  // .flex1 {
  //   flex-basis: auto;
  // }

  // .flex1:after {
  //   content: 'auto';
  // }

  // .flex2 {
  //   flex-basis: max-content;
  // }

  // .flex2:after {
  //   content: 'max-content';
  // }

  // .flex3 {
  //   flex-basis: min-content;
  // }

  // .flex3:after {
  //   content: 'min-content';
  // }

  // .flex4 {
  //   flex-basis: fit-content;
  // }

  // .flex4:after {
  //   content: 'fit-content';
  // }

  // .flex5 {
  //   flex-basis: content;
  // }

  // .flex5:after {
  //   content: 'content';
  // }

  // .flex6 {
  //   flex-basis: fill;
  // }

  // .flex6:after {
  //   content: 'fill/-webkit-fill-available/-moz-available';
  // }
</style>
