<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M5 19a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 18a.97.97 0 0 1 .287-.712A.97.97 0 0 1 5 17h1v-7q0-2.074 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.624.438-1.063A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.437.437 1.062v.7q2 .5 3.25 2.112Q18 7.926 18 10v7h1q.424 0 .712.288.288.287.288.712c0 .425-.096.52-.288.712A.97.97 0 0 1 19 19zm7 3q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22m-4-5h8v-7q0-1.65-1.175-2.825T12 6c-1.65 0-2.042.392-2.825 1.175Q8 8.35 8 10z"/>
  </svg>
</template>

<script setup lang="ts">
interface NotificationsProps {
  size?: string | number;
}

withDefaults(defineProps<NotificationsProps>(), {
  size: 24,
});
</script>
