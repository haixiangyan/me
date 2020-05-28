<template>
    <ul class="tech-list">
        <li>Web 前端（TypeScript、Vue.ts、React.ts、Angular、Sass 等）</li>
        <li>Web 后端（Node.js、Express.ts、MySQL、Sequelize 等）</li>
        <li>测试（Jest、Mocha、Sinon、Karma、SuperTest、Travis CI 等）</li>
        <li>正在学习 Java、Python</li>
    </ul>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class TechList extends Vue {

  }
</script>

<style scoped lang="scss">

</style>
