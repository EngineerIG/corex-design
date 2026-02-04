<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <mask id="a" width="24" height="24" x="0" y="0" maskUnits="userSpaceOnUse" style="mask-type:alpha"><path d="M0 0h24v24H0z"/></mask><g mask="url(#a)"><path d="m7 5.825-1.9 1.9q-.3.3-.7.287a1 1 0 0 1-.7-.312q-.275-.3-.288-.7a.92.92 0 0 1 .288-.7l3.6-3.6a.9.9 0 0 1 .325-.213q.176-.062.375-.062a.9.9 0 0 1 .375.062.9.9 0 0 1 .325.213l3.6 3.6a.93.93 0 0 1 .275.687q0 .413-.275.713-.3.3-.713.3a.97.97 0 0 1-.712-.3L9 5.825V20q0 .424-.288.712A.97.97 0 0 1 8 21a.97.97 0 0 1-.713-.288A.97.97 0 0 1 7 20zm8 12.35V4a.97.97 0 0 1 .287-.713A.97.97 0 0 1 16 3a.97.97 0 0 1 .712.287Q17 3.575 17 4v14.175l1.9-1.9q.3-.3.7-.288t.7.313q.276.3.287.7a.92.92 0 0 1-.287.7l-3.6 3.6q-.15.15-.325.212a1.1 1.1 0 0 1-.375.063q-.2 0-.375-.063a.9.9 0 0 1-.325-.212l-3.6-3.6a.93.93 0 0 1-.275-.688q0-.412.275-.712.3-.3.712-.3.413 0 .713.3z"/></g>
  </svg>
</template>

<script setup lang="ts">
interface SyncAltProps {
  size?: string | number;
}

withDefaults(defineProps<SyncAltProps>(), {
  size: 24,
});
</script>
