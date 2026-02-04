<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 16.9-2.4 2.4a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7q0-.426.275-.7l3.1-3.1a.9.9 0 0 1 .325-.213q.175-.062.375-.062c.2 0 .258.02.375.062a.9.9 0 0 1 .325.213l3.1 3.1a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275zm0-9.8 2.4-2.4a.95.95 0 0 1 .7-.275q.425 0 .7.275a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-3.1 3.1q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063q-.2 0-.375-.063A.9.9 0 0 1 11.3 9.2L8.2 6.1a.95.95 0 0 1-.275-.7q0-.426.275-.7a.95.95 0 0 1 .7-.275q.424 0 .7.275z"/>
  </svg>
</template>

<script setup lang="ts">
interface UnfoldLessProps {
  size?: string | number;
}

withDefaults(defineProps<UnfoldLessProps>(), {
  size: 24,
});
</script>
