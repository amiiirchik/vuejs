<script setup>
// import { defineComponent } from '@vue/composition-api'
    let i = 1;
    let className = 'par' + i

</script>


<template>
    <p v-if="className == 'par1'">Главная страница</p>
    <p v-else>Привет мир2</p>
</template>

<style scoped lang="sass">
</style>