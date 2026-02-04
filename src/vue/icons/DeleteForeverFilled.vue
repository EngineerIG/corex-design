<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m9.4 16.5 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.9l-1.4-1.4-2.6 2.6-2.6-2.6L8 9.9l2.6 2.6L8 15.1zM7 21q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19V6H4V4h5V3h6v1h5v2h-1v13q0 .824-.587 1.413A1.93 1.93 0 0 1 17 21z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeleteForeverFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DeleteForeverFilledProps>(), {
  size: 24,
});
</script>
