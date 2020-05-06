<template>
    <div class="profile">
        <img class="profile-avatar" :src="avatar" alt="avatar">
        <h1 class="profile-h1">哈啰！我是海翔</h1>
        <h2 class="profile-h2">年轻人不要熬夜 :)</h2>
        <div class="profile-social">
            <span class="profile-social-item">
                <a href="https://github.com/Haixiang6123" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-github"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <el-tooltip content="haixiang6123@gmail.com" effect="dark" placement="bottom">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-mail"></use>
                    </svg>
                </el-tooltip>
            </span>
            <span class="profile-social-item">
                <a href="https://www.jianshu.com/u/0340be4082b5" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-jianshu"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <a href="https://medium.com/@haixiang6123" target="_blank">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-medium"></use>
                    </svg>
                </a>
            </span>
            <span class="profile-social-item">
                <el-tooltip content="Monster#14255" effect="dark" placement="bottom">
                    <svg class="icon" aria-hidden="true">
                        <use xlink:href="#icon-overwatch"></use>
                    </svg>
                </el-tooltip>
            </span>
        </div>
    </div>
</template>

<script>
    import {getImageUrl} from "../BucketList/list"

    export default {
        name: "Profile",
        data() {
          return {
            avatar: getImageUrl('avatar.jpg')
          }
        }
    }
</script>

<style scoped lang="scss">
.profile {
    margin-top: -70px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    height: 85vh;
    &-h1 {
        font-size: 3.5em;
        font-weight: normal;
        letter-spacing: .1em;
        text-align: center;
    }
    &-h2 {
        margin: 20px 0;
        font-size: 1.5em;
        font-weight: normal;
        letter-spacing: .1em;
        text-align: center;
    }

    &-avatar {
        margin: 20px 0;
        width: 180px;
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
            height: 24px;
            width: 24px;
        }
    }
}
</style>
