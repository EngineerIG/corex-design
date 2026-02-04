<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m19.6 21-6.3-6.3A6.1 6.1 0 0 1 9.5 16q-2.725 0-4.612-1.887T3 9.5t1.888-4.612Q6.775 3 9.5 3t4.613 1.888Q15.999 6.775 16 9.5a6.1 6.1 0 0 1-1.3 3.8l6.3 6.3zM9.5 14q1.875 0 3.188-1.313Q14 11.375 14 9.5t-1.313-3.188Q11.375 5 9.5 5T6.312 6.313C4.999 7.626 5 8.25 5 9.5q0 1.875 1.313 3.188Q7.625 14 9.5 14m-1-1.5v-2h-2v-2h2v-2h2v2h2v2h-2v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface ZoomInProps {
  size?: string | number;
}

withDefaults(defineProps<ZoomInProps>(), {
  size: 24,
});
</script>
