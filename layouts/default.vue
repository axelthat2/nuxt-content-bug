<template>
  <div>
    <p v-for="service in page.services" :key="service.title">
      {{ service.title }}
    </p>
    <nuxt />
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      page: {},
    }
  },
  async fetch() {
    const page = await this.$content("Home").fetch()
    this.page = page
  },
}
</script>
