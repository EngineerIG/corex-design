<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V4q0-.824.587-1.413A1.93 1.93 0 0 1 5 2h8l6 6v4.35a5.6 5.6 0 0 0-.975-.262A6 6 0 0 0 17 12V9h-5V4H5v16h6.35q.2.575.5 1.075t.7.925zm9.9-.5-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1 2.075 2.1-1.4 1.4-2.1-2.075z"/>
  </svg>
</template>

<script setup lang="ts">
interface ScanDeleteProps {
  size?: string | number;
}

withDefaults(defineProps<ScanDeleteProps>(), {
  size: 24,
});
</script>
