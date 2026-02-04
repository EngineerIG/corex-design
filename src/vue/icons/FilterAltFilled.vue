<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 20a.97.97 0 0 1-.712-.288A.97.97 0 0 1 10 19v-6L4.2 5.6q-.375-.5-.112-1.05C4.351 4 4.567 4 5 4h14q.65 0 .913.55.262.55-.113 1.05L14 13v6a.97.97 0 0 1-.287.712A.97.97 0 0 1 13 20z"/>
  </svg>
</template>

<script setup lang="ts">
interface FilterAltFilledProps {
  size?: string | number;
}

withDefaults(defineProps<FilterAltFilledProps>(), {
  size: 24,
});
</script>
