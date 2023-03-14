<template>
  <div id="app">
    <vb-button type="primary">button</vb-button>
    <UseSquared />
  </div>
</template>

<script setup>
import UseSquared from './components/UseSquared/UseSquared.vue';


</script>

<style>


*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
}

#app{
  padding-top: 5vh;
  text-align: center;
}
.container{
  margin-top: 30px;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
}
</style>
