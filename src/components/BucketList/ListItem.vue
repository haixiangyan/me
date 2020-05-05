<template>
    <li>
        <div class="list-item">
            <h1 class="list-item-title">
                <span v-if="item.status === 'todo'">{{item.name}}</span>
                <a v-else :href="item.url">{{item.name}}</a>

                <Tag :color="item.status === 'todo' ? 'error' : 'success'">{{item.status}}</Tag>
            </h1>
            <Carousel v-if="item.imgs" loop>
                <CarouselItem :key="img" v-for="img in item.imgs">
                    <img :src="img" alt="img">
                </CarouselItem>
            </Carousel>
        </div>
        <divider></divider>
    </li>
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
        a, span {
            margin-right: 8px;
        }
    }
}
</style>
