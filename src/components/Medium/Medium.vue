<template>
    <div class="medium">
        <a class="medium-link" href="https://medium.com/@haixiang6123">
            <img src="../../assets/medium.jpeg" alt="medium">
        </a>
        <divider>All Posts</divider>
        <medium-item v-for="item in db" :item="item" :key="item.title"></medium-item>
    </div>
</template>

<script>
    import db from './medium-db'
    import MediumItem from './MediumItem'
    export default {
        name: "Medium",
        data() {
            return {
                db
            }
        },
        components: {
            MediumItem
        }
    }
</script>

<style scoped lang="scss">
.medium {
    &-link {
        display: inline-block;
        vertical-align: top;
        img {
            width: 100%;
        }
    }
}
</style>
