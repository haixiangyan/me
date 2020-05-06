<template>
    <div class="medium">
        <a class="medium-link" href="https://medium.com/@haixiang6123">
            <img src="../../assets/medium.jpg" alt="medium">
        </a>
        <divider>All Posts</divider>
        <medium-item v-for="(item, index) in displayBlogs"
                     :item="item"
                     :key="item.title"
                     :is-last="index === displayBlogs.length - 1"/>
        <footer>
            <Page @on-change="onPageChange" simple :total="blogsTotal"></Page>
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
                return this.db.length
            }
        },
        components: {
            MediumItem
        },
        methods: {
            onPageChange(page) {
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
            max-width: 100%;
        }
    }
    footer {
        margin-top: 36px;
        text-align: center;
    }
}
</style>
