<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4.806 13.414a2 2 0 0 1 0-2.828l8.3-8.3a1.817 1.817 0 0 1 2.574 2.566L8.57 12l7.11 7.148a1.817 1.817 0 0 1-2.574 2.567z"/>
  </svg>
</template>

<script setup lang="ts">
interface LeftProps {
  size?: string | number;
}

withDefaults(defineProps<LeftProps>(), {
  size: 24,
});
</script>
