<template>
    <div class="profile">
        <h1 style="margin-top: 32px">找到我</h1>
        <Social/>
    </div>
</template>

<script>
  import Social from "./Social"

  export default {
    name: "Profile",
    data() {
      return {
      }
    },
    components: {
      Social
    }
  }
</script>

<style scoped lang="scss">
    .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        border-radius: 10px;

        &-title {
            margin-top: 8px;
            font-weight: normal;
            text-align: center;
        }

    }
</style>
