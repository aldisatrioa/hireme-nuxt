<script setup>
const props = defineProps({
  loading: Boolean,
});
const style = computed(() => (!props.loading ? "bg-indigo-600" : "bg-indigo-600 opacity-25"));
</script>
<template>
  <button
    :class="style"
    class="
      font-semibold
      mt-4
      focus:outline-none
      rounded-full
      py-2
      px-4
      bg-indigo-600
      text-white
      w-3/4
    "
  >
    <slot></slot>
  </button>
</template>