<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M11 5.825 9.125 7.7a1.07 1.07 0 0 1-.713.287A.93.93 0 0 1 7.7 7.7a.96.96 0 0 1-.3-.7q0-.4.3-.7l3.6-3.6a.9.9 0 0 1 .325-.213q.174-.062.375-.062.2 0 .375.062a.9.9 0 0 1 .325.213l3.6 3.6q.3.3.3.7t-.3.7-.713.3a.97.97 0 0 1-.712-.3L13 5.825v12.35l1.875-1.875q.3-.276.712-.288a.93.93 0 0 1 .713.288q.3.3.3.7t-.3.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063q-.201 0-.375-.063a.9.9 0 0 1-.325-.212l-3.6-3.6a.96.96 0 0 1-.3-.7q0-.4.3-.7t.712-.3q.413 0 .713.3L11 18.175z"/>
  </svg>
</template>

<script setup lang="ts">
interface ArrowRangeProps {
  size?: string | number;
}

withDefaults(defineProps<ArrowRangeProps>(), {
  size: 24,
});
</script>
