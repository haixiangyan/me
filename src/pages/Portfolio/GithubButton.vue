<template>
    <button class="github-button">
        <slot></slot>
    </button>
</template>

<script lang="ts">
  export default {
  }
</script>

<style scoped lang="scss">
.github-button {
    display: inline-flex;
    align-items: center;
    padding: 3px 10px;
    font-size: 12px;
    line-height: 20px;
    vertical-align: middle;
    color: #24292e;
    background-color: #eff3f6;
    background-image: linear-gradient(-180deg,#fafbfc,#eff3f6 90%);
    border: 1px solid rgba(27,31,35,.2);
    border-radius: .25em;
    cursor: pointer;
    font-weight: 500;
    outline: none;

    &:hover {
        background-color: #e6ebf1;
        background-image: linear-gradient(-180deg,#f0f3f6,#e6ebf1 90%);
        background-position: -.5em;
        border-color: rgba(27,31,35,.35);
    }
}
</style>
