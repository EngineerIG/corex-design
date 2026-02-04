<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m5.568 13.228 3.56 3.56q.338.337.338.86 0 .521-.338.859-.337.337-.86.337-.52 0-.859-.337L1.762 12.86a1.1 1.1 0 0 1-.26-.4 1.4 1.4 0 0 1-.077-.46q0-.246.077-.46.076-.214.26-.4L7.41 5.495q.339-.338.86-.338c.521 0 .634.113.86.338q.337.337.337.86 0 .52-.338.859l-3.56 3.56h16.205q.521 0 .874.353.353.352.353.874c0 .522-.117.64-.353.875a1.19 1.19 0 0 1-.874.353H5.568Z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowLeftProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowLeftProps>(), {
  size: 24,
});
</script>
