<template>
    <div class="jianshu">
        <div class="jianshu-banner">
            <a class="jianshu-banner-link" href="https://www.jianshu.com/u/0340be4082b5">
                <img src="../../assets/jianshu.png" alt="jianshu">
            </a>
        </div>
        <divider>所有博文</divider>
        <jianshu-item v-for="item in displayBlogs" :item="item" :key="item.title"></jianshu-item>
        <footer>
            <Page @on-change="onPageChange" size="small" :total="blogsTotal"></Page>
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
        }
    }
    footer {
        text-align: right;
    }
}
</style>
