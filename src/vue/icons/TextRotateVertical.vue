<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m13.8 13.2-.8 2.225a.84.84 0 0 1-.325.425q-.225.15-.5.15a.84.84 0 0 1-.738-.387.82.82 0 0 1-.087-.813l3.425-9.2a.9.9 0 0 1 .337-.438A.93.93 0 0 1 15.65 5h.7q.3 0 .537.162a.9.9 0 0 1 .338.438l3.425 9.225a.79.79 0 0 1-.088.8.85.85 0 0 1-.737.375.84.84 0 0 1-.5-.162A.9.9 0 0 1 19 15.4l-.8-2.2zm.55-1.6h3.3l-1.6-4.55h-.1zM5 16.15V4a.97.97 0 0 1 .287-.712A.97.97 0 0 1 6 3q.424 0 .712.288A.97.97 0 0 1 7 4v12.15l.4-.375q.3-.275.7-.275t.7.3a.95.95 0 0 1 .275.7.95.95 0 0 1-.275.7l-2.1 2.1q-.3.3-.7.3a.96.96 0 0 1-.7-.3l-2.1-2.1a.95.95 0 0 1-.275-.7q0-.425.3-.725A.92.92 0 0 1 3.9 15.5q.4 0 .7.275z"/>
  </svg>
</template>

<script setup lang="ts">
interface TextRotateVerticalProps {
  size?: string | number;
}

withDefaults(defineProps<TextRotateVerticalProps>(), {
  size: 24,
});
</script>
