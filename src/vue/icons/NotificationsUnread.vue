<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 22q-.825 0-1.412-.587A1.93 1.93 0 0 1 10 20h4q0 .824-.588 1.413A1.93 1.93 0 0 1 12 22m-7-3a.97.97 0 0 1-.713-.288A.97.97 0 0 1 4 18a.97.97 0 0 1 .287-.712A.97.97 0 0 1 5 17h1v-7q0-2.074 1.25-3.688Q8.5 4.7 10.5 4.2v-.7q0-.624.438-1.063A1.45 1.45 0 0 1 12 2q.624 0 1.063.438.437.437.437 1.062v.325a4.6 4.6 0 0 0-.5 2.3q-.25-.05-.488-.088A3 3 0 0 0 12 6q-1.65 0-2.825 1.175T8 10v7h8v-6.425A5 5 0 0 0 18 11v6h1q.424 0 .712.288.288.287.288.712c0 .425-.096.52-.288.712A.97.97 0 0 1 19 19zM18 9a2.9 2.9 0 0 1-2.125-.875A2.9 2.9 0 0 1 15 6q0-1.25.875-2.125A2.9 2.9 0 0 1 18 3q1.25 0 2.125.875C21 4.75 21 5.167 21 6s-.292 1.542-.875 2.125A2.9 2.9 0 0 1 18 9"/>
  </svg>
</template>

<script setup lang="ts">
interface NotificationsUnreadProps {
  size?: string | number;
}

withDefaults(defineProps<NotificationsUnreadProps>(), {
  size: 24,
});
</script>
