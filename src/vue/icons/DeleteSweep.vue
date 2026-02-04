<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M15 18.5v-2h4v2zm0-8v-2h7v2zm0 4v-2h6v2zm-12-6H2v-2h4V5h4v1.5h4v2h-1v9q0 .824-.588 1.413A1.93 1.93 0 0 1 11 19.5H5q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 17.5zm2 0v9h6v-9z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeleteSweepProps {
  size?: string | number;
}

withDefaults(defineProps<DeleteSweepProps>(), {
  size: 24,
});
</script>
