<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M13.414 17.044a2 2 0 0 1-2.828 0l-8.3-8.3A1.817 1.817 0 0 1 4.851 6.17L12 13.28l7.148-7.11a1.817 1.817 0 0 1 2.567 2.573z"/>
  </svg>
</template>

<script setup lang="ts">
interface DownProps {
  size?: string | number;
}

withDefaults(defineProps<DownProps>(), {
  size: 24,
});
</script>
