<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 21v-2l1-1H4q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.413A1.93 1.93 0 0 1 4 3h8v2H4v11h16v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18h-3l1 1v2zm9-6-5-5 1.4-1.4 2.6 2.575V3h2v8.175L18.6 8.6 20 10z"/>
  </svg>
</template>

<script setup lang="ts">
interface BrowserUpdatedProps {
  size?: string | number;
}

withDefaults(defineProps<BrowserUpdatedProps>(), {
  size: 24,
});
</script>
