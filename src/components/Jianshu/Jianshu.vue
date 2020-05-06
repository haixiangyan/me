<template>
    <div class="jianshu">
        <div class="jianshu-banner">
            <a class="jianshu-banner-link" href="https://www.jianshu.com/u/0340be4082b5">
                <img src="../../assets/jianshu.png" alt="jianshu">
            </a>
        </div>
        <el-divider>所有博文</el-divider>
        <jianshu-item v-for="(item, index) in displayBlogs"
                      :item="item"
                      :key="item.title"
                      :is-last="index === displayBlogs.length - 1"/>
        <footer>
            <el-pagination @current-change="onPageChange"
                           background
                           :page-size="10"
                           :total="blogsTotal"
                           layout="prev, pager, next"/>
        </footer>
    </div>
</template>

<script>
    import db from '../../../db/jianshu-db.json'
    import JianshuItem from './JianshuItem'
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
                currentPage: 1
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
