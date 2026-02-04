<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 22q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 20v-8.7a1.99 1.99 0 0 1 1.225-1.85L7.6 7.6a1.01 1.01 0 0 1 .95.075Q9 7.949 9 8.5V9l3.625-1.45a.95.95 0 0 1 .938.1q.437.3.437.825V10h8v10q0 .824-.587 1.413A1.93 1.93 0 0 1 20 22zm0-2h16v-8h-8V9.95l-5 2V10l-3 1.325zm7-2h2v-4h-2zm-4 0h2v-4H7zm8 0h2v-4h-2zm7-8h-5l.9-7.125a1 1 0 0 1 .325-.625q.275-.25.65-.25h1.25q.375 0 .65.25a1 1 0 0 1 .325.625z"/>
  </svg>
</template>

<script setup lang="ts">
interface FactoryProps {
  size?: string | number;
}

withDefaults(defineProps<FactoryProps>(), {
  size: 24,
});
</script>
