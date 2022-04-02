<script setup>
// import { defineComponent } from '@vue/composition-api'
    let i = 1;
    let className = 'par' + i

</script>


<template>
    <p v-if="className == 'par1'">Привет мир</p>
    <p v-else>Привет мир2</p>
</template>

<style scoped lang="sass">
    .par1
        color: red
</style>