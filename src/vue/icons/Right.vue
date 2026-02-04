<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6.495 4.527A1.817 1.817 0 0 1 9.068 1.96l8.301 8.3a2 2 0 0 1 0 2.829l-8.3 8.3a1.817 1.817 0 0 1-2.574-2.566l7.109-7.148-7.11-7.148Z"/>
  </svg>
</template>

<script setup lang="ts">
interface RightProps {
  size?: string | number;
}

withDefaults(defineProps<RightProps>(), {
  size: 24,
});
</script>
