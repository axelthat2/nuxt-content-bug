export const contentMixin = {
  data() {
    return {
      page: {},
    }
  },
  async fetch() {
    const page = await this.$content("landing_pages/Home").fetch()
    this.page = page
  },
}
