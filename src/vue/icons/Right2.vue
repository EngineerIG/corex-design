<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M8.707 21.293c-.63.63-1.707.184-1.707-.707V3.414c0-.89 1.077-1.337 1.707-.707l8.586 8.586a1 1 0 0 1 0 1.414z"/>
  </svg>
</template>

<script setup lang="ts">
interface Right2Props {
  size?: string | number;
}

withDefaults(defineProps<Right2Props>(), {
  size: 24,
});
</script>
