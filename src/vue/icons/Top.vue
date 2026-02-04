<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4.852 17.18a1.817 1.817 0 0 1-2.567-2.573l8.3-8.301a2 2 0 0 1 2.83 0l8.3 8.3a1.817 1.817 0 0 1-2.567 2.574L12 10.07z"/>
  </svg>
</template>

<script setup lang="ts">
interface TopProps {
  size?: string | number;
}

withDefaults(defineProps<TopProps>(), {
  size: 24,
});
</script>
