<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V4q0-.824.588-1.413A1.93 1.93 0 0 1 6 2h8l6 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm5-3h2v-1h1a.97.97 0 0 0 .713-.288A.97.97 0 0 0 15 17v-3a.97.97 0 0 0-.287-.713A.97.97 0 0 0 14 13h-3v-1h4v-2h-2V9h-2v1h-1a.97.97 0 0 0-.713.287A.97.97 0 0 0 9 11v3q0 .424.287.713Q9.575 15 10 15h3v1H9v2h2zm2.175-11h4l-4-4z"/>
  </svg>
</template>

<script setup lang="ts">
interface RequestQuoteFilledProps {
  size?: string | number;
}

withDefaults(defineProps<RequestQuoteFilledProps>(), {
  size: 24,
});
</script>
