<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h6l2 2h8q.824 0 1.413.588Q22 7.175 22 8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm7-3h2v-4.2l1.6 1.6L16 13l-4-4-4 4 1.4 1.4 1.6-1.6z"/>
  </svg>
</template>

<script setup lang="ts">
interface DriveFolderUploadFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DriveFolderUploadFilledProps>(), {
  size: 24,
});
</script>
