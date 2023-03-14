<template>
  <div class="vb-choose-one">
    <div class="vb-choose-one-layer">
      <div
        v-for="(item, idx) in props.data"
        :key="item.id"
        class="vb-choose-one-item"
        :class="{ hidden: idx !== activeIdx, animation: timeoutId }"
      >
        <div>{{ item.text }}</div>
      </div>
    </div>
    <div class="ready-text" v-show="activeIdx === null">
      {{ props.readyText || "请点击开始" }}
    </div>
  </div>
</template>
    
  
  
  <script>
export default {
  name: "vb-choose-one",
};
</script>
  
  <script setup>
import { defineExpose, defineProps, ref } from "vue";
import { generateRandom } from "../../util";
const props = defineProps(["data", "readyText", "timeout", "mustId"]);

// "data",  the data array , {{id: 'some_id', text: 'some_text'}}
//  "readyText",          '请点击开始'
//   "timeout",
//    "mustId"

const INITIAL_TIMEOUT_INTERVAL = 600;

const activeIdx = ref(null); // the index of active item
const timeoutId = ref(null); // the id which setTimeout return

let maxRange; // max of random generate active index
let timeOver = false; // when the timeout is end

const timer = (_timeout) => {
  activeIdx.value = generateRandom(0, maxRange);
  if (timeOver) {
    if (props.mustId !== undefined) {
      if (props.data[activeIdx.value].id === props.mustId) {
        timeoutId.value = null;
        return;
      } else {
        const foundIdx = props.data.findIndex((i) => {
          return i.id === props.mustId;
        });
        activeIdx.value = foundIdx;
        timeoutId.value = null;
        return;
      }
    }
  }

  timeoutId.value = setTimeout(() => {
    timer(INITIAL_TIMEOUT_INTERVAL);
  }, _timeout);
};

// clear timeout function
const stopTimer = () => {
  setTimeout(() => {
    clearTimeout(timeoutId.value);
    timeoutId.value = null;
  }, +props.timeout * 1000);
};

//  start animation
const start = () => {
  maxRange = props.data.length - 1;
  timeOver = false;

  timer(INITIAL_TIMEOUT_INTERVAL);
  if (props.timeout) {
    if (props.mustId === undefined) {
      stopTimer();
    } else {
      setTimeout(() => {
        timeOver = true;
      }, props.timeout * 1e3);
    }
  }
};

// stop animation
const stop = () => {
  clearTimeout(timeoutId.value);
  timeoutId.value = null;
};

defineExpose({
  start,
  stop,
  activeIdx,
});
</script>
    
  <style scoped lang="less">
.vb-choose-one {
  position: relative;
  margin: 0 auto;
  overflow: hidden;

  // overflow: hidden;
  border: 1px solid #ccc;
  .ready-text {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 26px;
  }
}
.vb-choose-one-layer {
  width: 100%;
  height: 100%;
}
.vb-choose-one-item {
  height: 100%;
  line-height: 100%;
  font-size: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  text-align: center;
  width: 100%;
  &.animation {
    animation: MoveUpDown 1s linear infinite;
  }
  &.hidden {
    display: none;
  }
}

@keyframes MoveUpDown {
  0% {
    bottom: -100%;
  }
  50% {
    bottom: 100%;
  }
  100% {
    bottom: 100%;
  }
}
</style>