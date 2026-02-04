<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M4 20q-.824 0-1.413-.587A1.93 1.93 0 0 1 2 18V6q0-.824.587-1.412A1.93 1.93 0 0 1 4 4h16q.824 0 1.413.588Q22 5.175 22 6v12q0 .824-.587 1.413A1.93 1.93 0 0 1 20 20zm8-7.175a1.04 1.04 0 0 0 .525-.15L19.6 8.25a.83.83 0 0 0 .4-.725.82.82 0 0 0-.425-.75q-.425-.25-.875.025L12 11 5.3 6.8q-.45-.275-.875-.013Q4 7.05 4 7.525q0 .25.1.438c.1.188.167.22.3.287l7.075 4.425a1.04 1.04 0 0 0 .525.15"/>
  </svg>
</template>

<script setup lang="ts">
interface MailFilledProps {
  size?: string | number;
}

withDefaults(defineProps<MailFilledProps>(), {
  size: 24,
});
</script>
