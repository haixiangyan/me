<template>
    <div id="app">
        <Banner/>

        <div class="views">
            <router-view></router-view>
        </div>

        <Footer></Footer>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Menu from './components/Menu/Menu.vue'
  import Banner from './components/Banner.vue'
  import Footer from './components/Footer.vue'

  @Component({
    components: {
      Menu, Banner, Footer
    }
  })
  export default class App extends Vue {}
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
            padding: 50px 30px;
            background: white;
        }
    }
</style>
