<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3.414 17c-.89 0-1.337-1.077-.707-1.707l8.586-8.586a1 1 0 0 1 1.414 0l8.586 8.586c.63.63.184 1.707-.707 1.707z"/>
  </svg>
</template>

<script setup lang="ts">
interface Top2Props {
  size?: string | number;
}

withDefaults(defineProps<Top2Props>(), {
  size: 24,
});
</script>
