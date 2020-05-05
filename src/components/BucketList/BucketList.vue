<template>
    <div class="bucket-list">
        <div class="bucket-list-image">
            <img src="../../assets/bucketlist.jpg" alt="bucketlist">
        </div>
        <divider>My Bucket List</divider>
        <ul class="bucket-list-content">
            <list-item v-for="item in bucketList" :item="item" :key="item.title"></list-item>
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
        }
    }
</script>

<style scoped lang="scss">
    .bucket-list {
        &-image {
            text-align: center;
        }
        &-content {
            margin-top: 12px;
            padding: 0 24px;
        }
    }
</style>
