<template>
    <div id="app">
        <Menu/>
        <el-col
            :xs="{ span: 22, offset: 1 }"
            :lg="{ span: 10, offset: 7 }"
            class="views">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>
    import Menu from './components/Menu/Menu'
    import Profile from './components/Profile/Profile'
    import Jianshu from './components/Jianshu/Jianshu'
    import Medium from './components/Medium/Medium'

    export default {
        name: 'app',
        data() {
            return {}
        },
        components: {
            Menu,
            Jianshu,
            Medium,
            Profile
        }
    }
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
}
#app {
    color: #2c3e50;
    height: 100vh;
    .views {
        padding: 30px;
        background: white;
        border-radius: 4px;
    }
}
</style>
