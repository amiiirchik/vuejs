
<script setup>
import VHeader from './pages/Header.vue'
import { Suspense } from 'vue';
// import { searchButton, startSearch } from 'search'
// import ProfileCardSkeleton from './components/'
</script>

<template>
  <Suspense>
    <template #default>
      <v-header />
    </template>
    <template #fallback>
      Loading...
    </template>
  </Suspense>


  <router-view/>
</template>

<style lang='sass'>

*
  color: white
  margin: 0
  padding: 0

#app
  font-family: sans-serif
  text-align: center
  color: #2c3e50

header
  margin: 0 auto
  background: green
  display: grid
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr))
  justify-content: space-between

  a
    margin: 15px 0px
    transition: .6s
    text-decoration: none
    display: block
    border-right: 1px solid white
    height: 100%

    &:last-child
      border: none

    &:hover
      letter-spacing: .8px


</style>