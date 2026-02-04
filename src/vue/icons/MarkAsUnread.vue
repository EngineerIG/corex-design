<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 17q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 15V7.15q0-.375.212-.738.213-.362.588-.562l6.8-3.4q.425-.2.9-.213t.9.213l6.65 3.4q.3.15.512.475T18.85 7h-2.925L10.5 4.25 4 7.475zm3 4q-.824 0-1.412-.587A1.93 1.93 0 0 1 5 19v-9q0-.824.588-1.413A1.93 1.93 0 0 1 7 8h13q.824 0 1.413.587Q22 9.175 22 10v9q0 .824-.587 1.413A1.93 1.93 0 0 1 20 21zm5.575-6.125L7 12v7h13v-7l-5.575 2.875Q14 15.1 13.5 15.1t-.925-.225m.925-1.525L20 10H7z"/>
  </svg>
</template>

<script setup lang="ts">
interface MarkAsUnreadProps {
  size?: string | number;
}

withDefaults(defineProps<MarkAsUnreadProps>(), {
  size: 24,
});
</script>
