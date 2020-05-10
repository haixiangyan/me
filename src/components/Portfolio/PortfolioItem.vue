<template>
    <el-row class="portfolio-item">
        <el-col :span="20">
            <h3 class="title">
                <a :href="item.url">{{item.title}}</a>
            </h3>
            <p class="desc">{{item.desc}}</p>
        </el-col>
        <el-col :span="4">
            <el-button size="small">Github</el-button>
        </el-col>
    </el-row>
</template>

<script lang="ts">
  export default {
    name: 'PortfolioItem',
    props: ['item'],
    data() {
      return {

      }
    }
  }
</script>

<style scoped lang="scss">
.portfolio-item {
    padding: 24px 0;
    .title {
        font-weight: normal;
        line-height: 1.5;
        a {
            text-decoration: none;
            color: #0366d6;
            font-size: 20px;
            &:hover {
                text-decoration: underline;
            }
        }
    }
    .desc {
        padding-right: 24px;
        margin-bottom: 8px;
        color: #586069;
        font-size: 14px;
        line-height: 1.5;
    }
}
</style>
