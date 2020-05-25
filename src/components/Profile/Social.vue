<template>
    <div class="social">
        <span class="social-item">
            <a href="https://github.com/Haixiang6123" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-github"></use>
                </svg>
            </a>
        </span>
        <span class="social-item">
            <a href="mailto:haixiang6123@gmail.com" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-mail"></use>
                </svg>
            </a>
        </span>
        <span class="social-item">
            <a href="https://www.jianshu.com/u/0340be4082b5" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-jianshu"></use>
                </svg>
            </a>
        </span>
        <span class="social-item">
            <a href="https://medium.com/@haixiang6123" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-medium"></use>
                </svg>
            </a>
        </span>
        <span class="social-item">
            <a href="https://playoverwatch.com/en-us/career/pc/Monster-14255" target="_blank">
                <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-overwatch"></use>
                </svg>
            </a>
        </span>
    </div>
</template>

<script lang="ts">
  export default {}
</script>

<style scoped lang="scss">
    .social {
        margin-top: 12px;
        width: 100%;
        display: flex;
        align-items: center;

        &-item {
            & + & {
                margin-left: 40px;
            }
        }

        svg {
            height: 20px;
            width: 20px;
        }
    }
</style>
