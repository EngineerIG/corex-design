<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m18.857 10.772-3.56-3.56q-.338-.337-.338-.86 0-.521.338-.859.337-.337.859-.337c.522 0 .634.112.86.337l5.646 5.647q.184.184.261.4.077.214.077.46t-.077.46a1.1 1.1 0 0 1-.26.4l-5.648 5.646q-.337.338-.859.338c-.522 0-.634-.113-.86-.338q-.337-.337-.337-.86 0-.52.338-.858l3.56-3.56H2.652q-.522 0-.874-.354A1.19 1.19 0 0 1 1.425 12q0-.522.353-.875.352-.353.874-.353z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowRightProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowRightProps>(), {
  size: 24,
});
</script>
