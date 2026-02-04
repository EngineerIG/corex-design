<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m17 21 3-3-.7-.7-1.8 1.8V15h-1v4.1l-1.8-1.8-.7.7zM11 9.85 5.075 6.425 4 7.05V8.1l7 4.05 7-4.05V7.05l-1.075-.625zm-1 10.875L3 16.7a1.95 1.95 0 0 1-1-1.725v-7.95A1.95 1.95 0 0 1 3 5.3l7-4.025Q10.475 1 11 1c.525 0 .683.092 1 .275L19 5.3a1.95 1.95 0 0 1 1 1.725v4.65A6.96 6.96 0 0 0 17 11q-2.9 0-4.95 2.05T10 18q0 .8.162 1.538.163.737.488 1.412a7 7 0 0 0-.338-.087 1 1 0 0 1-.312-.138M17 23q-2.075 0-3.537-1.462Q12 20.074 12 18c0-2.074.488-2.563 1.463-3.537Q14.925 13 17 13c2.075 0 2.563.488 3.538 1.463Q22 15.925 22 18c0 2.075-.488 2.563-1.462 3.538Q19.074 23 17 23"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeDownloaderFilledProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeDownloaderFilledProps>(), {
  size: 24,
});
</script>
