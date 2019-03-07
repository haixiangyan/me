<template>
    <div class="jianshu">
        <div class="jianshu-left">
            
        </div>
        <div class="jianshu-right">
            <div>
                <img src="../assets/jianshu.jpg" alt="jianshu banner">
            </div>
            <div>
                <img src="../assets/jianshu.jpg" alt="jianshu banner">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Jianshu",
        props: {
            isActive: {
                type: Boolean,
                default: false
            }
        }
    }
</script>

<style scoped lang="scss">
.jianshu {
    position: fixed;
    bottom: -10vh;
    left: 0vw;
    height: 110vh;
    width: 40vw;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px #EA7058;
    transform: rotate(-30deg);
    transform-origin: left bottom;
    transition: all .5s;
    overflow: auto;
    background: #EA7058;
    &:hover {
        z-index: 3;
        transform: scale(1.2) rotate(-5deg);
    }
    &-left {
        width: 10%;
        height: 110vh;
    }
    &-right {
        width: 90%;
        img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            width: 100%;
        }
    }
}
</style>