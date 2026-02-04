<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M2 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 4 3h6q.825 0 1.412.587Q12 4.176 12 5v2h8q.824 0 1.413.588Q22 8.175 22 9v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21H4q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 19m2 0h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 12h2v-2H8zm0-4h2v-2H8zm0-4h2V9H8zm0-4h2V5H8zm4 12h8V9h-8v2h2v2h-2v2h2v2h-2zm4-6v-2h2v2zm0 4v-2h2v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface DomainProps {
  size?: string | number;
}

withDefaults(defineProps<DomainProps>(), {
  size: 24,
});
</script>
