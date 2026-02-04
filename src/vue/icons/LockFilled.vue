<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 22q-.824 0-1.412-.587A1.93 1.93 0 0 1 4 20V10q0-.825.588-1.412A1.93 1.93 0 0 1 6 8h1V6q0-2.075 1.463-3.538Q9.925 1 12 1c2.075 0 2.563.488 3.537 1.462Q17 3.926 17 6v2h1q.824 0 1.413.588Q20 9.175 20 10v10q0 .824-.587 1.413A1.93 1.93 0 0 1 18 22zm6-5q.825 0 1.412-.587Q14 15.825 14 15c0-.825-.196-1.02-.588-1.412A1.93 1.93 0 0 0 12 13q-.825 0-1.412.588A1.93 1.93 0 0 0 10 15q0 .824.588 1.413Q11.175 17 12 17M9 8h6V6q0-1.25-.875-2.125A2.9 2.9 0 0 0 12 3q-1.25 0-2.125.875A2.9 2.9 0 0 0 9 6z"/>
  </svg>
</template>

<script setup lang="ts">
interface LockFilledProps {
  size?: string | number;
}

withDefaults(defineProps<LockFilledProps>(), {
  size: 24,
});
</script>
