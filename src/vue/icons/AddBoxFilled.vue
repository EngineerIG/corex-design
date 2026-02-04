<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 13v3q0 .424.287.712.288.288.713.288c.425 0 .52-.096.713-.288A.97.97 0 0 0 13 16v-3h3a.97.97 0 0 0 .712-.287A.97.97 0 0 0 17 12a.97.97 0 0 0-.288-.713A.97.97 0 0 0 16 11h-3V8a.97.97 0 0 0-.287-.713A.97.97 0 0 0 12 7a.97.97 0 0 0-.713.287A.97.97 0 0 0 11 8v3H8a.97.97 0 0 0-.713.287A.97.97 0 0 0 7 12q0 .424.287.713Q7.575 13 8 13zm-6 8q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 19V5q0-.824.587-1.413A1.93 1.93 0 0 1 5 3h14q.824 0 1.413.587.586.589.587 1.413v14q0 .824-.587 1.413A1.93 1.93 0 0 1 19 21z"/>
  </svg>
</template>

<script setup lang="ts">
interface AddBoxFilledProps {
  size?: string | number;
}

withDefaults(defineProps<AddBoxFilledProps>(), {
  size: 24,
});
</script>
