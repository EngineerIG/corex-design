<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m13.44 18.645 3.56-3.56q.337-.338.86-.338.52 0 .858.338.338.337.338.86 0 .52-.338.858l-5.646 5.648q-.184.184-.4.26a1.4 1.4 0 0 1-.46.077 1.4 1.4 0 0 1-.46-.077 1.1 1.1 0 0 1-.4-.26l-5.646-5.648q-.338-.337-.338-.859c0-.522.113-.634.338-.86q.337-.337.86-.337.52 0 .858.338l3.56 3.56V2.44q0-.522.354-.874.352-.353.874-.353c.522 0 .64.117.875.353q.353.352.353.874z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowDownProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowDownProps>(), {
  size: 24,
});
</script>
