<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M13.337 2.52V7h-.947V2.52zm4.526 0V7h-.818l-1.949-2.82h-.033V7h-.947V2.52h.831l1.934 2.818h.04V2.52zm.612.781V2.52h3.68v.781h-1.372V7h-.936V3.301zM3.75 22.5V8.25h12L14.25 12l1.5 3.75H5.25v6.75z"/>
  </svg>
</template>

<script setup lang="ts">
interface IntFilledProps {
  size?: string | number;
}

withDefaults(defineProps<IntFilledProps>(), {
  size: 24,
});
</script>
