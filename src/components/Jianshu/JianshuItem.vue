<template>
    <div>
        <div class="jianshu-item">
            <div class="jianshu-item-left">
                <a class="jianshu-item-title">TS: 接口</a>
                <p class="jianshu-item-desc">
                    接口算是官方文档里的第一个知识点了，这篇文章会简单介绍 TypeScrip 里的接口。 类型 在说接口之前我们先来了解下 TypeScript ...
                </p>
                <p class="jianshu-item-date">03-21</p>
            </div>
            <div class="jianshu-item-right">
                <img class="jianshu-item-img" src="https://upload-images.jianshu.io/upload_images/2979799-40a3d166d2178e96.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/300/h/240" alt="">
            </div>
        </div>
        <div></div>
        <divider></divider>
    </div>
</template>

<script>
    export default {
        name: "JianshuItem"
    }
</script>

<style scoped lang="scss">
.jianshu-item {
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
    display: flex;

    &-left {
        margin-right: 30px;
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