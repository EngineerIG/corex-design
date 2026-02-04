<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M16.4 21 15 19.6l2.1-2.1-2.1-2.1 1.4-1.4 2.1 2.1 2.1-2.1 1.4 1.4-2.075 2.1L22 19.6 20.6 21l-2.1-2.075zM12 21q-3.45 0-6.013-2.288Q3.426 16.425 3.05 13H5.1q.35 2.6 2.313 4.3Q9.374 19 12 19q.275 0 .512-.012.238-.014.488-.063v2.025a10 10 0 0 1-1 .05M3 10V4h2v2.35a8.7 8.7 0 0 1 3.113-2.475A8.9 8.9 0 0 1 12 3q3.75 0 6.375 2.625C21 8.25 21 9.5 21 12h-2q0-2.925-2.038-4.963Q14.925 5.001 12 5a6.75 6.75 0 0 0-3.225.8A7.4 7.4 0 0 0 6.25 8H9v2zm10.35 4.75L11 12.4V7h2v4.6l1.4 1.4z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeleteHistoryProps {
  size?: string | number;
}

withDefaults(defineProps<DeleteHistoryProps>(), {
  size: 24,
});
</script>
