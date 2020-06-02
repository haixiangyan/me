<template>
    <li>
        <div class="list-item">
            <section class="header">
                <span class="text-overflow">
                    <i :class="item.status === 'done' ? 'el-icon-check' : 'el-icon-s-flag'"/>

                    <span class="title" :class="{done: item.status === 'done', selected: show}" @click="showImages">
                        {{item.name}}
                    </span>
                </span>

                <span class="date">{{getDate(item.date)}}</span>
            </section>
            <el-carousel v-if="show && item.imgs" height="500px">
                <el-carousel-item class="img-wrapper" :key="img" v-for="img in item.imgs">
                    <el-image class="img" :src="img" fit="contain" alt="img">
                        <div slot="placeholder" class="img-slot">
                            <i class="el-icon-loading"></i>
                        </div>
                        <div slot="error" class="img-slot">
                            加载失败，可能没有翻墙？
                        </div>
                    </el-image>
                </el-carousel-item>
            </el-carousel>
        </div>
    </li>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'

  import dayjs from 'dayjs'
  import {DATE} from '@/lib/date'

  @Component
  export default class ListItem extends Vue {
    @Prop({type: Object, required: true})
    item!: TBucketItem

    show = false

    showImages() {
      if (this.item.status === 'done') {
        this.show = !this.show
      }
    }

    getDate(rawDate: string) {
      return dayjs(rawDate).format(DATE)
    }
  }
</script>

<style scoped lang="scss">
    .list-item {
        margin: 12px 0;

        .header {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin-bottom: 16px;

            i {
                font-weight: bold;
                margin-right: 8px;

                &.el-icon-check {
                    color: #67C23A;
                }

                &.el-icon-s-flag {
                    color: #F56C6C;
                }
            }

            .title {
                transition: all .3s;
                &.selected {
                    font-size: 1.2em;
                }

                &.done {
                    color: #409EFF;
                    cursor: pointer;

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
            .date {
                text-align: right;
                min-width: 30%;
            }
        }

        .img {
            &-slot {
                height: 100%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &-wrapper {
                text-align: center;
            }

            i {
                font-size: 2em;
            }

            width: 100%;
            height: 100%;
        }
    }
</style>
