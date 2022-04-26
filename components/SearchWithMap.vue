<script setup>
const { searchQuery } = useCompany();
</script>

<template>
  <div class="rounded-full flex bg-white p-4 box-content space-x-4 shadow-sm">
    <div class="flex space-x-1 items-center">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-5 w-5 text-indigo-500"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
          clip-rule="evenodd"
        />
      </svg>
      <span class="text-indigo-500 font-semibold">Anywhere</span>
    </div>
    <div class="h-auto border"></div>
    <input
      type="text"
      v-model="searchQuery"
      class="outline-none focus:outline-none grow"
      placeholder="Search by Title, Company or Keywords..."
    />
  </div>
</template>