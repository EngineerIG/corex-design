<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 13.49-5.217 5.217a1 1 0 0 1-.745.293 1 1 0 0 1-.745-.293A1 1 0 0 1 5 17.962q0-.453.293-.745L10.509 12 5.293 6.783A1 1 0 0 1 5 6.038q0-.453.293-.745A1 1 0 0 1 6.038 5q.453 0 .745.293L12 10.509l5.217-5.216A1 1 0 0 1 17.962 5q.453 0 .745.293.293.292.293.745c0 .453-.098.55-.293.745L13.491 12l5.216 5.217q.293.292.293.745c0 .453-.098.55-.293.745a1 1 0 0 1-.745.293 1 1 0 0 1-.745-.293z"/>
  </svg>
</template>

<script setup lang="ts">
interface CloseProps {
  size?: string | number;
}

withDefaults(defineProps<CloseProps>(), {
  size: 24,
});
</script>
