<template>
    <div class="portfolio">
        <a class="portfolio-link" href="https://github.com/Haixiang6123" target="_blank">
            <img :src="bannerImage" alt="portfolio">
        </a>
        <el-divider>所有项目</el-divider>
        <medium-item v-for="item in portfolio" :item="item" :key="item.title"></medium-item>
    </div>
</template>

<script>
    import MediumItem from '../Medium/MediumItem'
    import {getImageUrl} from "../BucketList/list"

    const portfolio = require('../../../db/portfolio.json')
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
            MediumItem
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
    &-item {
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
