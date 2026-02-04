<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 1 20V9h2v11h17v2zm4-4q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 16V5h5V3q0-.824.588-1.413A1.93 1.93 0 0 1 12 1h4q.824 0 1.413.587.586.589.587 1.413v2h5v11q0 .824-.587 1.413A1.93 1.93 0 0 1 21 18zm5-13h4V3h-4z"/>
  </svg>
</template>

<script setup lang="ts">
interface CasesFilledProps {
  size?: string | number;
}

withDefaults(defineProps<CasesFilledProps>(), {
  size: 24,
});
</script>
