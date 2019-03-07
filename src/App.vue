<template>
    <div id="app">
        <Menu class="menu" mode="horizontal" :theme="theme1" active-name="1">
            <MenuItem name="1">
                <Icon type="logo-snapchat" />
                Me
            </MenuItem>
            <MenuItem class="nav-jianshu" name="2">
                <Icon type="ios-leaf" />
                简书
            </MenuItem>
            <MenuItem name="3">
                <Icon type="md-print" />
                Medium
            </MenuItem>
            <MenuItem name="4">
                <Icon type="md-game-controller-b" />
                Contact
            </MenuItem>
        </Menu>
        <jianshu :is-active="isJianshuActive"></jianshu>
        <profile></profile>
        <medium></medium>
    </div>
</template>

<script>
    import Profile from './components/Profile'
    import Jianshu from './components/Jianshu'
    import Medium from './components/Medium'

    export default {
        name: 'app',
        data() {
            return {
                isJianshuActive: false,
                theme1: 'light'
            }
        },
        components: {
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
}
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
    height: 100vh;
    background: url("./assets/bg.jpg") no-repeat center;
    background-size: cover;
    .menu {
        display: flex;
        justify-content: center;
    }
}
</style>
