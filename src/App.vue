<template>
    <div id="app">
        <Menu @on-select="onSelect" class="menu" mode="horizontal" :active-name="activeName">
            <MenuItem name="/">
                <Icon type="logo-snapchat"/>
                <span class="menu-item">Profile</span>
            </MenuItem>
            <MenuItem class="nav-jianshu" name="/jianshu">
                <Icon type="ios-leaf"/>
                <span class="menu-item">我的简书</span>
            </MenuItem>
            <MenuItem name="/medium">
                <Icon type="ios-print"/>
                <span class="menu-item">Medium</span>
            </MenuItem>
            <MenuItem name="/portfolio">
                <Icon type="md-code"/>
                <span class="menu-item">Portfolio</span>
            </MenuItem>
            <Submenu name="/bucket-list">
                <template slot="title">
                    <Icon type="ios-bookmark"/>
                    <span class="menu-item">Bucket List</span>
                </template>
                <MenuItem name="/bucket-list/done" style="color: #19be6b">Done</MenuItem>
                <MenuItem name="/bucket-list/todo" style="color: #ed4014">Todo</MenuItem>
            </Submenu>
        </Menu>

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
