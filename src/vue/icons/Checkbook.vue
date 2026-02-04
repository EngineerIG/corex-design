<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M6 15h7l2-2H6zm0-4h6V9H6zM4 7v10h7l-2 2H2V5h20v3h-2V7zm18.9 5.3a.38.38 0 0 1 .125.275q0 .15-.125.275l-.9.9L20.25 12l.9-.9a.38.38 0 0 1 .275-.125q.15 0 .275.125zM13 21v-1.75l6.65-6.65 1.75 1.75L14.75 21z"/>
  </svg>
</template>

<script setup lang="ts">
interface CheckbookProps {
  size?: string | number;
}

withDefaults(defineProps<CheckbookProps>(), {
  size: 24,
});
</script>
