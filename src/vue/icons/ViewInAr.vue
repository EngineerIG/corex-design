<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 19.475 6 16.6a1.95 1.95 0 0 1-1-1.725v-5.75A1.95 1.95 0 0 1 6 7.4l5-2.875q.475-.275 1-.275c.525 0 .683.092 1 .275L18 7.4a1.95 1.95 0 0 1 1 1.725v5.75a1.95 1.95 0 0 1-1 1.725l-5 2.875q-.475.275-1 .275c-.525 0-.683-.092-1-.275m0-2.3v-4.6L7 10.25v4.625zm2 0 4-2.3V10.25l-4 2.325zM2 7V4q0-.824.587-1.413A1.93 1.93 0 0 1 4 2h3v2H4v3zm5 15H4q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 20v-3h2v3h3zm10 0v-2h3v-3h2v3q0 .824-.587 1.413A1.93 1.93 0 0 1 20 22zm3-15V4h-3V2h3q.824 0 1.413.587.586.589.587 1.413v3zm-8 3.85 3.95-2.325L12 6.25 8.05 8.525z"/>
  </svg>
</template>

<script setup lang="ts">
interface ViewInArProps {
  size?: string | number;
}

withDefaults(defineProps<ViewInArProps>(), {
  size: 24,
});
</script>
