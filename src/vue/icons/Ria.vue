<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path fill-rule="evenodd" d="M5.251 7.026q1.129 0 1.928.405.803.399 1.222 1.133.424.731.424 1.72 0 .993-.429 1.71a2.8 2.8 0 0 1-1.24 1.09q-.046.02-.093.039L9.181 17H6.853l-1.89-3.536h-1.54V17H1.316V7.026zM3.424 11.77h1.432q.604 0 1.003-.166.399-.165.594-.497.2-.33.2-.823 0-.496-.2-.838a1.22 1.22 0 0 0-.599-.515q-.4-.18-1.007-.181H3.424z" clip-rule="evenodd"/><path d="M12.424 17h-2.109V7.026h2.109z"/><path fill-rule="evenodd" d="M23.218 17h-2.26l-.738-2.274h-3.6L15.878 17h-2.26l3.442-9.974h2.718zm-6.064-3.92h2.53L18.46 9.305h-.078l-1.228 3.773Z" clip-rule="evenodd"/>
  </svg>
</template>

<script setup lang="ts">
interface RiaProps {
  size?: string | number;
}

withDefaults(defineProps<RiaProps>(), {
  size: 24,
});
</script>
