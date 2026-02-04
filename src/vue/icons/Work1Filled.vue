<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 19V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.413A1.93 1.93 0 0 1 10 2h4q.825 0 1.412.587Q16 3.176 16 4v2h4q.824 0 1.413.588Q22 7.175 22 8v11q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm6-15h4V4h-4z"/>
  </svg>
</template>

<script setup lang="ts">
interface Work1FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Work1FilledProps>(), {
  size: 24,
});
</script>
