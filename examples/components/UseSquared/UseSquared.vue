<template>
  <div style="margin-top: 30px">
    <vb-squared
      ref="squaredRef"
      style="margin: 0 auto"
      width="300px"
      height="300px"
      :data="data"
      color="#FFF"
      timeout="6"
      
    />
    <vb-button style="margin-top: 30px" @click="start"> 开始 </vb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const squaredRef = ref(null);

let data = [
  {
    id: 1,
    text: 1,
  },
  {
    id: 2,
    text: 2,
  },
  {
    id: 3,
    text: 3,
  },
  {
    id: 4,
    text: 4,
  },
  {
    id: 5,
    text: 5,
  },
  {
    id: 6,
    text: 6,
  },
  {
    id: 7,
    text: 7,
  },
  {
    id: 8,
    text: 8,
  },
  {
    id: 9,
    text: 9,
  },
];

data.map((i) => {
  i.bg = "https://picsum.photos/id/237/200/300";
  return i;
});

const start = () => {
  squaredRef.value.start();

};
</script>

<style>
</style>