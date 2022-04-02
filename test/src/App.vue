<template>
  <header>
    <router-link to="/">Главная</router-link>
    <router-link to="/account">Аккаунт</router-link>
    <router-link to="/reviews">Отзывы</router-link>
  </header>
  <router-view />
</template>

<style lang='sass' scoped>
#app
  font-family: sans-serif
  text-align: center
  color: #2c3e50
  margin-top: 60px

header
  background: green
  display: flex
  width: 1200px
  justify-content: space-between
  *
    text-decoration: none
    color: white
</style>
