<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9 21v-7q0-.825.588-1.413A1.93 1.93 0 0 1 11 12h6q0-.825.587-1.413A1.93 1.93 0 0 1 19 10q.824 0 1.413.587Q21 11.175 21 12v9h-5v-4a.97.97 0 0 0-.287-.713A.97.97 0 0 0 15 16a.97.97 0 0 0-.713.287A.97.97 0 0 0 14 17v4zm-6 0V9.375q0-.625.35-1.138t.925-.737L14.65 3.525q.5-.2.925.1T16 4.45V10h-6a2.9 2.9 0 0 0-2.125.875A2.9 2.9 0 0 0 7 13v8z"/>
  </svg>
</template>

<script setup lang="ts">
interface VillaFilledProps {
  size?: string | number;
}

withDefaults(defineProps<VillaFilledProps>(), {
  size: 24,
});
</script>
