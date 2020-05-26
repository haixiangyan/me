<template>
    <footer>
        &copy; 2018 - 2020 &#10084; Made By 海翔
    </footer>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  @Component
  export default class Footer extends Vue {}
</script>

<style scoped lang="scss">
    footer {
        padding: 16px 0;
        border-top: 1px solid #eee;
        color: #909399;
        text-align: center;
    }
</style>
