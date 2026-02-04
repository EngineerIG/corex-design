<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="m9.702 15.906-6.778 6.778A1.1 1.1 0 0 1 2.12 23a1.1 1.1 0 0 1-.804-.316A1.1 1.1 0 0 1 1 21.88q0-.489.316-.804l6.778-6.778H3.958q-.488 0-.818-.33t-.33-.82q0-.488.33-.818t.818-.33h6.893q.488 0 .819.33t.33.819v6.893q0 .488-.33.818t-.819.33-.818-.33-.33-.818zm6.204-6.204h4.136q.488 0 .818.33t.33.82q0 .488-.33.818t-.818.33h-6.893q-.488 0-.819-.33t-.33-.819V3.958q0-.488.33-.818t.819-.33.818.33.33.818v4.136l6.779-6.778Q21.391 1 21.88 1q.488 0 .804.316.315.316.316.804 0 .489-.316.804z"/>
  </svg>
</template>

<script setup lang="ts">
interface CloseFullscreenProps {
  size?: string | number;
}

withDefaults(defineProps<CloseFullscreenProps>(), {
  size: 24,
});
</script>
