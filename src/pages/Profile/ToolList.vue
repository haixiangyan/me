<template>
    <ul class="tool-list">
        <li>⌨️ Mac OS + HHKB + Razer Basilisk Ultimate。</li>
        <li>
            🔨 开发喜欢 WebStorm + IdeaVim 的搭配，已经放弃
            <span class="deprecated">Sublime，Atom，VsCode。</span>
        </li>
        <li>💻 在 iTerm2.app + zshell 里运行命令行</li>
        <li>
            📖 一般用 Bear.app 记笔试，中文博客发在
            <a href="https://www.jianshu.com/u/0340be4082b5" target="_blank">简书</a>
            ，英文博客发在
            <a href="https://medium.com/@haixiang6123" target="_blank">Medium</a>。
        </li>
    </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class ToolList extends Vue {

  }
</script>

<style scoped lang="scss">
.deprecated {
    text-decoration: line-through;
}
</style>
