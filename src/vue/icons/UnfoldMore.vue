<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 18.1 2.325-2.325q.3-.3.725-.3c.425 0 .525.1.725.3q.3.3.3.725t-.3.725L12.7 20.3a.9.9 0 0 1-.325.213 1.1 1.1 0 0 1-.375.062q-.2 0-.375-.062a.9.9 0 0 1-.325-.213l-3.075-3.075q-.3-.3-.3-.725t.3-.725.725-.3.725.3zM12 6 9.675 8.325q-.3.3-.725.3a.99.99 0 0 1-.725-.3q-.3-.3-.3-.725t.3-.725L11.3 3.8q.15-.15.325-.212.175-.063.375-.063c.2 0 .258.021.375.063a.9.9 0 0 1 .325.212l3.075 3.075q.3.3.3.725 0 .426-.3.725-.3.3-.725.3a.99.99 0 0 1-.725-.3z"/>
  </svg>
</template>

<script setup lang="ts">
interface UnfoldMoreProps {
  size?: string | number;
}

withDefaults(defineProps<UnfoldMoreProps>(), {
  size: 24,
});
</script>
