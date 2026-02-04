<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9 18q-.825 0-1.412-.587A1.93 1.93 0 0 1 7 16V4q0-.824.588-1.413A1.93 1.93 0 0 1 9 2h9q.824 0 1.413.587.586.589.587 1.413v12q0 .824-.587 1.413A1.93 1.93 0 0 1 18 18zm0-2h9V4H9zm-4 6q-.824 0-1.413-.587A1.93 1.93 0 0 1 3 20V7a.97.97 0 0 1 .288-.713A.97.97 0 0 1 4 6q.424 0 .713.287Q5 6.575 5 7v13h10a.97.97 0 0 1 .713.288Q16 20.575 16 21c0 .425-.096.52-.287.712A.97.97 0 0 1 15 22z"/>
  </svg>
</template>

<script setup lang="ts">
interface OffProps {
  size?: string | number;
}

withDefaults(defineProps<OffProps>(), {
  size: 24,
});
</script>
