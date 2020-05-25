<template>
    <el-menu class="menu" router mode="horizontal">
        <el-menu-item index="/">
            <i class="el-icon-user"></i>
            <span class="menu-item">我</span>
        </el-menu-item>
        <el-menu-item index="/jianshu">
            <i class="el-icon-notebook-1"></i>
            <span class="menu-item">简书</span>
        </el-menu-item>
        <el-menu-item index="/medium">
            <i class="el-icon-notebook-2"></i>
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
            <el-menu-item index="/bucket-list/done" style="color: #67C23A">
                <i class="el-icon-check" style="color: #67C23A"></i>
                已完成
            </el-menu-item>
            <el-menu-item index="/bucket-list/todo" style="color: #F56C6C">
                <i class="el-icon-s-flag" style="color: #F56C6C"></i>
                还在立Flag
            </el-menu-item>
        </el-submenu>
    </el-menu>

</template>

<script lang="ts">
  export default {
    name: 'Menu'
  }
</script>

<style scoped lang="scss">
    .menu {
        position: fixed;
        top: 0;
        display: flex;
        width: 100%;
        justify-content: center;
        z-index: 3;
        @media (max-width:480px) {
            .menu-item {
                display: none;
            }
        }
    }
</style>
