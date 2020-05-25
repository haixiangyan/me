<template>
    <div class="banner">
        <Menu/>
        <div class="intro">
            <el-avatar class="avatar" :src="avatar" alt="avatar" icon="el-icon-user-solid" :size="120"/>

            <p class="title">前端工人 / 守望先锋鱼塘霸主 / 拼图狂魔</p>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Menu from './Menu.vue'
  import {getImageUrl} from '@/lib/constants'

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
                box-shadow: 0 0 55px -6px rgba(255,255,255,1);
            }

            .title {
                margin-top: 24px;
                font-size: 1.1em;
            }
        }
    }
</style>
