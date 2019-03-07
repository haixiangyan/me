<template>
    <div class="profile">
        <h1 class="profile-h1">Hey, I'm Haixiang</h1>
        <h2 class="profile-h2">A fun guy and a front-end engineer</h2>
        <img class="profile-avatar" src="../assets/avatar.jpg" alt="avatar">
    </div>
</template>

<script>
    export default {
        name: "Profile"
    }
</script>

<style scoped lang="scss">
.profile {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 85vh;
    &-h1 {
        font-size: 5em;
        font-weight: normal;
        letter-spacing: .1em;
    }
    &-h2 {
        margin: 20px 0;
        font-size: 2em;
        font-weight: normal;
        letter-spacing: .1em;
    }

    &-avatar {
        width: 30%;
        border-radius: 50%;
    }
}
</style>
