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
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import {getImageUrl} from '../db/bucket-list'
  import Menu from './Menu.vue'

  @Component({
    components: {Menu}
  })
  export default class Banner extends Vue {
    avatar = getImageUrl('avatar.jpg')
  }
</script>

<style scoped lang="scss">
    .banner {
        display: flex;
        flex-direction: column;
        height: 340px;
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
