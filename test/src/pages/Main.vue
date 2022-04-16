<script setup>
import { ref } from "vue";

const user = ref({
  name: null,
  date: null
})
setTimeout(()=>{
  user.value =
    {name: 'Илья', date: '2020-01-01'}


}, 2000)

</script>


<template lang="pug">
p Новости
main
  .post-block
    .post-info
      p {{user.name}}
      p {{user.date}}
    .post
    .post-actions

</template>

<style scoped lang="sass">
main
  display: flex
  justify-content: space-evenly
  flex-wrap: wrap



.post-block
  display: flex
  flex-direction: column
  align-items: center
  width: 500px
  height: 400px
  border: 1px solid darkgrey
  background: bisque
  margin-bottom: 100px

.post
  display: flex
  width: 90%
  height: 74%
  align-items: center
  background: url("../../public/bee-on-daisy.jpg")
  background-size: cover

  .post-info
    width: 100%
    display: flex
    justify-content: space-around
    justify-items: flex-start
    height: 11%
    align-items: center
    p
      font-size: .86vw
      display: flex
      flex-direction: column


</style>