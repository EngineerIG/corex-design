<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M8 20h8v-3q0-1.65-1.175-2.825T12 13c-1.65 0-2.042.392-2.825 1.175Q8 15.35 8 17zm4-9q1.65 0 2.825-1.175T16 7V4H8v3q0 1.65 1.175 2.825T12 11M4 22v-2h2v-3q0-1.525.713-2.863A5.57 5.57 0 0 1 8.7 12a5.57 5.57 0 0 1-1.987-2.137A6 6 0 0 1 6 7V4H4V2h16v2h-2v3q0 1.524-.712 2.863A5.57 5.57 0 0 1 15.3 12a5.57 5.57 0 0 1 1.988 2.137A6 6 0 0 1 18 17v3h2v2z"/>
  </svg>
</template>

<script setup lang="ts">
interface HourglassEmptyProps {
  size?: string | number;
}

withDefaults(defineProps<HourglassEmptyProps>(), {
  size: 24,
});
</script>
