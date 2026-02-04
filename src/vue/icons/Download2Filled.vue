<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 22v-2h16v2zm8-4L5 9h4V2h6v7h4z"/>
  </svg>
</template>

<script setup lang="ts">
interface Download2FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Download2FilledProps>(), {
  size: 24,
});
</script>
