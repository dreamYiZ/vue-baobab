<template>
  <div
    class="vb-squared"
    :style="{ color: props.color, width: props.width, height: props.height }"
  >
    <div
      class="squared-item"
      v-for="(item, idx) in props.data"
      :class="{ 'squared-active': idx === activeItemIdx }"
      :key="item.id"
      :style="{ backgroundImage: `url(${item.bg})` }"
    >
      <div class="cover-white"></div>
      {{ item.text }}
    </div>
  </div>
</template>
  


<script>
export default {
  name: "vb-squared",
};
</script>

<script setup>
import { defineExpose, defineProps, ref } from "vue";
const props = defineProps([
  "data",
  "width",
  "height",
  "color",
  "active-class",
  "timeout",
  "timeoutInterval",
  "mustId",
  "mode",
]);

const INITIAL_TIMEOUT_INTERVAL = 300;
const MIN_TIMEOUT_INTERVAL = 150;
// const TIMEOUT_RANDOM_RANGE = 50;

const NO_CENTER_RANGE = [1, 2, 3, 6, 9, 8, 7, 4].map((i) => --i);
const noCenter = props.mode === "no-center";
let noCenterIdx = 0;

const activeItemIdx = ref(-1);
let timeoutId = null;
let timeoutInterval = INITIAL_TIMEOUT_INTERVAL;
let timeOver = false;

const timer = (timeout) => {
  timeoutId = setTimeout(() => {
    if (noCenter) {
      if(noCenterIdx<7){
        activeItemIdx.value = NO_CENTER_RANGE[++noCenterIdx]
      }else{
        noCenterIdx = 0
        activeItemIdx.value = NO_CENTER_RANGE[noCenterIdx]
      }

    } else {
      if (activeItemIdx.value < 8) {
        activeItemIdx.value = activeItemIdx.value + 1;
      } else {
        activeItemIdx.value = 0;
      }
    }

    timeoutInterval =
      timeoutInterval -
      ((timeoutInterval - (props.timeoutInterval || MIN_TIMEOUT_INTERVAL)) /
        props.timeout) *
        Math.random() *
        3;

    if (timeOver) {
      if (props.data[activeItemIdx.value].id !== props.mustId) {
        timer(timeoutInterval);
      }
    } else {
      timer(timeoutInterval);
    }
  }, timeout);
};

const start = () => {
  timeOver = false;
  timeoutInterval = INITIAL_TIMEOUT_INTERVAL;
  timer(timeoutInterval);
  setTimeout(() => {
    timeOver = true;
    if (props.mustId) {
      if (props.data[activeItemIdx.value].id === props.mustId) {
        clearTimeout(timeoutId);
      }
    } else {
      clearTimeout(timeoutId);
    }
  }, props.timeout * 1000);
};

defineExpose({
  start,
  activeItemIdx,
});
</script>
  
<style scoped lang="less">
.vb-squared {
  display: flex;
  flex-wrap: wrap;
  .squared-item {
    flex: 0 0 33.333333%;
    align-items: center;
    justify-content: center;
    display: flex;
    cursor: default;
    position: relative;
    &.squared-active {
      .cover-white {
        display: block;
      }
    }
    .cover-white {
      display: none;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(255, 255, 255, 0.5);
    }
  }
}
</style>