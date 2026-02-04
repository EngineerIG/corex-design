<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M14 22v-3.075l5.525-5.5q.225-.225.5-.325a1.6 1.6 0 0 1 .55-.1 1.5 1.5 0 0 1 1.075.45l.925.925q.2.225.313.5.111.275.112.55 0 .274-.1.563a1.34 1.34 0 0 1-.325.512l-5.5 5.5zm6.575-5.6.925-.975-.925-.925-.95.95zM4 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v3.3a3.8 3.8 0 0 0-1.475-.3q-.7 0-1.313.25A3.4 3.4 0 0 0 18.1 12L12 18.1V20z"/>
  </svg>
</template>

<script setup lang="ts">
interface BookmarkManagerFilledProps {
  size?: string | number;
}

withDefaults(defineProps<BookmarkManagerFilledProps>(), {
  size: 24,
});
</script>
