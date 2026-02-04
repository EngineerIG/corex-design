<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M12 6q-.825 0-1.412-.588A1.93 1.93 0 0 1 10 4q0-.824.588-1.413A1.93 1.93 0 0 1 12 2q.825 0 1.412.587Q14 3.176 14 4c0 .824-.196 1.02-.588 1.412A1.93 1.93 0 0 1 12 6M9 21V9H4a.97.97 0 0 1-.712-.287A.97.97 0 0 1 3 8a.97.97 0 0 1 .288-.713A.97.97 0 0 1 4 7h16a.97.97 0 0 1 .712.287Q21 7.575 21 8c0 .425-.096.52-.288.713A.97.97 0 0 1 20 9h-5v12a.97.97 0 0 1-.287.712A.97.97 0 0 1 14 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 13 21v-5h-2v5a.97.97 0 0 1-.287.712A.97.97 0 0 1 10 22a.97.97 0 0 1-.713-.288A.97.97 0 0 1 9 21"/>
  </svg>
</template>

<script setup lang="ts">
interface AccessibilityProps {
  size?: string | number;
}

withDefaults(defineProps<AccessibilityProps>(), {
  size: 24,
});
</script>
