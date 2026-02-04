<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M1 21v-2h22v2zm3-3q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 16V5q0-.824.587-1.413A1.93 1.93 0 0 1 4 3h16q.824 0 1.413.587.586.589.587 1.413v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 18zm0-2h16V5H4zm7-1.5h2v-4.175l1.6 1.575 1.4-1.4-4-4-4 4 1.4 1.425 1.6-1.6z"/>
  </svg>
</template>

<script setup lang="ts">
interface ComputerArrowUpProps {
  size?: string | number;
}

withDefaults(defineProps<ComputerArrowUpProps>(), {
  size: 24,
});
</script>
