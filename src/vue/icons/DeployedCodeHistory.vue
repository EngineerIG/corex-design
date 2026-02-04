<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M16.725 17.336v-2.66h-.95v3.04l2.042 2.043.666-.666zM10.55 3.276 4.921 6.53l5.629 3.253 5.629-3.253zM2 14.652V7.1a1.85 1.85 0 0 1 .95-1.639L9.6 1.637a3 3 0 0 1 .463-.19 1.73 1.73 0 0 1 .986 0q.237.072.451.19l6.65 3.824A1.85 1.85 0 0 1 19.1 7.1v3.776h-1.9V8.121l-6.674 3.848L3.9 8.12v6.508l5.7 3.3v2.186L2.95 16.29A1.85 1.85 0 0 1 2 14.652m14.25 7.624q-1.971 0-3.36-1.39-1.39-1.389-1.39-3.36c0-1.971.463-2.434 1.39-3.36q1.389-1.39 3.36-1.39c1.971 0 2.434.463 3.36 1.39Q21 15.555 21 17.526c0 1.971-.463 2.434-1.39 3.36q-1.389 1.39-3.36 1.39"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeHistoryProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeHistoryProps>(), {
  size: 24,
});
</script>
