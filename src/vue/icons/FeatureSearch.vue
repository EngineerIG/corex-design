<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m18 13.25 2 2V20q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22H4q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h5.5q-.2.45-.3.963A11 11 0 0 0 9.05 6H4v14h14zm1.3-4.35 3.2 3.2-1.4 1.4-3.2-3.2q-.525.3-1.125.5c-.6.2-.825.2-1.275.2q-1.875 0-3.188-1.313Q11.001 8.375 11 6.5q0-1.875 1.313-3.188Q13.625 2.001 15.5 2q1.875 0 3.188 1.313Q20 4.623 20 6.5q0 .675-.2 1.275T19.3 8.9m-3.8.1q1.05 0 1.775-.725T18 6.5c0-1.05-.242-1.292-.725-1.775Q16.55 4 15.5 4c-1.05 0-1.292.242-1.775.725Q13 5.45 13 6.5c0 1.05.242 1.292.725 1.775Q14.45 9 15.5 9M4 20V6v7-.3z"/>
  </svg>
</template>

<script setup lang="ts">
interface FeatureSearchProps {
  size?: string | number;
}

withDefaults(defineProps<FeatureSearchProps>(), {
  size: 24,
});
</script>
