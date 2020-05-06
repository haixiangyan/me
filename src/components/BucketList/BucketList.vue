<template>
    <div class="bucket-list">
        <div class="bucket-list-image">
            <img src="../../assets/bucketlist.jpg" alt="bucketlist">
        </div>
        <divider>My Bucket List</divider>
        <ul class="bucket-list-content">
            <list-item v-for="item in filterBucketList" :item="item" :key="item.title"></list-item>
        </ul>
    </div>
</template>

<script>
    import bucketList from './list'
    import ListItem from './ListItem'
    export default {
        name: "BucketList",
        data() {
            return {
                bucketList
            }
        },
        components: {
          ListItem
        },
        computed: {
            filterBucketList() {
              const type = this.$route.params.type || 'done'
              return bucketList.filter(item => item.status === type)
            }
        }
    }
</script>

<style scoped lang="scss">
    .bucket-list {
        &-image {
            text-align: center;
        }
        &-content {
            list-style: none;
            margin-top: 12px;
        }
    }
</style>
