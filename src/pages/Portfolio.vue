<template>
    <div class="portfolio">
        <h1>个人项目</h1>
        <ul>
            <li v-for="item in portfolioDB" :key="item.github">
                <div>
                    <a class="title" :href="item.url" target="_blank">{{item.title}}</a>
                    <p class="desc">{{item.desc}}</p>
                </div>
                <div class="buttons">
                    <el-button type="success" size="mini" @click="goto(item.github)">
                        源码
                    </el-button>
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
    goto(website: string) {
      window.open(website, '_blank');
    }
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
                min-width: 20%;
                text-align: right;
            }
        }

        .desc {
            margin-top: 4px;
        }
    }
</style>
