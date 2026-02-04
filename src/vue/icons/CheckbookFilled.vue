<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M2 19V5h20v3h-2l-5 5H6v2h7l-4 4zm4-8h6V9H6zm7 10v-1.75l6.65-6.65 1.75 1.75L14.75 21zm9-7.25L20.25 12l.9-.9a.38.38 0 0 1 .275-.125q.15 0 .275.125l1.2 1.2a.38.38 0 0 1 .125.275q0 .15-.125.275z"/>
  </svg>
</template>

<script setup lang="ts">
interface CheckbookFilledProps {
  size?: string | number;
}

withDefaults(defineProps<CheckbookFilledProps>(), {
  size: 24,
});
</script>
