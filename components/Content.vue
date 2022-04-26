<script setup>
import { ApplyState } from "../types";

const {
  filteredItems,
  fetchJobs,
  jobs,
  jobFilters,
  filteredItemsCount,
  selectedCompany,
  onSelectCompany,
} = useCompany();
const showLoadMoreLoading = useState("showLoadMoreLoading", () => false);

const onReachBottom = (listener) => {
  window.onscroll = () => {
    let bottomOfWindow =
      document.documentElement.scrollTop + window.innerHeight ===
      document.documentElement.offsetHeight;
    if (bottomOfWindow && !showLoadMoreLoading.value) {
      console.log("Load more...");
      listener();
    }
  };
};

onMounted(async () => {
  //initial
  try {
    jobs.value.loading = true;
    await fetchJobs();
    jobs.value.loading = false;
  } catch (error) {
    jobs.value.loading = false;
  }

  onReachBottom(async () => {
    showLoadMoreLoading.value = true;
    await fetchJobs();
    showLoadMoreLoading.value = false;
  });
});
</script>

<template>
  <SearchWithMap />
  <div class="flex justify-between mt-4">
    <div class="flex space-x-2">
      <Chip
        v-for="item in jobFilters"
        :key="item.title"
        :title="item.title"
        @onSelect="item.selected = !item.selected"
        :selected="item.selected"
      />
    </div>
    <CircledDropdown />
  </div>
  <div class="mt-8 flex justify-between">
    <span class="font-bold"
      >Showing <span class="text-indigo-600"> Full Time jobs</span> ({{
        filteredItemsCount
      }})</span
    >
    <span class="font-bold text-black">Job Alerts</span>
  </div>
  <div class="mt-4 flex flex-col space-y-4">
    <loading v-if="jobs.loading" class="self-center" />
    <JobCard
      v-for="(item, index) in filteredItems"
      @click="onSelectCompany(item)"
      :key="index"
      :applyState="item.applyState"
      :company="item.company"
      :selected="item.id == selectedCompany?.id"
      :companyLogo="item.companyLogo"
      :location="item.location"
      :jobDesc="item.jobDesc"
      :createdAt="item.createdAt"
      :appliedCount="item.appliedCount"
    />
  </div>
  <div class="flex justify-center align-center mt-4" v-if="showLoadMoreLoading">
    <loading />
  </div>
</template>