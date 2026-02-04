<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m17 21 3-3-.7-.7-1.8 1.8V15h-1v4.1l-1.8-1.8-.7.7zM11 3 5.075 6.425 11 9.85l5.925-3.425zM2 14.975v-7.95A1.95 1.95 0 0 1 3 5.3l7-4.025q.25-.125.488-.2a1.8 1.8 0 0 1 1.037 0 2.4 2.4 0 0 1 .475.2L19 5.3a1.95 1.95 0 0 1 1 1.725V11h-2V8.1l-7.025 4.05L4 8.1v6.85l6 3.475v2.3L3 16.7a1.95 1.95 0 0 1-1-1.725M17 23q-2.075 0-3.537-1.462Q12 20.074 12 18c0-2.074.488-2.563 1.463-3.537Q14.925 13 17 13c2.075 0 2.563.488 3.538 1.463Q22 15.925 22 18c0 2.075-.488 2.563-1.462 3.538Q19.074 23 17 23"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeDownloaderProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeDownloaderProps>(), {
  size: 24,
});
</script>
