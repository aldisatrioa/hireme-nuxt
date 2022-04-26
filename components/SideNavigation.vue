<script setup>
    const authentication = useAuthentication()
</script>

<template>
  <img
    src="https://www.w3schools.com/w3images/man_smoke.jpg"
    class="rounded-full w-24 h-24"
    alt=""
  />
  <side-navigation-text>Your Profile</side-navigation-text>
  <side-navigation-text>Browse</side-navigation-text>
  <side-navigation-text>Community</side-navigation-text>
  <side-navigation-text>Jobs</side-navigation-text>
  <side-navigation-text>More</side-navigation-text>
  <h3 class="font-bold text-lg text-red-500" style="margin-top: auto">
    Logout
  </h3>
</template>