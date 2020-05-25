<template>
    <div class="portfolio">
        <h1>个人项目</h1>
        <ul>
            <li v-for="item in portfolio" :key="item.github">
                <p>
                    <a :href="item.github">{{item.title}}</a>
                    <el-divider direction="vertical"/>
                    <a :href="item.url">Demo</a>
                </p>
                <p class="desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script>
  import {getImageUrl} from "../../db/bucket-list"

  const portfolio = require('../../db/portfolio-db.json')
  export default {
    name: "Portfolio",
    data() {
      return {
        selected: 0,
        bannerImage: getImageUrl('portfolio.png'),
        portfolio
      }
    }
  }
</script>

<style scoped lang="scss">
    .portfolio {
        a {
            font-size: 1.2em;
            color: #409EFF;
        }

        .desc {
            margin-top: 4px;
        }
    }
</style>
