<template>
    <div class="jianshu">
        <div class="jianshu-banner">
            <a class="jianshu-banner-link" href="https://www.jianshu.com/u/0340be4082b5">
                <img src="../../assets/jianshu.png" alt="jianshu">
            </a>
        </div>
        <divider>中文博文</divider>
        <jianshu-item></jianshu-item>
    </div>
</template>

<script>
    import JianshuItem from './JianshuItem'
    export default {
        name: "Jianshu",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        components: {
            JianshuItem
        }
    }
</script>

<style scoped lang="scss">
.jianshu {
    &-banner {
        text-align: center;
        &-link {
            display: inline-flex;
            vertical-align: top;
        }
    }
}
</style>
