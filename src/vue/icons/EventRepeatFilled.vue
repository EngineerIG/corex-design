<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V6q0-.824.587-1.412A1.93 1.93 0 0 1 5 4h1V2h2v2h8V2h2v2h1q.824 0 1.413.588Q21 5.175 21 6v6h-2v-2H5v10h7v2zm14 2q-1.826 0-3.188-1.137A4.9 4.9 0 0 1 14.1 20h1.55q.326 1.1 1.237 1.8.913.7 2.113.7 1.45 0 2.475-1.025A3.37 3.37 0 0 0 22.5 19q0-1.45-1.025-2.475A3.37 3.37 0 0 0 19 15.5a3.4 3.4 0 0 0-2.45 1H18V18h-4v-4h1.5v1.425q.675-.65 1.575-1.038A4.8 4.8 0 0 1 19 14q2.075 0 3.538 1.463Q24 16.925 24 19c0 2.075-.488 2.563-1.462 3.538Q21.074 24 19 24"/>
  </svg>
</template>

<script setup lang="ts">
interface EventRepeatFilledProps {
  size?: string | number;
}

withDefaults(defineProps<EventRepeatFilledProps>(), {
  size: 24,
});
</script>
