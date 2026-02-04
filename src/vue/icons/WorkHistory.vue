<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 19V8q0-.824.587-1.412A1.93 1.93 0 0 1 4 6h4V4q0-.824.588-1.413A1.93 1.93 0 0 1 10 2h4q.825 0 1.412.587Q16 3.176 16 4v2h4q.824 0 1.413.588Q22 7.175 22 8v4.275a6 6 0 0 0-.95-.563A8 8 0 0 0 20 11.3V8H4v11h7.075a7 7 0 0 0 .6 2zm6-15h4V4h-4zm8 17q-2.075 0-3.537-1.462Q13 20.074 13 18c0-2.074.488-2.563 1.463-3.537Q15.925 13 18 13c2.075 0 2.563.488 3.538 1.463Q23 15.925 23 18c0 2.075-.488 2.563-1.462 3.538Q20.074 23 18 23m.5-5.2V15h-1v3.2l2.15 2.15.7-.7z"/>
  </svg>
</template>

<script setup lang="ts">
interface WorkHistoryProps {
  size?: string | number;
}

withDefaults(defineProps<WorkHistoryProps>(), {
  size: 24,
});
</script>
