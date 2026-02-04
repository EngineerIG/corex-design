<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    v-bind="$attrs"
  >
    <path d="M13.39 7V2.52h1.767q.507 0 .866.182.361.18.55.51.19.327.19.771 0 .447-.193.768a1.25 1.25 0 0 1-.558.49q-.363.17-.879.17H13.95v-.76h1.03q.27 0 .45-.075a.54.54 0 0 0 .268-.223.7.7 0 0 0 .09-.37.73.73 0 0 0-.09-.376.55.55 0 0 0-.27-.232q-.18-.08-.452-.08h-.64V7zm2.419-2.039L16.923 7h-1.046l-1.09-2.039zM17.432 7V2.52h2.966v.781H18.38v1.067h1.822v.781H18.38V7h-.947Zm4.551-4.48V7h-.948V2.52zM3.75 22.5V8.25h12L14.25 12l1.5 3.75H5.25v6.75z"/>
  </svg>
</template>

<script setup lang="ts">
interface RfiFilledProps {
  size?: string | number;
}

withDefaults(defineProps<RfiFilledProps>(), {
  size: 24,
});
</script>
