<script setup lang="ts">
defineProps({
  size: {
    type: Number,
  },
});
</script>

<template>
  <div :class="`text-[${size}px] font-bold`">
    <span class="text-[#38BFF2]">C</span><span>o</span
    ><span class="text-[#F15525]">D</span><span>e</span>
  </div>
</template>
