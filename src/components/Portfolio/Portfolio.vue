<template>
    <div class="portfolio">
        <a class="portfolio-link" href="https://github.com/Haixiang6123" target="_blank">
            <img :src="bannerImage" alt="portfolio">
        </a>
        <el-divider>所有项目</el-divider>
        <ul class="portfolio-list">
            <portfolio-item v-for="(item, index) in portfolio"
                            :item="item"
                            :key="item.title"
                            :is-last="index === portfolio.length"/>
        </ul>
    </div>
</template>

<script>
    import PortfolioItem from "./PortfolioItem"
    import {getImageUrl} from "../BucketList/list"

    const portfolio = require('../../../db/portfolio-db.json')
    export default {
        name: "Portfolio",
        data() {
            return {
                selected: 0,
                bannerImage: getImageUrl('portfolio.png'),
                portfolio
            }
        },
        components: {
          PortfolioItem
        }
    }
</script>

<style scoped lang="scss">
.portfolio {
    &-link {
        width: 100%;
        display: inline-block;
        vertical-align: top;
        text-align: center;
        img {
            max-width: 100%;
        }
    }
    &-list {
        list-style: none;
    }
}
</style>
