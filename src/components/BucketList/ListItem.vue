<template>
    <li>
        <div class="list-item">
            <h2 class="list-item-title">
                <span v-if="item.status === 'todo'">{{item.name}}</span>
                <a v-else @click="show = !show">{{item.name}}</a>

                <Tag :color="item.status === 'todo' ? 'error' : 'success'">{{item.status}}</Tag>
            </h2>
            <Carousel v-if="show && item.imgs" :height="400" dots="none">
                <CarouselItem class="list-item-img-wrapper" :key="img" v-for="img in item.imgs">
                    <img class="list-item-img" :src="img" alt="img">
                </CarouselItem>
            </Carousel>
        </div>
    </li>
</template>

<script>
    export default {
        name: "MediumItem",
        props: {
            item: {
                type: Object
            }
        },
        data() {
          return {
            show: false
          }
        }
    }
</script>

<style scoped lang="scss">
.list-item {
    margin: 12px 0;
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
