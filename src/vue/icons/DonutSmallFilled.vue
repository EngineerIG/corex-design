<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M14.825 11a3.1 3.1 0 0 0-.687-1.138 2.75 2.75 0 0 0-1.113-.712v-7.1q3.576.35 6.088 2.862T21.975 11zm-3.8 10.95q-3.849-.375-6.425-3.225T2.025 12 4.6 5.275q2.576-2.85 6.425-3.225v7.1q-.9.324-1.45 1.112A2.97 2.97 0 0 0 9.025 12q0 .95.55 1.712.55.763 1.45 1.088zm2 0V14.8q.651-.226 1.113-.688T14.825 13h7.15q-.35 3.575-2.862 6.087-2.512 2.513-6.088 2.863"/>
  </svg>
</template>

<script setup lang="ts">
interface DonutSmallFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DonutSmallFilledProps>(), {
  size: 24,
});
</script>
