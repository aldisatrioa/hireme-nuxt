<script setup>
import { ApplyState } from "../types";
const props = defineProps({
  company: String,
  companyLogo: String,
  location: String,
  jobDesc: String,
  selected: Boolean,
  createdAt: String,
  appliedCount: Number,
  applyState: ApplyState,
  otherPositions: [],
});
const selectedStyle = computed(() =>
  props.selected ? "shadow-lg scale-105 transition ease-in-out" : "shadow-sm"
);
</script>

<template>
  <div
    :class="selectedStyle"
    class="rounded-lg bg-white p-8 hover:shadow-lg cursor-pointer"
  >
    <div class="flex justify-between items-center">
      <div class="flex space-x-8">
        <img class="w-16 h-16 object-cover" :src="companyLogo" :alt="company" />
        <div>
          <h1 class="font-bold text-black text-xl">{{ company }}</h1>
          <h1 class="mt-1 text-slate-500 text-md">{{ jobDesc }}</h1>
          <div class="flex items-center space-x-2 text-slate-500 text-sm">
            <span>{{ createdAt }}</span>
            <div class="w-1 h-1 rounded-full bg-slate-500"></div>
            <span>{{ appliedCount }} applied</span>
          </div>
        </div>
      </div>
      <div class="flex flex-col">
        <div
          class="flex items-center text-indigo-600"
          v-if="applyState == ApplyState.Applying"
        >
          <spinner-loading :classes="'w-4 h-4 mr-2'" />
          <span class="text-sm font-bold"> Applying.. </span>
        </div>
        <div
          class="flex items-center text-black"
          v-else-if="applyState == ApplyState.Review"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-sm font-bold"> Review </span>
        </div>
        <div
          class="flex items-center text-green-600"
          v-else-if="applyState == ApplyState.InvitedToInterview"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-sm font-bold"> Let's interview! </span>
        </div>
        <div
          class="flex items-center text-red-600"
          v-else-if="applyState == ApplyState.Rejected"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-4 w-4 mr-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span class="text-sm font-bold"> You've been rejected </span>
        </div>
        <span class="text-slate-500">{{ location }}</span>
      </div>
    </div>
    <Divider class="mt-8" />
    <span class="text-sm font-medium mt-6 block text-slate-400"
      >Other positions at {{ company }}</span
    >
    <div class="flex space-x-4 mt-3">
      <OtherPositionCard v-for="i in 3" :key="i" />
    </div>
  </div>
</template>