<template>
  <div class="profile-card">
    <div class="profile-img">
    </div>
    <div class="profile-info">
      <p v-on:mouseover="reverse" v-bind:title="hover_mess">Ваш профиль</p>
      <div class="profile-txt">
        <p>{{user.name}}</p>
        <p>Описание: {{user.bio}}</p>
      </div>
      <aside>
        <div class="post">
          <img :src="user.photo[0]" alt="">
        </div>
        <div class="post">
          <img :src="user.photo[1]" alt="">
        </div>
        <div class="post">
          <img src="user.photo[2]" alt="">
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import {createApp} from "vue";

export default {
  data() {
    return {
      hover_mess: 'Да, да, он ваш!',
      user: {
        name: 'amirchik',
        avatar: 'https://cdn-images-1.medium.com/',
        bio: 'Когда-нибудь я научусь использовать Vue..но не сегодня, и скорее всего не завтра.',
        photo: [
          'https://cdn-images-1.medium.com/',
          'https://cdn-images-1.medium.com/',
          'https://cdn-images-1.medium.com/'
        ]
      }
    }
  },
  methods:{
    reverse() {
        this.hover_mess = 'Ваша страничка'
    }
  }
}

</script>

<style lang="sass">
    p
        margin: 20px 0
        color: grey
        font-size: 2rem
    .post
      display: flex
      width: 70%
      height: 300px
    .profile-txt
      display: flex
      flex-direction: column
      align-items: flex-start
      p
        color: olivedrab
      p:nth-child(2)
        font-size: 1.2rem

</style>
