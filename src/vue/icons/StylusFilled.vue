<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4.2 20.975a.92.92 0 0 1-.913-.262.92.92 0 0 1-.262-.913l.875-4.25 4.55 4.55zm5.875-2.1-4.95-4.95L15.45 3.6q.574-.575 1.425-.575.849 0 1.425.575l2.1 2.1q.575.576.575 1.425T20.4 8.55z"/>
  </svg>
</template>

<script setup lang="ts">
interface StylusFilledProps {
  size?: string | number;
}

withDefaults(defineProps<StylusFilledProps>(), {
  size: 24,
});
</script>
