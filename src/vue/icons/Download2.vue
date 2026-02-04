<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4zm0-3.25L14.9 11H13V4h-2v7H9.1z"/>
  </svg>
</template>

<script setup lang="ts">
interface Download2Props {
  size?: string | number;
}

withDefaults(defineProps<Download2Props>(), {
  size: 24,
});
</script>
