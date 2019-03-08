<template>
    <div>
        <div class="jianshu-item">
            <div class="jianshu-item-left">
                <a class="jianshu-item-title" :href="item.url">{{item.title}}</a>
                <p class="jianshu-item-desc">{{item.desc}}</p>
            </div>
            <div class="jianshu-item-right">
                <img  class="jianshu-item-img" :src="item.avatar" alt="avatar">
            </div>
        </div>
        <div></div>
        <divider></divider>
    </div>
</template>

<script>
    export default {
        name: "JianshuItem",
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
.jianshu-item {
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    display: flex;

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
