<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m12 22-9-5V7l9-5 9 5v10zM9.1 9.25a4.05 4.05 0 0 1 1.325-.925A3.9 3.9 0 0 1 12 8q.825 0 1.575.325t1.325.925l3-1.675L12 4.3 6.1 7.575zm1.9 9.9v-3.275q-1.35-.35-2.175-1.425A3.92 3.92 0 0 1 8 12q0-.275.025-.512.025-.238.1-.488L5 9.25v6.575zM12 14q.825 0 1.412-.588Q14 12.825 14 12t-.588-1.412A1.93 1.93 0 0 0 12 10q-.825 0-1.412.588A1.93 1.93 0 0 0 10 12q0 .825.588 1.412Q11.175 14 12 14m1 5.15 6-3.325V9.25L15.875 11q.075.25.1.488A5 5 0 0 1 16 12q0 1.375-.825 2.45T13 15.875z"/>
  </svg>
</template>

<script setup lang="ts">
interface TokenProps {
  size?: string | number;
}

withDefaults(defineProps<TokenProps>(), {
  size: 24,
});
</script>
