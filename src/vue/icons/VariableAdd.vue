<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M14 17H3V7h18v3h-2V9H5v6h9zm5 3v-3h-3v-2h3v-3h2v3h3v2h-3v3z"/>
  </svg>
</template>

<script setup lang="ts">
interface VariableAddProps {
  size?: string | number;
}

withDefaults(defineProps<VariableAddProps>(), {
  size: 24,
});
</script>
