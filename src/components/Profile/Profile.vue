<template>
    <div class="profile">
        <img class="profile-avatar" :src="avatar" alt="avatar">
        <h1 class="profile-title">哈啰！我是海翔</h1>
        <h2 class="profile-subtitle">年轻人不要熬夜 :)</h2>
        <Social/>
    </div>
</template>

<script>
  import {getImageUrl} from "../BucketList/list"
  import Social from "./Social"

  export default {
    name: "Profile",
    data() {
      return {
        avatar: getImageUrl('avatar.jpg')
      }
    },
    components: {
      Social
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

        &-avatar {
            margin: 20px 0;
            width: 200px;
            border-radius: 50%;
        }

        &-title {
            font-size: 3.4em;
            font-weight: normal;
            letter-spacing: .1em;
            text-align: center;
        }

        &-subtitle {
            margin: 20px 0;
            font-size: 1.3em;
            font-weight: normal;
            letter-spacing: .1em;
            text-align: center;
        }

    }
</style>
