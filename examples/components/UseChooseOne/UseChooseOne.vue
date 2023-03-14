<template>
  <div>
    <h1>选一个文字</h1>
    <vb-choose-one
    class="choose-one-ccc"
      ref="chooseOneRef"      
      :data="data"
      timeout="6"
      readyText="请点击开始..."
    />

    <vb-choose-one
    class="choose-one-ccc"
      ref="chooseOneRef2"      
      :data="data"
      timeout="3"
      mustId="57"
      readyText="请点击开始..."
    />
    <vb-button style="margin-top: 30px" @click="start"> 开始 </vb-button>



    <h1>
      带有停止按钮的
    </h1>
    <vb-choose-one
    class="choose-one-ccc"
      ref="chooseOneWithStopRef"      
      :data="data"
      timeout="6"
      readyText="有停止按钮的..."
    />
    <vb-button style="margin-top: 30px; margin-right: 30px;" @click="chooseOneWithStopRef.start()"> 开始 </vb-button>

    <vb-button style="margin-top: 30px" @click="chooseOneWithStopRef.stop()">停止</vb-button>

  </div>
</template>

<script setup>
import { ref } from "vue";

const chooseOneRef = ref(null);
const chooseOneRef2 = ref(null);
const chooseOneWithStopRef = ref(null);




const data = new Array(99).fill().map((i,idx)=>{
    return {
        id: (idx+1).toString(),
        text: `text-${(idx+1).toString()}`
    }
})

const start = ()=>{
    chooseOneRef.value.start();
    chooseOneRef2.value.start();
}
</script>

<style lang="less" scoped>
.choose-one-ccc{
  width: 200px;
  height: 60px;
}
</style>