<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 13H6a.97.97 0 0 1-.713-.287A.97.97 0 0 1 5 12q0-.424.287-.713A.97.97 0 0 1 6 11h5V6q0-.424.287-.713A.97.97 0 0 1 12 5q.424 0 .713.287Q13 5.575 13 6v5h5a.97.97 0 0 1 .712.287Q19 11.575 19 12c0 .425-.096.52-.288.713A.97.97 0 0 1 18 13h-5v5a.97.97 0 0 1-.287.712A.97.97 0 0 1 12 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 18z"/>
  </svg>
</template>

<script setup lang="ts">
interface Add1Props {
  size?: string | number;
}

withDefaults(defineProps<Add1Props>(), {
  size: 24,
});
</script>
