<template>
    <div class="medium">
        <div class="medium-left">
            <div>
                <img src="../assets/medium.jpg" alt="medium banner">
            </div>
            <div>
                <img src="../assets/medium.jpg" alt="medium banner">
            </div>
        </div>
        <div class="medium-right">

        </div>
    </div>
</template>

<script>
    export default {
        name: "Medium"
    }
</script>

<style scoped lang="scss">
.medium {
    position: fixed;
    bottom: -10vh;
    right: 0vw;
    height: 110vh;
    width: 40vw;
    display: flex;
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px #66C3A0;
    transform: rotate(30deg);
    transform-origin: right bottom;
    transition: all .5s;
    overflow: auto;
    background: #66C3A0;
    &:hover {
        z-index: 3;
        transform: scale(1.2) rotate(5deg);
    }
    &-right {
        width: 10%;
    }
    &-left {
        width: 90%;
        img {
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            width: 100%;
        }
    }
}
</style>