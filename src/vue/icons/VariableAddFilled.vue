<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3 17V7h18v3.075a3.4 3.4 0 0 0-.488-.063A10 10 0 0 0 20 10q-2.5 0-4.25 1.75T14 16q0 .275.012.512.013.238.063.488zm16 3v-3h-3v-2h3v-3h2v3h3v2h-3v3z"/>
  </svg>
</template>

<script setup lang="ts">
interface VariableAddFilledProps {
  size?: string | number;
}

withDefaults(defineProps<VariableAddFilledProps>(), {
  size: 24,
});
</script>
