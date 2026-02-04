<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M10.55 9.783 4.921 6.53 3.9 7.123v.998l6.65 3.848L17.2 8.12v-.998l-1.021-.593zM9.6 20.115 2.95 16.29A1.85 1.85 0 0 1 2 14.652V7.1a1.85 1.85 0 0 1 .95-1.639L9.6 1.637a1.87 1.87 0 0 1 1.9 0l6.65 3.824A1.85 1.85 0 0 1 19.1 7.1v4.417a6.6 6.6 0 0 0-2.85-.641q-2.755 0-4.703 1.947-1.946 1.949-1.947 4.703 0 .76.154 1.46.155.702.463 1.342a6 6 0 0 0-.32-.083.9.9 0 0 1-.297-.13m6.65 2.161q-1.971 0-3.36-1.39-1.39-1.389-1.39-3.36c0-1.971.463-2.434 1.39-3.36q1.389-1.39 3.36-1.39c1.971 0 2.434.463 3.36 1.39Q21 15.555 21 17.526c0 1.971-.463 2.434-1.39 3.36q-1.389 1.39-3.36 1.39m.475-4.94v-2.66h-.95v3.04l2.042 2.043.666-.666z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeHistoryFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeHistoryFilledProps>(), {
  size: 24,
});
</script>
