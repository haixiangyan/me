<template>
    <div class="portfolio">
        <img class="portfolio-img" src="../../assets/portfolio.png" alt="portfolio">
        <divider>My Portfolio</divider>
        <medium-item v-for="item in portfolio" :item="item"></medium-item>
    </div>
</template>

<script>
    import MediumItem from '../Medium/MediumItem'
    export default {
        name: "Portfolio",
        data() {
            return {
                selected: 0,
                portfolio: [
                    {
                        title: 'Overwatch UI',
                        desc: 'A UI library of game Overwatch, built with Vue.js',
                        avatar: 'https://i.loli.net/2019/03/08/5c821091ca93a.jpg',
                        url: 'https://haixiang6123.github.io/overwatch-ui-doc/#/'
                    },
                    {
                        title: 'Code Block Beautifier',
                        desc: 'A chrome extension for beautifying code blocks in any websites',
                        avatar: 'https://i.loli.net/2019/03/08/5c821092432d4.jpg',
                        url: 'https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn'
                    },
                    {
                        title: 'Guitar Tabs Editor',
                        desc: 'A portable guitar editor is coded based on react.js, inspired by Markdown and LaTex',
                        avatar: 'https://i.loli.net/2019/03/08/5c82109281f5c.jpg',
                        url: 'https://haixiang6123.github.io/guitar-editor/#/'
                    },
                    {
                        title: 'Sketch Book',
                        desc: 'An online sketch book for drawing and writing notes',
                        avatar: 'https://i.loli.net/2019/03/08/5c8210930b274.jpg',
                        url: 'https://haixiang6123.github.io/sketch-book/'
                    },
                ]
            }
        },
        components: {
            MediumItem
        }
    }
</script>

<style scoped lang="scss">
.portfolio {
    &-img {
        width: 100%;
    }
    &-item {
        width: 100%;
        img {
            width: 100%;
        }
    }
}
</style>
