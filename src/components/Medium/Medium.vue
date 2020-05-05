<template>
    <div class="medium">
        <a class="medium-link" href="https://medium.com/@haixiang6123">
            <img src="../../assets/medium.png" alt="medium">
        </a>
        <divider>All Posts</divider>
        <medium-item v-for="item in displayBlogs" :item="item" :key="item.title"></medium-item>
        <footer>
            <Page @on-change="onPageChange" size="small" :total="blogsTotal"></Page>
        </footer>
    </div>
</template>

<script>
    import db from '../../../db/medium.js'
    import MediumItem from './MediumItem'
    export default {
        name: "Medium",
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
                console.log(this.db.length)
                return this.db.length
            }
        },
        components: {
            MediumItem
        },
        methods: {
            onPageChange(page) {
                console.log(page)
                this.currentPage = page
            }
        }
    }
</script>

<style scoped lang="scss">
.medium {
    &-link {
        width: 100%;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        img {
            width: 50%;
        }
    }
    footer {
        text-align: right;
    }
}
</style>
