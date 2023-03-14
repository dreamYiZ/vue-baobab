<template>
    <div class="vb-button">
      <slot></slot>
    </div>
  </template>
  
  <script>
  export default {
    name: 'vb-button',
    props: {
      type: String
    }
  }
  </script>
  
  <style scoped>
    .vb-button {
        display: inline-block;
        padding: 3px 6px;
        background: #000;
        color: #fff;
        cursor: pointer;
    }
  </style>