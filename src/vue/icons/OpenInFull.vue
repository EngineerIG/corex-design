<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M2.222 23q-.519 0-.87-.351A1.18 1.18 0 0 1 1 21.778v-7.334q0-.519.351-.87.352-.352.871-.352.52 0 .871.352.351.351.351.87v4.4l15.4-15.4h-4.4q-.519 0-.87-.35a1.18 1.18 0 0 1-.352-.872q0-.519.352-.87.351-.352.87-.352h7.334q.519 0 .87.351.352.352.352.871v7.334q0 .519-.351.87a1.18 1.18 0 0 1-.871.352 1.18 1.18 0 0 1-.871-.352 1.18 1.18 0 0 1-.351-.87v-4.4l-15.4 15.4h4.4q.519 0 .87.35.352.353.352.872c0 .519-.117.636-.352.87a1.18 1.18 0 0 1-.87.352z"/>
  </svg>
</template>

<script setup lang="ts">
interface OpenInFullProps {
  size?: string | number;
}

withDefaults(defineProps<OpenInFullProps>(), {
  size: 24,
});
</script>
