<template>
  <div class="container">
    <HomeHero />
    <HomeInformations :count="count" />
  </div>
</template>

<script setup>
const { data: count } = await useFetch('/api/count')
</script>
