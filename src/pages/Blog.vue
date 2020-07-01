<template>
    <div class="blog">
        <h1>
            <span>{{title}}</span>
            <span>
              <el-radio v-model="title" label="简书">简书</el-radio>
              <el-radio v-model="title" label="Medium">Medium</el-radio>
            </span>
        </h1>
        <ul>
            <li v-for="item in displayBlogs" :key="item.url">
                <span class="text-overflow">
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="listIcon"></use>
                    </svg>
                    <a class="title" :href="item.url" target="_blank" :title="item.desc">
                        {{item.title}}
                    </a>
                </span>
                <span class="date">{{getDate(item.date)}}</span>
            </li>
        </ul>

        <footer>
            <el-pagination @current-change="onPageChange"
                           hide-on-single-page
                           background
                           :page-size="10"
                           :pager-count="5"
                           :total="blogsTotal"
                           layout="pager"/>
        </footer>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component, Prop} from 'vue-property-decorator'

  import jianshuDB from '@/db/jianshuDB'
  import mediumDB from '@/db/mediumDB'
  import dayjs from 'dayjs'
  import {DATE} from '@/lib/date'

  @Component
  export default class Blog extends Vue {
    @Prop({type: Boolean, default: false})
    isActive!: boolean

    title = '简书'
    currentPage = 1

    get db() {
      return this.title === '简书' ? jianshuDB : mediumDB
    }

    get listIcon() {
      return this.title === '简书' ? '#icon-jianshu' : '#icon-medium'
    }

    get displayBlogs() {
      const begin = (this.currentPage - 1) * 10
      const end = (begin + 10 > this.db.length) ? this.db.length : begin + 10
      return this.db.slice(begin, end)
    }

    get blogsTotal() {
      return this.db.length
    }

    onPageChange(page: number) {
      this.currentPage = page
    }

    getDate(rawDate: string) {
      return dayjs(rawDate).format(DATE)
    }
  }
</script>

<style scoped lang="scss">
    .blog {
        h1 {
            display: flex;
            justify-content: space-between;

            span {
                display: flex;
                align-items: center;
            }
        }

        li {
            display: flex;
            justify-content: space-between;

            .title {
                margin-left: 8px;
            }
            .date {
                min-width: 30%;
                text-align: right;
            }
        }

        footer {
            margin-top: 36px;
            text-align: center;
        }
    }
</style>
