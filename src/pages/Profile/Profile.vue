<template>
    <div class="profile">
        <div class="item">
            <h1>我</h1>
            <p>
                在
                <a href="https://www.tencent.com/zh-cn/about.html" target="_blank">腾讯</a>
                做前端开发，坐标深圳。本科和研究生分别毕业于
                <a href="https://www.neu.edu.cn/" target="_blank">东北大学</a>
                &amp;
                <a href="https://uci.edu/" target="_blank">加州大学尔湾分校</a>
                ，都为计算机专业。
            </p>
            <el-button @click="showMore = !showMore" type="text">
                {{showMoreText}}<i :class="showMore ? 'el-icon-caret-top' : 'el-icon-caret-bottom'"/>
            </el-button>
        </div>

        <div v-show="showMore" class="item">
            <h1>更多</h1>
            <DetailsList/>
        </div>

        <div v-show="showMore" class="item">
            <h1>技术</h1>
            <TechList/>
        </div>

        <div v-show="showMore" class="item">
            <h1>工具</h1>
            <ToolList/>
        </div>

        <div class="item">
            <h1>找我</h1>
            <SocialList/>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import DetailsList from '@/pages/Profile/DetailsList.vue'
  import SocialList from '@/pages/Profile/SocialList.vue'
  import ToolList from '@/pages/Profile/ToolList.vue'
  import TechList from '@/pages/Profile/TechList.vue'

  @Component({
    components: {SocialList, DetailsList, ToolList, TechList}
  })
  export default class Profile extends Vue {
    showMore = false

    get showMoreText() {
      return this.showMore ? '收起' : '了解更多'
    }
  }
</script>

<style scoped lang="scss">
    .profile {
        .item {
            padding-bottom: 24px;
            margin-bottom: 32px;
            border-bottom: 1px dashed #DCDFE6;

            &:last-child {
                padding-bottom: 0;
                margin-bottom: 0;
                border-bottom: none;
            }
        }
    }
</style>
