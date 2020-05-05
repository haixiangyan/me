<template>
    <div>
        <div class="list-item">
            <h1 class="list-item-title">
                <a :href="item.url">{{item.name}}</a>
                <Tag :color="item.status === 'todo' ? 'error' : 'success'">{{item.status}}</Tag>
            </h1>
            <img class="list-item-img" :src="item.avatar" alt="avatar">
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
.list-item {
    &-title {
        display: flex;
        align-items: center;
        a {
            margin-right: 8px;
        }
    }
}
</style>
