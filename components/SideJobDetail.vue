<script setup>
const { selectedCompany } = useCompany();
</script>

<template>
  <div class="py-16 px-8">
    <CompanyDetail v-if="selectedCompany" />
    <NotSelectedCompanyDetailState class="self-center" v-else />
  </div>
</template>