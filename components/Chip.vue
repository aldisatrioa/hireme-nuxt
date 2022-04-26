<script setup>
const props = defineProps({
  title: String,
  selected: Boolean,
});
const selectedStyle = computed(() =>
  props.selected
    ? "border-indigo-500 bg-indigo-500/[.09]"
    : "border-stale-50 bg-white"
);
const selectedStyleText = computed(() =>
  !props.selected ? "text-gray-600" : "text-indigo-600"
);
</script>
<template>
  <div
    :class="selectedStyle"
    @click="$emit('onSelect')"
    class="cursor-pointer py-2 px-4 rounded-full border"
  >
    <span :class="selectedStyleText" class="font-medium">{{ title }}</span>
  </div>
</template>