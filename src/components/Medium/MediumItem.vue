<template>
    <div class="medium-item">
        <img class="medium-item-img" src="https://miro.medium.com/fit/c/1400/420/1*Ht8T-vqbqy5iG7FzNQGjFA.png" alt="">
        <a class="medium-item-title" href="">Vue: Two-Way Binding</a>
        <p class="medium-item-desc">
            Two-way binding is so popular in Vue.js. Many developers love to use v-model
            directive in their Web APP. Talking about how…
        </p>
    </div>
</template>

<script>
    export default {
        name: "MediumItem"
    }
</script>

<style scoped lang="scss">
.medium-item {
    padding: 30px;
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    border: 1px solid rgba(0, 0, 0, 0.1);
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