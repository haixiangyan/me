<template>
    <div id="app">
        <el-menu class="menu" router mode="horizontal">
            <el-menu-item index="/">
               <i class="el-icon-user"></i>
                <span class="menu-item">我</span>
            </el-menu-item>
            <el-menu-item index="/jianshu">
                <i class="el-icon-s-order"></i>
                <span class="menu-item">简书</span>
            </el-menu-item>
            <el-menu-item index="/medium">
                <i class="el-icon-printer"></i>
                <span class="menu-item">Medium</span>
            </el-menu-item>
            <el-menu-item index="/portfolio">
                <i class="el-icon-suitcase"></i>
                <span class="menu-item">项目</span>
            </el-menu-item>
            <el-submenu index="/bucket-list/done">
                <template slot="title">
                    <i class="el-icon-s-order"></i>
                    <span class="menu-item">人生清单</span>
                </template>
                <el-menu-item index="/bucket-list/done" style="color: #67C23A">已完成</el-menu-item>
                <el-menu-item index="/bucket-list/todo" style="color: #F56C6C">还在立Flag</el-menu-item>
            </el-submenu>
        </el-menu>

        <el-col
            :xs="{ span: 22, offset: 1 }"
            :lg="{ span: 10, offset: 7 }"
            class="views">
            <router-view></router-view>
        </el-col>
    </div>
</template>

<script>
    import Profile from './components/Profile/Profile'
    import Jianshu from './components/Jianshu/Jianshu'
    import Medium from './components/Medium/Medium'

    export default {
        name: 'app',
        data() {
            return {
                isJianshuActive: false,
                activeName: '/'
            }
        },
        components: {
            Jianshu,
            Medium,
            Profile
        },
        methods: {
            onSelect(route) {
                this.$router.push(route)
            }
        }
    }
</script>

<style lang="scss">
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
    color: #2c3e50;
    height: 100vh;
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    .menu {
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        @media (max-width:480px) {
            .menu-item {
                display: none;
            }
        }
    }
    .views {
        margin-top: 70px;
        margin-bottom: 10px;
        padding: 30px;
        background: white;
        border-radius: 4px;
    }
}
</style>
