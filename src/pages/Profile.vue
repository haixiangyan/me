<template>
    <div class="profile">
        <div class="intro">
            <h1>我</h1>
            <p>本科毕业于东北大学，研究生毕业于加州大学尔湾分校，所学专业皆为计算机。目前在腾讯担任前端工程师。</p>
        </div>

        <Social/>
    </div>
</template>

<script>
  import Social from "../components/Social"

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

        .intro {
            padding-bottom: 24px;
            border-bottom: 1px dashed #eee;
        }
    }
</style>
