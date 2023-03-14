<template>
  <div>
    <h1>选一个文字</h1>
    <vb-choose-one
      ref="chooseOneRef"      
      :data="data"
      mustId="3"
    />
    <vb-button style="margin-top: 30px" @click="start"> 开始 </vb-button>
  </div>
</template>

<script setup>
import { ref } from "vue";

const chooseOneRef = ref(null);
const data = new Array(99).fill().map((i,idx)=>{
    return {
        id: (idx+1).toString(),
        text: `text-${(idx+1).toString()}`
    }
})

const start = ()=>{
    chooseOneRef.value.start();
}
</script>

<style>
</style>