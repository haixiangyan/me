<template>
    <li class="star-tag">
        <i class="el-icon-star-on"></i>
        <span>{{stars}}</span>
    </li>
</template>

<script lang="ts">
  export default {
    props: ['stars']
  }
</script>

<style scoped lang="scss">
.star-tag {
    display: flex;
    align-items: center;
    color: #586069;
    font-size: 12px;
    i {
        transform: scale(1.4);
        margin-right: 4px;
    }
}
</style>
