<template>
    <div id="app">
        <Menu @on-select="onSelect" class="menu" mode="horizontal" :active-name="activeName">
            <MenuItem name="1">
                <Icon type="logo-snapchat" />
                <span class="menu-item">Profile</span>
            </MenuItem>
            <MenuItem class="nav-jianshu" name="2">
                <Icon type="ios-leaf" />
                <span class="menu-item">我的简书</span>
            </MenuItem>
            <MenuItem name="3">
                <Icon type="ios-print" />
                <span class="menu-item">Medium</span>
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-code" />
                <span class="menu-item">Portfolio</span>
            </MenuItem>
        </Menu>

        <div class="bg"></div>

        <Col
            :xs="{ span: 22, offset: 1 }"
            :lg="{ span: 10, offset: 7 }"
            class="views">
            <router-view></router-view>
        </Col>

        <back-top></back-top>
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
            }
        },
        computed: {
            activeName() {
                const routes = {
                    '/': 1,
                    '/jianshu': 2,
                    '/medium': 3,
                    '/portfolio': 4
                }
                return routes[this.$route.path].toString()
            }
        },
        components: {
            Jianshu,
            Medium,
            Profile
        },
        methods: {
            onSelect(name) {
                const routes = [ '/', '/jianshu', '/medium', '/portfolio']
                this.$router.push(routes[parseInt(name - 1)])
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
    .bg {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        height: 100vh;
        background: url("./assets/bg.jpg") no-repeat center;
        background-size: cover;
    }
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
