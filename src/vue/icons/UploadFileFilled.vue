<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 19h2v-4.175l1.6 1.6L16 15l-4-4-4 4 1.425 1.4L11 14.825zm-5 3q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.413A1.93 1.93 0 0 1 6 2h8l6 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm7-13h5l-5-5z"/>
  </svg>
</template>

<script setup lang="ts">
interface UploadFileFilledProps {
  size?: string | number;
}

withDefaults(defineProps<UploadFileFilledProps>(), {
  size: 24,
});
</script>
