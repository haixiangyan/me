<template>
    <div class="profile">
        <img src="../assets/avatar.jpg" alt="">
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped lang="scss">
.profile {
    position: fixed;
    left: 50%;
    width: 50vw;
    transform: translate(-50%, 0);
    border-radius: 10px;
    box-shadow: 0px 0px 24px 0px grey;
    img {
        width: 100%;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }
}
</style>