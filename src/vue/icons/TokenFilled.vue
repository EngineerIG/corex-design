<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9.1 9.455 4.05 6.55 12 2l7.95 4.55-5.05 2.905a4.05 4.05 0 0 0-1.325-.951A3.8 3.8 0 0 0 12 8.17q-.825 0-1.575.334-.75.335-1.325.951M11 22l-8-4.576V8.298l5.125 2.957a3 3 0 0 0-.1.5 5 5 0 0 0-.025.528q0 1.413.825 2.52A3.9 3.9 0 0 0 11 16.266zm1-7.66a1.9 1.9 0 0 1-1.412-.605A2 2 0 0 1 10 12.283q0-.849.588-1.453A1.9 1.9 0 0 1 12 10.226a1.9 1.9 0 0 1 1.412.604q.588.604.588 1.453 0 .848-.588 1.452A1.9 1.9 0 0 1 12 14.34M13 22v-5.733q1.35-.36 2.175-1.465t.825-2.52a5 5 0 0 0-.025-.526 3 3 0 0 0-.1-.502L21 8.299v9.126z"/>
  </svg>
</template>

<script setup lang="ts">
interface TokenFilledProps {
  size?: string | number;
}

withDefaults(defineProps<TokenFilledProps>(), {
  size: 24,
});
</script>
