<template>
    <div id="app">
        <div class="bg"></div>
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
                isJianshuActive: false
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
    .bg {
        position: fixed;
        width: 100vw;
        height: 100vh;
        background: url("./assets/bg.jpg") no-repeat center;
        background-size: cover;
    }
}
</style>
