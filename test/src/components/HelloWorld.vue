<script setup>
import { ref } from 'vue'
const props = defineProps({
  msg: String
})
let n = 0;
let arr = [
  {name: 'bob'},
  {name: 'alice'}
];
</script>

<template>
  <div v-for="user in arr" :key="user.name">
    {{user.name}}
  </div>
</template>

<style scoped lang='sass'>
*
  color: #42b983
  font-size: 2rem


</style>
