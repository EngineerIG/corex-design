<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m10.985 5.356-3.56 3.56q-.338.338-.86.338-.521 0-.859-.338-.337-.337-.337-.86 0-.52.337-.858l5.647-5.648q.184-.184.4-.26.214-.078.46-.077.245 0 .46.077.214.076.399.26l5.647 5.648q.338.337.338.859c0 .522-.113.634-.338.86a1.17 1.17 0 0 1-.86.337q-.521 0-.859-.338l-3.56-3.56v16.205q0 .522-.353.874a1.19 1.19 0 0 1-.874.353q-.522 0-.875-.353a1.19 1.19 0 0 1-.353-.874z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowTopProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowTopProps>(), {
  size: 24,
});
</script>
