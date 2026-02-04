<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M18 13q2.075 0 3.537 1.463Q23 15.925 23 18c0 2.075-.488 2.562-1.463 3.537Q20.075 23 18 23c-2.075 0-2.562-.488-3.537-1.463Q13 20.075 13 18c0-2.075.488-2.562 1.463-3.537Q15.925 13 18 13m-3 5 .7.7 1.8-1.8V21h1v-4.1l1.8 1.8.7-.7-3-3zM12 1q.275 0 .525.075a2.4 2.4 0 0 1 .475.2L20 5.3a1.95 1.95 0 0 1 1 1.726V11h-2V8.1l-7.025 4.05L5 8.1v6.85l6 3.475v2.3L4 16.7a1.95 1.95 0 0 1-1-1.726V7.026A1.95 1.95 0 0 1 4 5.3l7-4.025a3.4 3.4 0 0 1 .487-.2Q11.726 1 12 1M6.075 6.425 12 9.85l5.925-3.425L12 3z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeUpdateProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeUpdateProps>(), {
  size: 24,
});
</script>
