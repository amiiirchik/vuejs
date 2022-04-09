<template lang="pug">
header
      router-link(
        v-for="link in routes"
        :key="link.name"
        :to="link.path"
      )
          i.icon(:class="`icon-${link.meta.icon}`")
          span(v-if="!isMobileScreen") {{ link.meta.name }}
</template>

<script setup>
      import { computed } from 'vue'
      import router from '../router'

      let isMobileScreen = computed(() => window.innerWidth < 600)
      const routes = router
      .getRoutes()
      .filter((item) => item.aliasOf === undefined)
</script>