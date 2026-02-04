<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m17 20 4-4-1.4-1.4-1.6 1.6v-4.175h-2V16.2l-1.6-1.6L13 16zm-4 3v-2h8v2zm-8-4q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 17V3q0-.824.587-1.413A1.93 1.93 0 0 1 5 1h7l6 6v3.025h-2V8h-5V3H5v14h6v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface FileSaveProps {
  size?: string | number;
}

withDefaults(defineProps<FileSaveProps>(), {
  size: 24,
});
</script>
