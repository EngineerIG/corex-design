<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M13 11V2.1q3.574.375 6.037 2.85T21.9 11zm-1.975 10.875q-3.801-.375-6.363-3.2Q2.1 15.848 2.1 12q0-3.876 2.562-6.7 2.563-2.825 6.363-3.2zm1.975 0v-8.9h8.9q-.351 3.575-2.838 6.062T13 21.875"/>
  </svg>
</template>

<script setup lang="ts">
interface PieChartFilledProps {
  size?: string | number;
}

withDefaults(defineProps<PieChartFilledProps>(), {
  size: 24,
});
</script>
