<template>
    <div class="profile">
        <h1 class="profile-h1">Hey, I'm Haixiang</h1>
        <h2 class="profile-h2">A fun guy and a front-end engineer</h2>
        <img class="profile-avatar" src="../../assets/avatar.jpg" alt="avatar">
        <div class="profile-social">
            <span class="profile-social-item">
                <a href="https://github.com/Haixiang6123">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-github"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <a href="https://www.jianshu.com/u/0340be4082b5">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jianshu"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <a href="https://medium.com/@haixiang6123">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-medium"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <tooltip content="haixiang6123@gmail.com">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-overwatch"></use>
                    </svg>
                </tooltip>
            </span>
        </div>
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
        font-size: 4em;
        font-weight: normal;
        letter-spacing: .1em;
        text-align: center;
    }
    &-h2 {
        margin: 20px 0;
        font-size: 2em;
        font-weight: normal;
        letter-spacing: .1em;
        text-align: center;
    }

    &-avatar {
        margin: 20px 0;
        width: 100px;
        border-radius: 50%;
    }

    &-social {
        margin-top: 40px;
        width: 100%;
        display: flex;
        justify-content: center;
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
}
</style>
