<template>
    <el-dropdown>
        <span class="dropdown">
            <i class="el-icon-menu"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>黄金糕</el-dropdown-item>
            <el-dropdown-item>狮子头</el-dropdown-item>
            <el-dropdown-item>螺蛳粉</el-dropdown-item>
            <el-dropdown-item disabled>双皮奶</el-dropdown-item>
            <el-dropdown-item divided>蚵仔煎</el-dropdown-item>
        </el-dropdown-menu>
    </el-dropdown>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'

  @Component
  export default class MobileMenu extends Vue {
    @Prop({required: true})
    menu!: TMenuItem[]
    @Prop({required: true})
    selected!: (route: string) => boolean
  }
</script>

<style scoped lang="scss">
    .dropdown {
        i {
            color: white
        }
    }
</style>
