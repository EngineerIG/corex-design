<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 23H3q-.824 0-1.413-.587A1.93 1.93 0 0 1 1 21v-3h2v3h3zm12 0v-2h3v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 21 23zm-6-4.5q-3 0-5.438-1.775Q4.126 14.951 3 12q1.125-2.95 3.563-4.725Q9 5.5 12 5.5t5.438 1.775T21 12q-1.125 2.95-3.563 4.725Q15.001 18.5 12 18.5m0-3q1.45 0 2.475-1.025A3.37 3.37 0 0 0 15.5 12q0-1.45-1.025-2.475A3.37 3.37 0 0 0 12 8.5q-1.45 0-2.475 1.025A3.37 3.37 0 0 0 8.5 12q0 1.45 1.025 2.475A3.37 3.37 0 0 0 12 15.5m0-2q-.624 0-1.063-.438A1.45 1.45 0 0 1 10.5 12q0-.624.438-1.063A1.45 1.45 0 0 1 12 10.5q.624 0 1.063.438.437.437.437 1.062 0 .624-.438 1.063A1.45 1.45 0 0 1 12 13.5M1 6V3q0-.824.587-1.413A1.93 1.93 0 0 1 3 1h3v2H3v3zm20 0V3h-3V1h3q.824 0 1.413.587.586.589.587 1.413v3z"/>
  </svg>
</template>

<script setup lang="ts">
interface EyeTrackingFilledProps {
  size?: string | number;
}

withDefaults(defineProps<EyeTrackingFilledProps>(), {
  size: 24,
});
</script>
