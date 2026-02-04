<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M21 3H3c-.825 0-1.5.675-1.5 1.5v15c0 .825.675 1.5 1.5 1.5h18c.825 0 1.5-.675 1.5-1.5v-15c0-.825-.675-1.5-1.5-1.5M7.5 19.5H3v-15h4.5zM21 11.25h-7.65l2.7-2.7L15 7.5 10.5 12l4.5 4.5 1.05-1.05-2.7-2.7H21v6.75H9v-15h12z"/>
  </svg>
</template>

<script setup lang="ts">
interface PanelProps {
  size?: string | number;
}

withDefaults(defineProps<PanelProps>(), {
  size: 24,
});
</script>
