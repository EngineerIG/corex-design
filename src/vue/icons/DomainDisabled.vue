<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M22 9v8q0 .5-.313.75a1.045 1.045 0 0 1-1.375-.012Q20 17.474 20 16.975V9h-7.5q-.825 0-1.412-.588A1.93 1.93 0 0 1 10.5 7V5H8.025q-.5 0-.75-.313A1.08 1.08 0 0 1 7.025 4q0-.375.25-.688T8.025 3H10.5q.825 0 1.412.587.588.588.588 1.413v2H20q.824 0 1.413.587.586.589.587 1.413m-2.2 13.625L18.15 21H4q-.824 0-1.413-.588A1.93 1.93 0 0 1 2 19V4.8l-.6-.6a.95.95 0 0 1-.275-.7.95.95 0 0 1 .275-.7.95.95 0 0 1 .7-.275.95.95 0 0 1 .7.275l18.4 18.4q.275.274.288.687a.93.93 0 0 1-.288.713.98.98 0 0 1-.688.287.97.97 0 0 1-.712-.262M4 19h2v-2H4zm0-4h2v-2H4zm0-4h2V9H4zm4 8h2v-2H8zm0-4h2v-2H8zm4 4h4.15l-2-2H12zm6-6h-2v-2h2z"/>
  </svg>
</template>

<script setup lang="ts">
interface DomainDisabledProps {
  size?: string | number;
}

withDefaults(defineProps<DomainDisabledProps>(), {
  size: 24,
});
</script>
