<template>
    <li class="lang-tag">
        <span class="marker" :style="{background: getMakerColor(lang)}"></span>
        <span>{{lang}}</span>
    </li>
</template>

<script lang="ts">
  const markerColor = {
    JavaScript: '#f1e05a',
    TypeScript: '#2b7489',
    React: '#45D8FF',
    Vue: '#2c3e50',
    HTML: '#e34c26',
    Angular: '#DD0B31',
    Python: '#2b7489',
    Chrome: '#1B73E8'
  }

  export default {
    props: ['lang'],
    methods: {
      getMakerColor(lang) {
        return markerColor[lang]
      }
    },
  }
</script>

<style scoped lang="scss">
    .lang-tag {
        margin-right: 14px;
        font-size: 12px;
        color: #586069;
        display: flex;
        align-items: center;

        .marker {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            border-radius: 50%;
            margin-right: 4px;
        }
    }
</style>
