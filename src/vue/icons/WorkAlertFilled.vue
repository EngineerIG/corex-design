<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M10 6h4V4h-4zm8 17q-2.075 0-3.537-1.462Q13 20.074 13 18c0-2.074.488-2.563 1.463-3.537Q15.925 13 18 13c2.075 0 2.563.488 3.538 1.463Q23 15.925 23 18c0 2.075-.488 2.563-1.462 3.538Q20.074 23 18 23M4 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 19V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.413A1.93 1.93 0 0 1 10 2h4q.825 0 1.412.587Q16 3.176 16 4v2h4q.824 0 1.413.588Q22 7.175 22 8v4.275a6.8 6.8 0 0 0-1.9-.95A6.9 6.9 0 0 0 18 11q-2.9 0-4.95 2.05T11 18q0 .776.162 1.538.164.762.513 1.462zm14 0a.48.48 0 0 0 .35-.15.48.48 0 0 0 0-.7.48.48 0 0 0-.7 0 .48.48 0 0 0 0 .7q.15.15.35.15m-.5-2h1v-4h-1z"/>
  </svg>
</template>

<script setup lang="ts">
interface WorkAlertFilledProps {
  size?: string | number;
}

withDefaults(defineProps<WorkAlertFilledProps>(), {
  size: 24,
});
</script>
