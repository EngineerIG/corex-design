<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 21.725 4 17.7a1.95 1.95 0 0 1-1-1.725v-7.95A1.95 1.95 0 0 1 4 6.3l7-4.025Q11.475 2 12 2c.525 0 .683.092 1 .275L20 6.3a1.95 1.95 0 0 1 1 1.725v7.95a1.95 1.95 0 0 1-1 1.725l-7 4.025Q12.525 22 12 22c-.525 0-.683-.092-1-.275m0-9.15v6.85L12 20l1-.575v-6.85L19 9.1V8.05l-1.075-.625L12 10.85 6.075 7.425 5 8.05V9.1z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeFilledProps>(), {
  size: 24,
});
</script>
