<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 8.7-4.4 4.4h8.8zM12 1q2.283 0 4.29.866a11.1 11.1 0 0 1 3.492 2.352 11.1 11.1 0 0 1 2.352 3.492Q22.999 9.717 23 12q0 2.283-.866 4.29a11.1 11.1 0 0 1-2.352 3.492 11.1 11.1 0 0 1-3.492 2.352A10.7 10.7 0 0 1 12 23q-2.283 0-4.29-.866a11.1 11.1 0 0 1-3.492-2.352 11.1 11.1 0 0 1-2.352-3.492A10.7 10.7 0 0 1 1 12q0-2.283.866-4.29a11.1 11.1 0 0 1 2.352-3.492A11.1 11.1 0 0 1 7.71 1.866 10.7 10.7 0 0 1 12 1"/>
  </svg>
</template>

<script setup lang="ts">
interface Top2FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Top2FilledProps>(), {
  size: 24,
});
</script>
