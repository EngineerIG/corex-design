<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M3 19V9.375q0-.625.35-1.138t.925-.737L14.65 3.525q.5-.2.925.1T16 4.45V12h1q0-.825.587-1.413A1.93 1.93 0 0 1 19 10q.824 0 1.413.587Q21 11.175 21 12v7q0 .825-.587 1.412A1.93 1.93 0 0 1 19 21H5q-.824 0-1.413-.588A1.93 1.93 0 0 1 3 19m2 0h4v-5q0-.825.588-1.413A1.93 1.93 0 0 1 11 12h3V5.9L5 9.375zm6 0h3v-2a.97.97 0 0 1 .287-.713A.97.97 0 0 1 15 16q.424 0 .713.287.287.288.287.713v2h3v-5h-8z"/>
  </svg>
</template>

<script setup lang="ts">
interface VillaProps {
  size?: string | number;
}

withDefaults(defineProps<VillaProps>(), {
  size: 24,
});
</script>
