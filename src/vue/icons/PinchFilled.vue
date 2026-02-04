<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9.5 6V3.55L3.55 9.5H6V11H1V6h1.5v2.45L8.45 2.5H6V1h5v5zm5.325 17q-.6 0-1.15-.225a2.9 2.9 0 0 1-.975-.65L7.6 17l.75-.775q.4-.4.938-.538a2 2 0 0 1 1.062.013l1.65.475V8q0-.424.287-.713A.97.97 0 0 1 13 7q.424 0 .713.287Q14 7.575 14 8v7h1v-3q0-.424.287-.713A.97.97 0 0 1 16 11a.97.97 0 0 1 .712.287Q17 11.575 17 12v3h1v-2a.97.97 0 0 1 .288-.713A.97.97 0 0 1 19 12a.97.97 0 0 1 .712.287Q20 12.575 20 13v2h1a.97.97 0 0 1 .288-.713A.97.97 0 0 1 22 14a.97.97 0 0 1 .712.287Q23 14.575 23 15v4q0 1.65-1.175 2.825T19 23z"/>
  </svg>
</template>

<script setup lang="ts">
interface PinchFilledProps {
  size?: string | number;
}

withDefaults(defineProps<PinchFilledProps>(), {
  size: 24,
});
</script>
