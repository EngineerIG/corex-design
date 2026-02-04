<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9 16.5q-1.05 0-1.775-.725T6.5 14c0-1.05.242-1.292.725-1.775Q7.95 11.5 9 11.5c1.05 0 1.292.242 1.775.725q.725.725.725 1.775c0 1.05-.242 1.292-.725 1.775Q10.05 16.5 9 16.5M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 22zm0-2h14V10H5z"/>
  </svg>
</template>

<script setup lang="ts">
interface TodayFilledProps {
  size?: string | number;
}

withDefaults(defineProps<TodayFilledProps>(), {
  size: 24,
});
</script>
