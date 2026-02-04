<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v5h-2v-1H5v10h7v2zM5 8h14V6H5zm9 14v-3.075l5.525-5.5q.225-.225.5-.325a1.6 1.6 0 0 1 .55-.1 1.5 1.5 0 0 1 1.075.45l.925.925q.2.225.313.5.111.275.112.55 0 .274-.1.563a1.34 1.34 0 0 1-.325.512l-5.5 5.5zm1.5-1.5h.95l3.025-3.05-.45-.475-.475-.45-3.05 3.025zm3.525-3.525-.475-.45.925.925z"/>
  </svg>
</template>

<script setup lang="ts">
interface EditCalendarProps {
  size?: string | number;
}

withDefaults(defineProps<EditCalendarProps>(), {
  size: 24,
});
</script>
