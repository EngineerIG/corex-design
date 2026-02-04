<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 13a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h12a.97.97 0 0 1 .712.287Q19 11.575 19 12c0 .425-.096.52-.288.713A.97.97 0 0 1 18 13z"/>
  </svg>
</template>

<script setup lang="ts">
interface MinusProps {
  size?: string | number;
}

withDefaults(defineProps<MinusProps>(), {
  size: 24,
});
</script>
