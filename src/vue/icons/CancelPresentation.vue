<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m9.4 16 2.6-2.6 2.6 2.6 1.4-1.4-2.6-2.6L16 9.4 14.6 8 12 10.6 9.4 8 8 9.4l2.6 2.6L8 14.6zM4 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm0-2h16V6H4z"/>
  </svg>
</template>

<script setup lang="ts">
interface CancelPresentationProps {
  size?: string | number;
}

withDefaults(defineProps<CancelPresentationProps>(), {
  size: 24,
});
</script>
