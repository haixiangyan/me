<template>
    <div>
        <div class="jianshu-item">
            <div class="jianshu-item-left">
                <a class="jianshu-item-title" :href="item.url" target="_blank">{{item.title}}</a>
                <p class="jianshu-item-desc">{{item.desc}}</p>
            </div>
            <div class="jianshu-item-right">
                <img v-if="item.avatar" class="jianshu-item-img" :src="item.avatar" alt="avatar">
            </div>
        </div>
        <div></div>
        <el-divider v-if="!isLast"></el-divider>
    </div>
</template>

<script>
    export default {
        name: "JianshuItem",
        props: {
            item: {
                type: Object
            },
            isLast: {
              type: Boolean,
              default: false
            }
        }
    }
</script>

<style scoped lang="scss">
.jianshu-item {
    display: flex;
    justify-content: space-between;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;

    &-left {
        margin-right: 30px;
    }

    &-right {
        height: 100px;
    }

    &-title {
        font-size: 18px;
        font-weight: 700;
        line-height: 1.5;
        color: black;
        margin-bottom: 4px;
        text-decoration: none;
        &:hover {
            text-decoration: underline;
        }
    }
    &-desc {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }

    &-date {
        color: #999;
    }

    &-img {
        width: 125px;
        height: 100px;
        border-radius: 4px;
    }
}
</style>
