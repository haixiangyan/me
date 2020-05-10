<template>
    <li class="portfolio-item">
        <el-row>
            <el-col :span="20">
                <h3 class="title">
                    <a :href="item.url">{{item.title}}</a>
                </h3>
                <p class="desc">{{item.desc}}</p>
                <ul class="languages">
                    <li v-for="lang in item.languages" :key="lang">
                        <span class="marker" :style="{background: getMakerColor(lang)}"></span>
                        <span>{{lang}}</span>
                    </li>
                </ul>
            </el-col>
            <el-col :span="4">
                <el-button size="small">Github</el-button>
            </el-col>
        </el-row>
        <el-divider v-if="!isLast"></el-divider>
    </li>
</template>

<script lang="ts">
  const markerColor = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    React: '#45D8FF',
    Vue: '#2c3e50',
    HTML: '#e34c26',
    Angular: '#DD0B31',
    Python: '#2b7489',
    Chrome: '#1B73E8'
  }

  export default {
    name: 'PortfolioItem',
    props: ['item', 'isLast'],
    data() {
      return {}
    },
    methods: {
      getMakerColor(lang) {
        return markerColor[lang]
      }
    }
  }
</script>

<style scoped lang="scss">
    .portfolio-item {
        line-height: 1.5;
        .title {
            font-weight: normal;
            line-height: 1.5;
            margin-bottom: 8px;

            a {
                text-decoration: none;
                color: #0366d6;
                font-size: 20px;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        img {
            width: 200px;
        }

        .desc {
            padding-right: 24px;
            margin-bottom: 16px;
            color: #586069;
            font-size: 14px;
            line-height: 1.5;
        }

        .languages {
            display: flex;
            margin-top: 8px;
            list-style: none;

            li {
                margin-right: 14px;
                font-size: 12px;
                color: #586069;
                display: flex;
                align-items: center;

                .marker {
                    content: '';
                    display: inline-block;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin-right: 4px;
                }
            }
        }
    }
</style>
