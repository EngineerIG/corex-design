<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4.175 21a.92.92 0 0 1-.912-.262.92.92 0 0 1-.263-.913l1-4.775L8.95 20zm4.775-1L4 15.05 15.45 3.6q.575-.575 1.425-.575T18.3 3.6l2.1 2.1q.575.576.575 1.425T20.4 8.55zm7.925-15L6.525 15.35l2.125 2.125L19 7.125z"/>
  </svg>
</template>

<script setup lang="ts">
interface StylusProps {
  size?: string | number;
}

withDefaults(defineProps<StylusProps>(), {
  size: 24,
});
</script>
