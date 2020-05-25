<template>
    <div id="app">
        <Banner/>
        <div class="views">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
  import Menu from './components/Menu'
  import Banner from "./components/Banner"
  import Profile from './pages/Profile'
  import Jianshu from './pages/Jianshu'
  import Medium from './pages/Medium'

  export default {
    name: 'app',
    data() {
      return {}
    },
    components: {
      Menu,
      Banner,
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
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    #app {
        color: #2c3e50;

        .views {
            max-width: 780px;
            margin: 0 auto;
            padding: 30px;
            background: white;
            border-radius: 4px;
        }
    }
</style>
