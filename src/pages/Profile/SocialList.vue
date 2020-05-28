<template>
    <ul class="social-list">
        <li v-for="item in social" :key="item.link">
            <svg class="icon" aria-hidden="true">
                <use :xlink:href="item.icon"></use>
            </svg>
            <a :href="item.link" target="_blank">{{item.link}}</a>
        </li>
    </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class SocialList extends Vue {
    social = [
      {label: 'Github', icon: '#icon-github', link: 'https://github.com/Haixiang6123'},
      {label: '邮箱', icon: '#icon-mail', link: 'mailto:haixiang6123@gmail.com'},
      {label: '简书', icon: '#icon-jianshu', link: 'https://www.jianshu.com/u/0340be4082b5'},
      {label: 'Medium', icon: '#icon-medium', link: 'https://medium.com/@haixiang6123'},
      {label: '守望先锋', icon: '#icon-overwatch', link: 'https://playoverwatch.com/en-us/career/pc/Monster-14255'},
    ]
  }
</script>

<style scoped lang="scss">
    .social-list {
        a {
            margin-left: 8px;
            color: #409EFF;
        }
    }
</style>
