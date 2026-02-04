<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 5 3h8.8a5.6 5.6 0 0 0-.6 1.438A6.1 6.1 0 0 0 13 6q0 2.5 1.75 4.25T19 12q.525 0 1.025-.088A5.6 5.6 0 0 0 21 11.65V19q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm1-4h12l-3.75-5-3 4L9 13zm12-7V5.825L16.4 7.4 15 6l4-4 4 4-1.4 1.4L20 5.825V10z"/>
  </svg>
</template>

<script setup lang="ts">
interface ImageArrowUpFilledProps {
  size?: string | number;
}

withDefaults(defineProps<ImageArrowUpFilledProps>(), {
  size: 24,
});
</script>
