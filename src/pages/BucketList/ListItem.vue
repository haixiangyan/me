<template>
    <li>
        <div class="list-item">
            <section class="list-item-header">
                <i :class="item.status === 'done' ? 'el-icon-check' : 'el-icon-s-flag'"/>

                <span class="title" :class="{done: item.status === 'done'}" @click="showImages">
                    {{item.name}}
                </span>
            </section>
            <el-carousel v-if="show && item.imgs" height="500px">
                <el-carousel-item class="list-item-img-wrapper" :key="img" v-for="img in item.imgs">
                    <img class="list-item-img" :src="img" alt="img">
                </el-carousel-item>
            </el-carousel>
        </div>
    </li>
</template>

<script>
  export default {
    name: "MediumItem",
    props: {
      item: {
        type: Object
      }
    },
    data() {
      return {
        show: false
      }
    },
    methods: {
      showImages() {
        if (this.item.status === 'done') {
          this.show = !this.show
        }
      }
    }
  }
</script>

<style scoped lang="scss">
.list-item {
    margin: 12px 0;

    &-header {
        display: flex;
        align-items: center;
        margin-bottom: 16px;
        > i {
            font-weight: bold;
            margin-right: 16px;
            &.el-icon-check {
                color: #67C23A;
            }
            &.el-icon-s-flag {
                color: #F56C6C;
            }
        }

        > .title {
            font-size: 1.2em;
            &.done {
                color: #409EFF;
                cursor: pointer;
                &:hover {
                    text-decoration: underline;
                }
            }
        }
    }

    &-img {
        &-wrapper {
            text-align: center;
        }

        max-width: 100%;
        max-height: 100%;
    }
}
</style>
