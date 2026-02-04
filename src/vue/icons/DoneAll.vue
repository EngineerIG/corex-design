<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m6.7 18-5.65-5.65 1.425-1.4 5.65 5.65zm5.65 0L6.7 12.35l1.4-1.425 4.25 4.25 9.2-9.2 1.4 1.425zm0-5.65-1.425-1.4L15.875 6 17.3 7.4z"/>
  </svg>
</template>

<script setup lang="ts">
interface DoneAllProps {
  size?: string | number;
}

withDefaults(defineProps<DoneAllProps>(), {
  size: 24,
});
</script>
