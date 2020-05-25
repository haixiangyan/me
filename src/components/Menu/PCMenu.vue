<template>
    <div class="pc-menu">
        <router-link to="/">
            严海翔的个人主页
        </router-link>

        <ul class="menu">
            <li class="menu-item" v-for="menuItem in menu" :class="selected(menuItem.route)">
                <router-link :key="menuItem.route" :to="menuItem.route">
                    {{menuItem.label}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'

  @Component
  export default class PCMenu extends Vue {
    @Prop({required: true})
    menu!: TMenuItem[]
    @Prop({required: true})
    selected!: (route: string) => boolean
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

    .pc-menu {
        display: flex;
        justify-content: space-between;
        margin: 0 auto;
        max-width: 1248px;
        padding: 24px;

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
</style>
