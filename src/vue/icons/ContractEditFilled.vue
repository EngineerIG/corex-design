<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9 9V7h9v2zm0 3v-2h9v2zm5 10v-3.075l5.525-5.5q.225-.225.5-.325a1.6 1.6 0 0 1 .55-.1 1.5 1.5 0 0 1 1.075.45l.925.925q.2.225.313.5.111.275.112.55 0 .274-.1.563a1.34 1.34 0 0 1-.325.512l-5.5 5.5zm6.575-5.6.925-.975-.925-.925-.95.95zM6 22a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 3 19v-3h3V2h15v9.025a3.8 3.8 0 0 0-2 .35V4H8v12h6l-2 2v4z"/>
  </svg>
</template>

<script setup lang="ts">
interface ContractEditFilledProps {
  size?: string | number;
}

withDefaults(defineProps<ContractEditFilledProps>(), {
  size: 24,
});
</script>
