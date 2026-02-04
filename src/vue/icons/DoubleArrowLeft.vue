<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 26 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m5.246 12.575 6.78 7.316q.483.515.504 1.289t-.503 1.337q-.482.515-1.225.515t-1.225-.515l-8.049-8.629a1.7 1.7 0 0 1-.372-.61 2.2 2.2 0 0 1-.11-.703q0-.375.11-.703t.372-.61l8.05-8.628q.48-.516 1.202-.54.722-.022 1.247.54.48.516.481 1.313 0 .797-.481 1.313l-6.78 7.315Zm11.549 0 6.78 7.316q.482.515.503 1.289t-.503 1.337q-.48.515-1.224.515t-1.225-.515l-8.05-8.629a1.7 1.7 0 0 1-.371-.61 2.2 2.2 0 0 1-.11-.703q0-.375.11-.703t.372-.61l8.049-8.628q.48-.516 1.203-.54.72-.022 1.246.54.482.516.482 1.313t-.482 1.313z"/>
  </svg>
</template>

<script setup lang="ts">
interface DoubleArrowLeftProps {
  size?: string | number;
}

withDefaults(defineProps<DoubleArrowLeftProps>(), {
  size: 24,
});
</script>
