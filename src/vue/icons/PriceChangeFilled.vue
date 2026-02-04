<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M2 20V4h20v16zm6-3h2v-1h1q.424 0 .713-.287A.97.97 0 0 0 12 15v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 11 11H8v-1h4V8h-2V7H8v1H7a.97.97 0 0 0-.713.287A.97.97 0 0 0 6 9v3q0 .424.287.713Q6.575 13 7 13h3v1H6v2h2zm8-.75 2-2h-4zM14 10h4l-2-2z"/>
  </svg>
</template>

<script setup lang="ts">
interface PriceChangeFilledProps {
  size?: string | number;
}

withDefaults(defineProps<PriceChangeFilledProps>(), {
  size: 24,
});
</script>
