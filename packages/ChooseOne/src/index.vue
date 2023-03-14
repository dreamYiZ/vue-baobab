<template>
    <div
      class="vb-choose-one"
    >
      
    </div>
  </template>
    
  
  
  <script>
  export default {
    name: "vb-choose-one",
  };
  </script>
  
  <script setup>
  import { defineExpose, defineProps, ref } from "vue";
  const props = defineProps([
    'data'  
  ]);
  
  
  console.log('props', props, ref)
  const start = () => {
  };
  
  defineExpose({
    start,
  });
  </script>
    
  <style scoped lang="less">
  .vb-choose-one {
  }
  </style>