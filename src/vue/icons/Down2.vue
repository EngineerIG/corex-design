<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12.707 17.293a1 1 0 0 1-1.414 0L2.707 8.707C2.077 8.077 2.523 7 3.414 7h17.172c.89 0 1.337 1.077.707 1.707z"/>
  </svg>
</template>

<script setup lang="ts">
interface Down2Props {
  size?: string | number;
}

withDefaults(defineProps<Down2Props>(), {
  size: 24,
});
</script>
