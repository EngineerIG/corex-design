<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M19.19 9.091a1.25 1.25 0 0 1 1.703 0c.47.448.47 1.174 0 1.621L10.05 21.031a1.25 1.25 0 0 1-1.703 0 1.11 1.11 0 0 1 0-1.621L19.189 9.09Zm0 5.733a1.25 1.25 0 0 1 1.703 0c.47.447.47 1.173 0 1.62l-4.819 4.587a1.25 1.25 0 0 1-1.704 0 1.11 1.11 0 0 1 0-1.622zm.171-11.849a1.25 1.25 0 0 1 1.704-.01c.473.445.478 1.171.01 1.621L4.635 20.421a1.25 1.25 0 0 1-1.703.01 1.11 1.11 0 0 1-.01-1.622z"/>
  </svg>
</template>

<script setup lang="ts">
interface ResizerProps {
  size?: string | number;
}

withDefaults(defineProps<ResizerProps>(), {
  size: 24,
});
</script>
