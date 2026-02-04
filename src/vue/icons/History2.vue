<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 22q-3.875 0-6.725-2.575T2.05 13h2.025q.375 3.026 2.637 5.012Q8.975 20 12 20q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4a7.83 7.83 0 0 0-3.988 1.063A7.8 7.8 0 0 0 5.1 8H8v2H2.2q.724-3.5 3.475-5.75Q8.425 2 12 2a9.7 9.7 0 0 1 3.9.788 10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22m2.8-5.8L11 12.4V7h2v4.6l3.2 3.2z"/>
  </svg>
</template>

<script setup lang="ts">
interface History2Props {
  size?: string | number;
}

withDefaults(defineProps<History2Props>(), {
  size: 24,
});
</script>
