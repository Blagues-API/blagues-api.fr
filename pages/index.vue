<template>
  <div class="container">
    <HomeHero />
    <HomeInformations :count="count" />
  </div>
</template>

<script>
export default {
  async asyncData({ $axios }) {
    const { count } = await $axios.$get(`/api/count`)
    return { count }
  },
}
</script>
