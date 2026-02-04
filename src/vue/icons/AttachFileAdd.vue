<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M16 11V6h2v5zm-5 6.9a2.73 2.73 0 0 1-1.438-.975A2.66 2.66 0 0 1 9 15.25V6h2zm.75 4.1q-2.6 0-4.425-1.825T5.5 15.75V6.5q0-1.875 1.313-3.188Q8.125 2.001 10 2q1.875 0 3.188 1.313Q14.5 4.624 14.5 6.5V14h-2V6.5q-.025-1.05-.738-1.775Q11.05 4 10 4c-1.05 0-1.292.242-1.775.725Q7.5 5.45 7.5 6.5v9.25q-.025 1.775 1.225 3.012T11.75 20a4.3 4.3 0 0 0 1.188-.163q.562-.162 1.062-.487v2.225a7 7 0 0 1-1.088.313A6 6 0 0 1 11.75 22M16 21v-3h-3v-2h3v-3h2v3h3v2h-3v3z"/>
  </svg>
</template>

<script setup lang="ts">
interface AttachFileAddProps {
  size?: string | number;
}

withDefaults(defineProps<AttachFileAddProps>(), {
  size: 24,
});
</script>
