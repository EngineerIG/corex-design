<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m14.225 18.475 1.75-1.75 1.75 1.75.75-.75L16.75 16l1.75-1.75-.75-.75L16 15.25l-1.75-1.75-.75.75L15.25 16l-1.75 1.75zM2 19V3l14.3 6H16q-.875 0-1.65.2a8 8 0 0 0-1.5.55L4 6v3.5l6 1.5-6 1.5V16l5.4-2.3a7.4 7.4 0 0 0-.3 1.138A6.6 6.6 0 0 0 9 16v.05zm14 2q-2.075 0-3.537-1.462Q11 18.074 11 16c0-2.074.488-2.563 1.463-3.537Q13.925 11 16 11c2.075 0 2.563.488 3.538 1.463Q21 13.925 21 16c0 2.075-.488 2.563-1.462 3.538Q18.074 21 16 21"/>
  </svg>
</template>

<script setup lang="ts">
interface CancelScheduleSendProps {
  size?: string | number;
}

withDefaults(defineProps<CancelScheduleSendProps>(), {
  size: 24,
});
</script>
