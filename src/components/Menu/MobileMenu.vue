<template>
    <div class="mobile-menu">
        <i @click="showDrawer = true" class="el-icon-menu"></i>
        <el-drawer
            class="drawer"
            title="嘿嘿嘿"
            :visible.sync="showDrawer"
            size="56%"
            direction="ltr">
            <ul class="menu">
                <li class="menu-item" v-for="menuItem in menu" :class="selected(menuItem.route)" @click="showDrawer = false">
                    <router-link :key="menuItem.route" :to="menuItem.route">
                        {{menuItem.label}}
                    </router-link>
                </li>
            </ul>
        </el-drawer>
    </div>
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

    showDrawer = false
  }
</script>

<style scoped lang="scss">
    .mobile-menu {
        display: flex;
        padding: 14px 14px 0;
        i {
            font-size: 2.4em;
            color: white;
        }
        .drawer {
            .menu-item {
                display: flex;
                > a {
                    flex-grow: 1;
                    padding: 8px 20px;
                    border-color: transparent;
                }
                &.selected {
                    > a {
                        background: #EDF5FF;
                    }
                }
            }
        }
    }
</style>
