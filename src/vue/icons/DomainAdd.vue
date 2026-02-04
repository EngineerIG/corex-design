<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 21q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 4 3h6q.825 0 1.412.587Q12 4.176 12 5v2h8q.824 0 1.413.588Q22 8.175 22 9v5a.97.97 0 0 1-.288.713A.97.97 0 0 1 21 15a.97.97 0 0 1-.712-.287A.97.97 0 0 1 20 14V9h-8v2h2v2h-2v2h2v2h-2v2h3a.97.97 0 0 1 .713.288Q16 19.575 16 20c0 .425-.096.52-.287.712A.97.97 0 0 1 15 21zm0-2h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm0-4h2V5H4zm4 12h2v-2H8zm0-4h2v-2H8zm0-4h2V9H8zm0-4h2V5H8zm13 16a.97.97 0 0 1-.712-.288A.97.97 0 0 1 20 22v-1h-1a.97.97 0 0 1-.712-.288A.97.97 0 0 1 18 20q0-.424.288-.712A.97.97 0 0 1 19 19h1v-1q0-.424.288-.712A.97.97 0 0 1 21 17q.424 0 .712.288A.97.97 0 0 1 22 18v1h1q.424 0 .712.288.288.287.288.712c0 .425-.096.52-.288.712A.97.97 0 0 1 23 21h-1v1q0 .424-.288.712A.97.97 0 0 1 21 23m-5-10v-2h2v2zm0 4v-2h2v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface DomainAddProps {
  size?: string | number;
}

withDefaults(defineProps<DomainAddProps>(), {
  size: 24,
});
</script>
