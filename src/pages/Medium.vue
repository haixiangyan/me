<template>
    <div class="medium">
        <h1>Medium</h1>

        <ul>
            <li v-for="item in displayBlogs" :key="item.url">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-medium"></use>
                </svg>
                <a :href="item.url">{{item.title}}</a>
            </li>
        </ul>

        <footer>
            <el-pagination @current-change="onPageChange"
                           background
                           :pager-count="5"
                           :page-size="10"
                           :total="blogsTotal"
                           layout="pager"/>
        </footer>
    </div>
</template>

<script>
    import db from '../../db/medium.js'
    import {getImageUrl} from "../../db/bucket-list"
    export default {
        name: "Medium",
        data() {
            return {
                db,
                currentPage: 1,
                bannerImage: getImageUrl('medium.jpg')
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
        methods: {
            onPageChange(page) {
                this.currentPage = page
            }
        }
    }
</script>

<style scoped lang="scss">
.medium {
    ul {
        padding: 0;
        list-style: none;
        li {
            a {
                margin-left: 8px;
                color: #2c3e50;
                &:hover {
                    color: #409EFF;
                }
            }
        }
    }
    footer {
        margin-top: 36px;
        text-align: center;
    }
}
</style>
