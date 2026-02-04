<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M13 23v-2h8v2zm4-3-4-4 1.4-1.4 1.6 1.6v-4.175h2V16.2l1.6-1.6L21 16zM5 19q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 17V3q0-.824.587-1.413A1.93 1.93 0 0 1 5 1h7l6 6v3.025h-7V19zm6-11h5l-5-5z"/>
  </svg>
</template>

<script setup lang="ts">
interface FileSaveFilledProps {
  size?: string | number;
}

withDefaults(defineProps<FileSaveFilledProps>(), {
  size: 24,
});
</script>
