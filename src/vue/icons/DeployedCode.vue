<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M10.444 19.425v-6.85L4.111 9.1v6.85zm2.112 0 6.333-3.475V9.1l-6.333 3.475zM11.5 10.85l6.254-3.425L11.5 4 5.246 7.425zM3.056 17.7a2.05 2.05 0 0 1-.779-.725 1.87 1.87 0 0 1-.277-1v-7.95q0-.55.277-1t.779-.725l7.388-4.025a2.16 2.16 0 0 1 2.112 0L19.944 6.3q.502.275.779.725t.277 1v7.95q0 .55-.277 1t-.779.725l-7.388 4.025a2.17 2.17 0 0 1-2.112 0z"/>
  </svg>
</template>

<script setup lang="ts">
interface DeployedCodeProps {
  size?: string | number;
}

withDefaults(defineProps<DeployedCodeProps>(), {
  size: 24,
});
</script>
