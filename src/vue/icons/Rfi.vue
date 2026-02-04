<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m14.25 12 1.5 3.75H5.25v6.75h-1.5V8.25h12zm-9 2.25h8.287l-.9-2.25.9-2.25H5.25zm9.907-11.73q.507 0 .866.181.36.18.55.51.19.328.19.772 0 .447-.193.768a1.25 1.25 0 0 1-.557.49l-.042.016L16.923 7h-1.046l-.849-1.588h-.691V7h-.947V2.52zm5.241.78h-2.02v1.068h1.823v.781H18.38V7h-.946V2.52h2.965zM21.982 7h-.947V2.52h.947zm-7.645-2.35h.643q.27 0 .45-.074a.54.54 0 0 0 .267-.222q.09-.15.09-.37a.73.73 0 0 0-.09-.377.55.55 0 0 0-.268-.232 1.1 1.1 0 0 0-.453-.081h-.64V4.65Z"/>
  </svg>
</template>

<script setup lang="ts">
interface RfiProps {
  size?: string | number;
}

withDefaults(defineProps<RfiProps>(), {
  size: 24,
});
</script>
