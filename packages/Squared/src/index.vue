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
]);

const activeItemIdx = ref(-1);
let timeoutId = null;

const timer = (timeout) => {
  timeoutId = setTimeout(() => {
    if (activeItemIdx.value < 9) {
      activeItemIdx.value = activeItemIdx.value + 1;
    } else {
      activeItemIdx.value = 0;
    }
    timer(100);
  }, timeout || 100);
};

const start = () => {
  timer();
  setTimeout(() => {
    clearTimeout(timeoutId);
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