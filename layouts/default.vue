<template>
  <div>
    <p v-for="service in page.services" :key="service.title">
      FROM LAYOUT: {{ service.title }}
    </p>
    <nuxt />
  </div>
</template>

<script>
import { contentMixin } from "@/mixins/contentMixin"

export default {
  mixins: [contentMixin],
}
</script>
