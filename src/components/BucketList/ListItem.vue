<template>
    <li>
        <div class="list-item">
            <h1 class="list-item-title">
                <span v-if="item.status === 'todo'">{{item.name}}</span>
                <a v-else :href="item.url">{{item.name}}</a>

                <Tag :color="item.status === 'todo' ? 'error' : 'success'">{{item.status}}</Tag>
            </h1>
            <Carousel v-if="item.imgs" :height="400" dots="none">
                <CarouselItem class="list-item-img-wrapper" :key="img" v-for="img in item.imgs">
                    <img class="list-item-img" :src="img" alt="img">
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
    &-img {
        &-wrapper {
            text-align: center;
        }
        max-width: 100%;
        max-height: 100%;
    }
}
</style>
