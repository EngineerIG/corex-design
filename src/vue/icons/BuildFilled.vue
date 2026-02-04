<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M9 15q-2.5 0-4.25-1.75T3 9q0-.5.075-1t.275-.95a.94.94 0 0 1 .313-.375 1.2 1.2 0 0 1 .412-.175.97.97 0 0 1 .9.275L7.6 9.4l1.8-1.8-2.625-2.625a.97.97 0 0 1-.275-.9 1.2 1.2 0 0 1 .175-.413.94.94 0 0 1 .375-.312q.45-.2.95-.275T9 3q2.5 0 4.25 1.75T15 9q0 .575-.1 1.088a5.7 5.7 0 0 1-.3 1.012l5.05 5q.725.725.725 1.775c0 1.05-.242 1.292-.725 1.775q-.725.725-1.775.725c-1.05 0-1.292-.25-1.775-.75l-5-5.025q-.5.2-1.012.3A5.7 5.7 0 0 1 9 15"/>
  </svg>
</template>

<script setup lang="ts">
interface BuildFilledProps {
  size?: string | number;
}

withDefaults(defineProps<BuildFilledProps>(), {
  size: 24,
});
</script>
