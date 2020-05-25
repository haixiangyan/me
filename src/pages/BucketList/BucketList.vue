<template>
    <div class="bucket-list">
        <h1>
            <span>已完成</span>

            <span>
              <el-radio v-model="type" label="done">已完成</el-radio>
              <el-radio v-model="type" label="todo">还在立Flag</el-radio>
            </span>
        </h1>

        <ul class="bucket-list-content">
            <list-item v-for="item in filterBucketList" :item="item" :key="item.title"></list-item>
        </ul>
    </div>
</template>

<script>
  import bucketList from '../../../db/bucket-list'
  import ListItem from './ListItem'

  export default {
    name: "BucketList",
    data() {
      return {
        type: 'done',
        bucketList
      }
    },
    components: {
      ListItem
    },
    computed: {
      filterBucketList() {
        return bucketList.filter(item => item.status === this.type)
      }
    }
  }
</script>

<style scoped lang="scss">
    .bucket-list {
        h1 {
            display: flex;
            justify-content: space-between;

            span {
                display: flex;
                align-items: center;
            }
        }

        &-image {
            text-align: center;
        }
    }
</style>
