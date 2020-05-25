<template>
    <nav class="nav">
        <div class="nav-wrapper">
            <router-link to="/">
                严海翔的人个主页
            </router-link>

            <ul class="menu">
                <li class="menu-item" v-for="menuItem in menu">
                    <router-link :key="menuItem.route" :to="menuItem.route">
                        {{menuItem.label}}
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>

</template>

<script lang="ts">
  export default {
    name: 'Menu',
    data() {
      return {
        menu: [
          {route: '/', label: '主页', icon: 'el-icon-user'},
          {route: '/jianshu', label: '中文博客', icon: 'el-icon-notebook-1'},
          {route: '/medium', label: '英文博客', icon: 'el-icon-notebook-2'},
          {route: '/portfolio', label: '项目', icon: 'el-icon-suitcase'},
          {route: '/bucket-list/done', label: '人生清单', icon: 'el-icon-s-order'},
        ]
      }
    }
  }
</script>

<style scoped lang="scss">
    .nav {
        border-bottom: 1px solid #eee;

        &-wrapper {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1200px;
            padding: 16px 0;

            .menu {
                display: flex;
                align-items: center;
                list-style-type: none;
                &-item {
                    margin-right: 16px;
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
