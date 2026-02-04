<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="M5 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 19v-6h2v6h6v2zm8 0v-2h6v-6h2v6q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21zm-7-4 3-4 2.25 3 3-4L18 17zm-3-6V5q0-.824.587-1.413A1.93 1.93 0 0 1 5 3h6v2H5v6zm16 0V5h-6V3h6q.824 0 1.413.587.586.589.587 1.413v6zm-3.5-1q-.65 0-1.075-.425T14 8.5t.425-1.075T15.5 7t1.075.425T17 8.5t-.425 1.075T15.5 10"/></g>
  </svg>
</template>

<script setup lang="ts">
interface WallpaperProps {
  size?: string | number;
}

withDefaults(defineProps<WallpaperProps>(), {
  size: 24,
});
</script>
