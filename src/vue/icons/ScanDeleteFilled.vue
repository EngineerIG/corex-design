<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 9h5l-5-5zm2.9 12.5-1.4-1.4 2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1 2.075 2.1-1.4 1.4-2.1-2.075zM5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V4q0-.824.587-1.413A1.93 1.93 0 0 1 5 2h8l6 6v4.35a5.6 5.6 0 0 0-.988-.262A6 6 0 0 0 16.976 12q-2.5 0-4.238 1.738-1.737 1.737-1.738 4.236A5.96 5.96 0 0 0 12.55 22z"/>
  </svg>
</template>

<script setup lang="ts">
interface ScanDeleteFilledProps {
  size?: string | number;
}

withDefaults(defineProps<ScanDeleteFilledProps>(), {
  size: 24,
});
</script>
