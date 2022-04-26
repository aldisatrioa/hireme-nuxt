<script setup>
import { ApplyState } from '../types'
const { selectedCompany, applyJob } = useCompany();
const isApplying = computed(() => selectedCompany.value.applyState == ApplyState.Applying)

</script>

<template>
  <div class="flex flex-col items-center">
    <img
      class="w-16 h-16 object-cover"
      :src="selectedCompany?.companyLogo"
      alt=""
    />
    <h1 class="font-bold text-2xl mt-8">
      {{ selectedCompany?.jobDesc }}
    </h1>
    <h1 class="font-medium mt-2 text-gray-400">
      {{ selectedCompany?.location }}
    </h1>
    <Button :loading="isApplying" @click="applyJob" class="w-3/4">
      {{ isApplying ? "Applying..." : "Apply" }}
    </Button>
    <Divider class="mt-8" />
    <div class="mt-8 self-start my-4">
      <span class="text-black font-semibold text-lg"
        >Minimum Qualifications:
      </span>
      <div class="ml-1 mt-2 flex flex-col space-y-2 text-sm">
        <QualificationDescription
          >Excellent JavaScript/HTML/CSS skills and good sense for software
          architecture</QualificationDescription
        >
        <QualificationDescription
          >2+ years of industry experience in software development including
          hands-on product design, team programming, and experience building and
          shipping software products</QualificationDescription
        >
        <QualificationDescription
          >Strong passion for detailed, innovative, and empathic
          design</QualificationDescription
        >
        <QualificationDescription
          >Excellent verbal and written communication
          skills</QualificationDescription
        >
        <QualificationDescription
          >Ability to work in a fast-paced team environment with frequent
          releases and tight schedules</QualificationDescription
        >
      </div>
    </div>
    <Divider class="mt-8" />
    <h1 class="font-bold text-2xl mt-8 self-start">About Company</h1>
  </div>
</template>