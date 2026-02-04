<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="m17 6.8-.35.35a.95.95 0 0 1-.7.275.95.95 0 0 1-.7-.275.95.95 0 0 1-.275-.7.95.95 0 0 1 .275-.7L17.3 3.7q.3-.3.7-.287.4.012.7.287l2.075 2.025q.3.3.288.713a1.02 1.02 0 0 1-.313.712q-.3.275-.7.288a.92.92 0 0 1-.7-.288L19 6.8V19a.97.97 0 0 1-.288.713A.97.97 0 0 1 18 20a.97.97 0 0 1-.712-.287A.97.97 0 0 1 17 19zm-5.8 7.4 2.225.8a.84.84 0 0 1 .425.325q.15.225.15.5a.84.84 0 0 1-.387.738.82.82 0 0 1-.813.087l-9.2-3.425a.9.9 0 0 1-.438-.337A.93.93 0 0 1 3 12.35v-.7q0-.3.163-.537a.9.9 0 0 1 .437-.338l9.225-3.425q.425-.15.8.1c.375.25.375.4.375.7a.9.9 0 0 1-.162.513A.9.9 0 0 1 13.4 9l-2.2.75zm-1.6-.55v-3.3l-4.55 1.6v.1z"/></g>
  </svg>
</template>

<script setup lang="ts">
interface TextRotateUpProps {
  size?: string | number;
}

withDefaults(defineProps<TextRotateUpProps>(), {
  size: 24,
});
</script>
