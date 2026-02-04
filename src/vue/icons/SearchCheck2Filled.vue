<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m8.95 13.55 5.65-5.675-1.425-1.425L8.95 10.7 6.825 8.6 5.4 10zM10 18q-3.35 0-5.675-2.325T2 10t2.325-5.675T10 2t5.675 2.325T18 10a7.85 7.85 0 0 1-1.675 4.9L22 20.6 20.6 22l-5.7-5.675A7.85 7.85 0 0 1 10 18"/>
  </svg>
</template>

<script setup lang="ts">
interface SearchCheck2FilledProps {
  size?: string | number;
}

withDefaults(defineProps<SearchCheck2FilledProps>(), {
  size: 24,
});
</script>
