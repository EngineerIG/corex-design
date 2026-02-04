<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 17h2v-4h4v-2h-4V7h-2v4H7v2h4zm1 5a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12a9.7 9.7 0 0 1 .788-3.9 10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2a9.7 9.7 0 0 1 3.9.788 10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12v8q0 .824-.587 1.413A1.93 1.93 0 0 1 20 22z"/>
  </svg>
</template>

<script setup lang="ts">
interface LoupeFilledProps {
  size?: string | number;
}

withDefaults(defineProps<LoupeFilledProps>(), {
  size: 24,
});
</script>
