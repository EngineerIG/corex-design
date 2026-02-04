<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 4v6.025V10v10zm0 18q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V4q0-.824.587-1.413A1.93 1.93 0 0 1 5 2h8l6 6v2.5a6 6 0 0 0-.975-.313A8 8 0 0 0 17 10.025V9h-5V4H5v16h6.025q.4.6.9 1.113a6 6 0 0 0 1.1.887zm11.5-3q1.05 0 1.775-.725T19 16.5c0-1.05-.242-1.292-.725-1.775Q17.55 14 16.5 14c-1.05 0-1.292.242-1.775.725Q14 15.45 14 16.5c0 1.05.242 1.292.725 1.775Q15.45 19 16.5 19m5.1 4-2.7-2.7a4 4 0 0 1-1.137.525A4.6 4.6 0 0 1 16.5 21q-1.875 0-3.188-1.313Q12 18.376 12 16.5t1.313-3.188Q14.625 12 16.5 12t3.188 1.313Q21 14.625 21 16.5q0 .65-.175 1.262A4 4 0 0 1 20.3 18.9l2.7 2.7z"/>
  </svg>
</template>

<script setup lang="ts">
interface DocumentSearchProps {
  size?: string | number;
}

withDefaults(defineProps<DocumentSearchProps>(), {
  size: 24,
});
</script>
