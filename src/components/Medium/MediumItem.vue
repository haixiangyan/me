<template>
    <div>
        <div class="medium-item">
            <img class="medium-item-img" :src="item.avatar" alt="avatar">
            <a class="medium-item-title" :href="item.url">{{item.title}}</a>
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
    border: 1px solid rgba(0, 0, 0, 0.1);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    &-img {
        width: 100%;
    }
    &-title {
        width: 100%;
        display: inline-flex;
        vertical-align: top;
        margin-top: 24.8px;
        color: rgba(0, 0, 0, 0.84);
        font-size: 3em;
        font-weight: 600;
        line-height: 1.12;
        letter-spacing: -0.022em;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: pre-wrap;
        &:hover {
            text-decoration: underline;
        }
    }
    &-desc {
        margin-top: 18px;
        letter-spacing: -0.004em;
        line-height: 1.58;
        font-size: 1.3em;
        color: rgba(0, 0, 0, 0.84);
        font-weight: 400;
    }
}
</style>
