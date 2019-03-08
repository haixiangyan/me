<template>
    <div class="jianshu">
        <div class="jianshu-banner">
            <a class="jianshu-banner-link" href="https://www.jianshu.com/u/0340be4082b5">
                <img src="../../assets/jianshu.png" alt="jianshu">
            </a>
        </div>
        <divider>所有博文</divider>
        <jianshu-item v-for="item in db" :item="item" :key="item.title"></jianshu-item>
    </div>
</template>

<script>
    import db from './jianshu-db'
    import JianshuItem from './JianshuItem'
    export default {
        name: "Jianshu",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        },
        data() {
            return {
                db
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
