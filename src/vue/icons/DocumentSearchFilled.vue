<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M16.5 19q1.05 0 1.775-.725T19 16.5c0-1.05-.242-1.292-.725-1.775Q17.55 14 16.5 14c-1.05 0-1.292.242-1.775.725Q14 15.45 14 16.5c0 1.05.242 1.292.725 1.775Q15.45 19 16.5 19m5.1 4-2.7-2.675a4.57 4.57 0 0 1-2.4.675q-1.875 0-3.188-1.313Q12 18.376 12 16.5t1.313-3.188Q14.625 12 16.5 12t3.188 1.313Q21 14.625 21 16.5q0 .675-.188 1.288a4.8 4.8 0 0 1-.512 1.137L23 21.6zM5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V4q0-.824.587-1.413A1.93 1.93 0 0 1 5 2h8l6 6v2.5a6.5 6.5 0 0 0-2.5-.5q-3.075 0-4.813 2.037T9.95 16.575a6.54 6.54 0 0 0 .738 3q.736 1.45 2.337 2.425zm7-13h5l-5-5z"/>
  </svg>
</template>

<script setup lang="ts">
interface DocumentSearchFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DocumentSearchFilledProps>(), {
  size: 24,
});
</script>
