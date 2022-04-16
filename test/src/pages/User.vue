<template>
  <div class="profile-card">
    <div class="profile-img">
    </div>
    <div class="profile-info">
      <p
          @mouseleave="hover_mess = 'Ваша страничка'"
          @mouseover="hover_mess='Да-да, она ваша'"
      > {{ default_mess }}</p>
      <div class="profile-txt">
        <div class="profile-name">
          <img class="avatar" :src="user.avatar"/>
          <p>{{user.name}}</p>
        </div>
        <p id="bio">Описание: {{user.bio}}</p>
      </div>
      <aside>
        <div class="post">
          <img :src="user.avatar">
        </div>
        <div class="post">
          <img :src="user.avatar">
        </div>
        <div class="post">
          <img :src="user.avatar">
        </div>
      </aside>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const hover_mess = ref('Да-да, она ваша')
const default_mess = ref('Ваша страничка')
const user = ref({
  name: null,
  avatar: null,
  bio: null,
  photo: []
})
setTimeout(()=>{
  user.value = {
    name: 'amirchik',
    avatar: '/bee-on-daisy.jpg',
    bio: 'Когда-нибудь я научусь использовать Vue..но не сегодня, и скорее всего не завтра.',
    photo: [
      'https://cdn-images-1.medium.com/',
      'https://cdn-images-1.medium.com/',
      'https://cdn-images-1.medium.com/'
    ]
  }
}, 2000)

</script>

<style lang="sass">
    .profile-info
      background: aquamarine
    p
        margin: 20px 0
        color: grey
        font-size: 2rem
    .profile-txt
      display: flex
      flex-direction: column
      align-items: center
      min-height: 170px
      .profile-name
        width: 8%
        justify-content: space-around
        align-items: center
        display: flex
      p
        color: olivedrab
      p:nth-child(2)
        font-size: 1.2rem
    .post
      display: flex
      width: 90%
      height: 74%
      align-items: center
      background: url("../../public/bee-on-daisy.jpg")
      background-size: cover
    .avatar
      width: 48px
      height: 48px
      border-radius: 24px


    aside
      display: flex
      justify-content: center
    #bio
      font-size: .85vw
</style>
