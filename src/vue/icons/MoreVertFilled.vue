<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 20q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 18q0-.824.588-1.413A1.93 1.93 0 0 1 12 16q.825 0 1.412.587Q14 17.175 14 18c0 .825-.196 1.02-.588 1.413A1.93 1.93 0 0 1 12 20m0-6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 12q0-.825.588-1.412A1.93 1.93 0 0 1 12 10q.825 0 1.412.588Q14 11.175 14 12t-.588 1.412A1.93 1.93 0 0 1 12 14m0-6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 6q0-.824.588-1.412A1.93 1.93 0 0 1 12 4q.825 0 1.412.588Q14 5.175 14 6q0 .824-.588 1.412A1.93 1.93 0 0 1 12 8"/>
  </svg>
</template>

<script setup lang="ts">
interface MoreVertFilledProps {
  size?: string | number;
}

withDefaults(defineProps<MoreVertFilledProps>(), {
  size: 24,
});
</script>
