<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m14.25 12 1.5 3.75H5.25v6.75h-1.5V8.25h12zm-9 2.25h8.287l-.9-2.25.9-2.25H5.25zM13.337 7h-.947V2.52h.947zm3.544-1.662h.04V2.52h.942V7h-.818l-1.95-2.82h-.032V7h-.947V2.52h.831zM22.154 3.3h-1.37V7h-.937V3.3h-1.371v-.78h3.678z"/>
  </svg>
</template>

<script setup lang="ts">
interface IntProps {
  size?: string | number;
}

withDefaults(defineProps<IntProps>(), {
  size: 24,
});
</script>
