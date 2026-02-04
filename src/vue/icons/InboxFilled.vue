<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587.586.589.587 1.413v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm7-5q.8 0 1.475-.412.675-.413 1.1-1.088.15-.224.375-.363a.94.94 0 0 1 .5-.137H19V5H5v9h3.55a.94.94 0 0 1 .5.137q.225.138.375.363.425.675 1.1 1.088Q11.2 16 12 16"/>
  </svg>
</template>

<script setup lang="ts">
interface InboxFilledProps {
  size?: string | number;
}

withDefaults(defineProps<InboxFilledProps>(), {
  size: 24,
});
</script>
