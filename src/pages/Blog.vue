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
                <span>
                    <svg class="icon" aria-hidden="true">
                        <use :xlink:href="listIcon"></use>
                    </svg>
                    <a :href="item.url">{{item.title}}</a>
                </span>
                <span>{{getDate(item.date)}}</span>
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

<script>
  import jianshuDB from '../../db/jianshu-db.json'
  import mediumDB from '../../db/medium.js'
  import {getImageUrl} from "../../db/bucket-list"
  import dayjs from "dayjs"
  import {DATE} from "../../lib/date"

  export default {
    name: "Blog",
    props: {
      isActive: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        title: '简书',
        currentPage: 1,
        bannerImage: getImageUrl('jianshu.png')
      }
    },
    computed: {
      db() {
        return this.title === '简书' ? jianshuDB : mediumDB
      },
      listIcon() {
        return this.title === '简书' ? '#icon-jianshu' : '#icon-medium'
      },
      displayBlogs() {
        const begin = (this.currentPage - 1) * 10
        const end = (begin + 10 > this.db.length) ? this.db.length : begin + 10
        return this.db.slice(begin, end)
      },
      blogsTotal() {
        return this.db.length
      }
    },
    methods: {
      onPageChange(page) {
        this.currentPage = page
      },
      getDate(rawDate) {
        return dayjs(rawDate).format(DATE)
      }
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
            a {
                margin-left: 8px;
            }
        }

        footer {
            margin-top: 36px;
            text-align: center;
        }
    }
</style>
