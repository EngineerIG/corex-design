<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v4.675q0 .424-.288.712a.97.97 0 0 1-.712.288.97.97 0 0 1-.712-.288.97.97 0 0 1-.288-.712V10H5v10h5.8q.424 0 .712.288.288.287.288.712c0 .425-.096.52-.288.712A.97.97 0 0 1 10.8 22zm13 1q-2.075 0-3.537-1.462Q13 20.074 13 18c0-2.074.488-2.563 1.463-3.537Q15.925 13 18 13c2.075 0 2.563.488 3.538 1.463Q23 15.925 23 18c0 2.075-.488 2.563-1.462 3.538Q20.074 23 18 23m1.675-2.625.7-.7L18.5 17.8V15h-1v3.2z"/>
  </svg>
</template>

<script setup lang="ts">
interface CalendarClockFilledProps {
  size?: string | number;
}

withDefaults(defineProps<CalendarClockFilledProps>(), {
  size: 24,
});
</script>
