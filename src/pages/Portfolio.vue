<template>
    <div class="portfolio">
        <h1>个人项目</h1>
        <ul>
            <li v-for="item in portfolioDB" :key="item.github">
                <div>
                    <a class="title" :href="item.github">{{item.title}}</a>
                    <p class="desc">{{item.desc}}</p>
                </div>
                <div class="buttons">
                    <el-button type="success" size="mini" round plain>源码</el-button>
                    <el-button type="primary" size="mini" round plain>项目</el-button>
                </div>
            </li>
        </ul>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import portfolioDB from '@/db/portfolioDB'

  @Component
  export default class Portfolio extends Vue {
    portfolioDB = portfolioDB
  }
</script>

<style scoped lang="scss">
    .portfolio {
        li {
            display: flex;
            justify-content: space-between;
            margin-bottom: 32px;
            min-height: 86px;

            &:last-child {
                margin-bottom: 0;
            }

            a.title {
                font-size: 1.2em;
                color: #409EFF;
            }
            .buttons {
                min-width: 40%;
                text-align: right;
            }
        }

        .desc {
            margin-top: 4px;
        }
    }
</style>
