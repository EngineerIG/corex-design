<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 22-7-7 1.4-1.425 4.6 4.6V11h2v7.175l4.6-4.575L19 15zM11 9V6h2v3zm0-5V2h2v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowCoolDownProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowCoolDownProps>(), {
  size: 24,
});
</script>
