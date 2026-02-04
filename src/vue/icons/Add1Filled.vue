<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 21a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 20v-7H4a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 12a.97.97 0 0 1 .288-.713A.97.97 0 0 1 4 11h7V4a.97.97 0 0 1 .287-.712A.97.97 0 0 1 12 3a.97.97 0 0 1 .713.288A.97.97 0 0 1 13 4v7h7a.97.97 0 0 1 .712.287Q21 11.575 21 12c0 .425-.096.52-.288.713A.97.97 0 0 1 20 13h-7v7a.97.97 0 0 1-.287.712A.97.97 0 0 1 12 21"/>
  </svg>
</template>

<script setup lang="ts">
interface Add1FilledProps {
  size?: string | number;
}

withDefaults(defineProps<Add1FilledProps>(), {
  size: 24,
});
</script>
