<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M10 21v-1.9q0-.526.262-.988.263-.462.713-.737 1.15-.675 2.412-1.025A9.7 9.7 0 0 1 16 16q1.35 0 2.613.35t2.412 1.025q.45.275.713.738T22 19.1V21zm-8 0V9l8-6 5.375 4.05a4.8 4.8 0 0 0-3.125 1.638Q11 10.098 11 12a4.9 4.9 0 0 0 .825 2.75q-.5.2-.962.412a9 9 0 0 0-.913.488q-.9.525-1.425 1.463A4 4 0 0 0 8 19.1V21zm14-6a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 13 12q0-1.25.875-2.125A2.9 2.9 0 0 1 16 9q1.25 0 2.125.875C19 10.75 19 11.167 19 12s-.292 1.542-.875 2.125A2.9 2.9 0 0 1 16 15"/>
  </svg>
</template>

<script setup lang="ts">
interface LocationAwayFilledProps {
  size?: string | number;
}

withDefaults(defineProps<LocationAwayFilledProps>(), {
  size: 24,
});
</script>
