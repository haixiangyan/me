<template>
    <div class="bucket-list">
        <div class="bucket-list-image">
            <img src="../../assets/bucketlist.jpg" alt="bucketlist">
        </div>
        <ul class="bucket-list-content">
            <li v-for="item in bucketList" :class="['bucket-list-content-item', item.status]">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    import bucketList from './list'
    export default {
        name: "BucketList",
        data() {
            return {
                bucketList
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
            margin-top: 12px;
            padding: 0 24px;
            &-item.done {
                text-decoration: line-through;
            }
        }
        h1 {
            font-weight: 600;
            line-height: 1.25;
            margin-bottom: 16px;
            border-bottom: 1px solid #eaecef;
            font-size: 3em;
        }
        p, li {
            font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
            font-size: 16px;
            line-height: 1.5;
        }
    }
</style>
