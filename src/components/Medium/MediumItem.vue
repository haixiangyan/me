<template>
    <div>
        <div class="medium-item">
            <img class="medium-item-img" :src="item.avatar" alt="avatar">
            <a class="medium-item-title" href="">{{item.title}}</a>
            <p class="medium-item-desc">{{item.desc}}</p>
        </div>
        <divider></divider>
    </div>
</template>

<script>
    export default {
        name: "MediumItem",
        props: {
            item: {
                type: Object
            }
        }
    }
</script>

<style scoped lang="scss">
.medium-item {
    padding: 30px;
    border-radius: 5px;
    &-img {
        width: 100%;
    }
    &-title {
        display: inline-flex;
        vertical-align: top;
        margin-top: 24.8px;
        color: rgba(0, 0, 0, 0.84);
        font-size: 34px;
        font-weight: 600;
        line-height: 1.12;
        letter-spacing: -0.022em;
        &:hover {
            text-decoration: underline;
        }
    }
    &-desc {
        margin-top: 18px;
        letter-spacing: -0.004em;
        line-height: 1.58;
        font-size: 18px;
        color: rgba(0, 0, 0, 0.84);
        font-weight: 400;
    }
}
</style>