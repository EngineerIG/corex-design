<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M10.35 17 16 11.35 14.55 9.9l-4.225 4.225-2.1-2.1L6.8 13.45zM6.5 20q-2.275 0-3.888-1.575T1 14.575q0-1.95 1.175-3.475C3.35 9.575 3.983 9.433 5.25 9.15q.625-2.3 2.5-3.725T12 4q2.925 0 4.962 2.037Q19.001 8.075 19 11q1.725.2 2.863 1.488A4.4 4.4 0 0 1 23 15.5q0 1.875-1.313 3.188C20.374 20.001 19.75 20 18.5 20z"/>
  </svg>
</template>

<script setup lang="ts">
interface CloudDoneFilledProps {
  size?: string | number;
}

withDefaults(defineProps<CloudDoneFilledProps>(), {
  size: 24,
});
</script>
