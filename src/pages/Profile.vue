<template>
    <div class="profile">
        <div class="item">
            <h1>我</h1>
            <p>本科毕业于东北大学，研究生毕业于加州大学尔湾分校，所学专业皆为计算机。即将去腾讯担任前端工程师。</p>
        </div>

        <div class="item">
            <h1>找我</h1>
            <Social/>
        </div>
    </div>
</template>

<script lang="ts">
  import Vue from 'vue'
  import {Component} from 'vue-property-decorator'

  import Social from '../components/SocialList.vue'

  @Component({
    components: {Social}
  })
  export default class Profile extends Vue {}
</script>

<style scoped lang="scss">
    .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 10px;

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
