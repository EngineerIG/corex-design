<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 22v-2h16v2zm5-4v-7H5l7-9 7 9h-4v7z"/>
  </svg>
</template>

<script setup lang="ts">
interface Upload2FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Upload2FilledProps>(), {
  size: 24,
});
</script>
