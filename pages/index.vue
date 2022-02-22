<template>
  <p>
    {{ content && content.title }}
  </p>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      content: {},
    }
  },
  async fetch() {
    const content = await this.$content("Home").fetch()
    this.content = content
  },
}
</script>
