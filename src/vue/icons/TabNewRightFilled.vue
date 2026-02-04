<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m19 23-1.4-1.4 1.575-1.6H15v-2h4.175L17.6 16.4 19 15l4 4zM5 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587.586.589.587 1.413v8.35a5.6 5.6 0 0 0-.988-.262A6 6 0 0 0 18.976 13q-2.5 0-4.238 1.75Q13.001 16.5 13 19q0 .525.088 1.025.087.5.262.975zm6-4h2v-4h4v-2h-4V7h-2v4H7v2h4z"/>
  </svg>
</template>

<script setup lang="ts">
interface TabNewRightFilledProps {
  size?: string | number;
}

withDefaults(defineProps<TabNewRightFilledProps>(), {
  size: 24,
});
</script>
