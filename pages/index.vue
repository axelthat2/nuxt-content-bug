<template>
  <div>
    <p v-for="service in page.services" :key="service.title">
      FROM PAGE: {{ service.title }}
    </p>
  </div>
</template>

<script>
import { contentMixin } from "@/mixins/contentMixin"

export default {
  mixins: [contentMixin],
}
</script>
