<template>
    <div class="portfolio">
        <h1>个人项目</h1>
        <ul>
            <li v-for="item in portfolio" :key="item.github">
                <p>
                    <a class="title" :href="item.github">{{item.title}}</a>
                    <span>
                        <el-button type="success" size="mini" round plain>源码</el-button>
                        <el-button type="primary" size="mini" round plain>项目</el-button>
                    </span>
                </p>
                <p class="desc">{{item.desc}}</p>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  const portfolio = require('../db/portfolio-db.json')

  @Component
  export default class Portfolio extends Vue {
    portfolio = portfolio
  }
</script>

<style scoped lang="scss">
    .portfolio {
        li {
            a.title {
                font-size: 1.2em;
                color: #409EFF;
            }

            p {
                display: flex;
                justify-content: space-between;
            }
        }

        .desc {
            margin-top: 4px;
        }
    }
</style>
