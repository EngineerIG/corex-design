<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M17 22v-3h-3v-2h3v-3h2v3h3v2h-3v3zM5 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h6V2h2v2h1q.824 0 1.413.588Q19 5.175 19 6v6.1a6.7 6.7 0 0 0-2 0V10H5v8h7q0 .5.075 1t.275 1z"/>
  </svg>
</template>

<script setup lang="ts">
interface CalendarAddOnFilledProps {
  size?: string | number;
}

withDefaults(defineProps<CalendarAddOnFilledProps>(), {
  size: 24,
});
</script>
