<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3 21v-4.25L16.2 3.575q.3-.275.663-.425.361-.15.762-.15c.401 0 .525.05.775.15q.375.15.65.45L20.425 5q.3.275.438.65a2.17 2.17 0 0 1 0 1.512 1.9 1.9 0 0 1-.438.663L7.25 21zM17.6 7.8 19 6.4 17.6 5l-1.4 1.4z"/>
  </svg>
</template>

<script setup lang="ts">
interface Edit1FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Edit1FilledProps>(), {
  size: 24,
});
</script>
