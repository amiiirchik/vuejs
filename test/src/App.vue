<script>
  import CreateHeader from './components/CreateHeader.vue'
  import HelloWorld from './components/HelloWorld.vue'
  export default {
    name :' App',
    components: {CreateHeader, HelloWorld}
  }
</script>

<template>
  <routerView/><routerView>
</template>

<style lang='sass' scoped>
#app
  font-family: sans-serif
  text-align: center
  color: #2c3e50
  margin-top: 60px

</style>
