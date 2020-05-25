<template>
    <div class="banner">
        <Menu/>
        <div class="intro">
            <img class="avatar" :src="avatar" alt="avatar">

            <p class="title">前端工人 / 守望先锋鱼塘霸主 / 拼图狂魔</p>
        </div>
    </div>
</template>

<script lang="ts">
  import {getImageUrl} from "../../db/bucket-list"
  import Menu from './Menu.vue'

  export default {
    name: 'Banner',
    data() {
      return {
        avatar: getImageUrl('avatar.jpg')
      }
    },
    components: {
      Menu
    }
  }
</script>

<style scoped lang="scss">
    .banner {
        display: flex;
        flex-direction: column;
        height: 400px;
        background-image: url("../assets/banner.jpeg");
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center center;
        .intro {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            flex-grow: 1;
            color: white;
            .avatar {
                width: 120px;
                border-radius: 50%;
                border: 1px solid white;
            }
            .title {
                margin-top: 24px;
                font-size: 1.1em;
            }
        }
    }
</style>
