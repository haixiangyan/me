<template>
    <div class="banner">
        <Menu/>
        <div class="intro">
            <el-avatar class="avatar"
                       :src="avatar"
                       alt="avatar"
                       icon="el-icon-user-solid"
                       :size="120"/>

            <p class="name">我是海怪</p>

            <p class="title">前端海驴 / 守望先锋鱼塘潜水员 / 拼图小白</p>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Menu from './Menu/Menu.vue'

  @Component({
    components: {Menu}
  })
  export default class Banner extends Vue {
    avatar = require('../assets/avatar.jpg')
  }
</script>

<style scoped lang="scss">
    .banner {
        display: flex;
        flex-direction: column;
        height: 400px;
        background-color: #2c3e50;
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
                box-shadow: 0 0 55px -6px rgba(255, 255, 255, 1);
            }

            .name {
                margin: 12px 0;
                font-size: 1.6em;
            }

            .title {
                font-size: 1.1em;
            }
        }
    }
</style>
