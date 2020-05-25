<template>
    <nav class="nav">
        <div class="nav-wrapper">
            <router-link to="/">
                严海翔的人个主页
            </router-link>

            <ul class="menu">
                <li class="menu-item" v-for="menuItem in menu" :class="selected(menuItem.route)">
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
          {route: '/blog', label: '文章', icon: 'el-icon-notebook-1'},
          {route: '/portfolio', label: '项目', icon: 'el-icon-suitcase'},
          {route: '/bucket-list', label: '人生清单', icon: 'el-icon-s-order'},
        ]
      }
    },
    methods: {
      selected(route) {
        return route === this.$route.path ? 'selected' : ''
      }
    }
  }
</script>

<style scoped lang="scss">
    a {
        color: white;
        border-bottom: 2px solid transparent;
        font-weight: bold;
        &:hover {
            border-color: white;
        }
    }
    .nav {
        &-wrapper {
            display: flex;
            justify-content: space-between;
            margin: 0 auto;
            max-width: 1200px;
            padding: 24px 0;

            .menu {
                display: flex;
                align-items: center;
                &-item {
                    margin-right: 16px;
                    margin-bottom: 0;
                    &.selected {
                        a {
                            border-color: white;
                        }
                    }
                    &:last-child {
                        margin-right: 0;
                    }
                }
            }
        }
    }
</style>
