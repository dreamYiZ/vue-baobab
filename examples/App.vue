<template>
  <div id="app">
    <vb-button type="primary">button</vb-button>
    <UseSquared />
    <UseChooseOne />
  </div>
</template>

<script setup>
import UseSquared from './components/UseSquared/UseSquared.vue';
import UseChooseOne  from './components/UseChooseOne/UseChooseOne.vue'

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
  padding-bottom: 10vh;
}
.container{
  margin-top: 30px;
  text-align: center;
  display: flex;
  align-content: center;
  justify-content: center;
}
h1{
  margin-top: 30px;
}
</style>
