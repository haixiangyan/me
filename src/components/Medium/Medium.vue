<template>
    <div class="medium">
        <a class="medium-link" href="https://medium.com/@haixiang6123">
            <img src="../../assets/medium.jpeg" alt="medium">
        </a>
        <divider>All Posts</divider>
        <medium-item></medium-item>
    </div>
</template>

<script>
    import MediumItem from './MediumItem'
    export default {
        name: "Medium",
        components: {
            MediumItem
        }
    }
</script>

<style scoped lang="scss">
.medium {
    &-link {
        display: inline-flex;
        vertical-align: top;
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
