<template>
    <div class="jianshu">
        <div class="jianshu-banner">
            <a class="jianshu-banner-link" href="https://www.jianshu.com/u/0340be4082b5">
                <img :src="bannerImage" alt="jianshu">
            </a>
        </div>
        <el-divider>所有博文</el-divider>
        <jianshu-item v-for="(item, index) in displayBlogs"
                      :item="item"
                      :key="item.title"
                      :is-last="index === displayBlogs.length - 1"/>
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
    import db from '../../../db/jianshu-db.json'
    import JianshuItem from './JianshuItem'
    import {getImageUrl} from "../BucketList/list"
    export default {
        name: "Jianshu",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                db,
                currentPage: 1,
                bannerImage: getImageUrl('jianshu.png')
            }
        },
        computed: {
            displayBlogs() {
                const begin = (this.currentPage - 1) * 10
                const end = (begin + 10 > this.db.length) ? this.db.length : begin + 10
                return this.db.slice(begin, end)
            },
            blogsTotal() {
                return this.db.length
            }
        },
        components: {
            JianshuItem
        },
        methods: {
            onPageChange(page) {
                this.currentPage = page
            }
        }
    }
</script>

<style scoped lang="scss">
.jianshu {
    &-banner {
        text-align: center;
        &-link {
            display: inline-block;
            vertical-align: top;
            img {
                max-width: 100%;
            }
        }
    }
    footer {
        margin-top: 36px;
        text-align: center;
    }
}
</style>
