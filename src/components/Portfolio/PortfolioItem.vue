<template>
    <li class="portfolio-item">
        <el-row>
            <el-col :span="20">
                <h3 class="title">
                    <a :href="item.url" target="_blank">{{item.title}}</a>
                </h3>
                <p class="desc">{{item.desc}}</p>
                <ul class="languages">
                    <lang-tag v-for="lang in item.languages" :lang="lang" :key="lang"/>
                    <star-tag :stars="item.stars"></star-tag>
                </ul>
            </el-col>
            <el-col class="action" :span="4">
                <a :href="item.github" style="text-decoration: none" target="_blank">
                    <github-button>
                        <i class="el-icon-star-on"></i>
                        <span>Github</span>
                    </github-button>
                </a>
            </el-col>
        </el-row>
        <el-divider v-if="!isLast"></el-divider>
    </li>
</template>

<script lang="ts">
  import LangTag from './LangTag.vue'
  import StarTag from './StarTag.vue'
  import GithubButton from './GithubButton.vue'
  export default {
    name: 'PortfolioItem',
    props: ['item', 'isLast'],
    data() {
      return {}
    },
    components: {
      LangTag,
      StarTag,
      GithubButton
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
        }

        .action {
            text-align: right;
            .el-icon-star-on {
                margin-right: 4px;
                transform: scale(1.2);
            }
        }
    }
</style>
