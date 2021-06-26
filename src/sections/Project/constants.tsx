import * as React from "react";
import { Image } from "antd";
import {ItemProps} from "./Item";
import HighLight from "../../components/HighLight";

// Overwatch UI
import overwatchLogo from '../../assets/icons/overwatch-logo.png'
import overwatchUI from '../../assets/screenshots/overwatch-ui.png'

// Code Block Beautifier
import beautifierLogo from '../../assets/icons/beautifier.jpg'

// Guitar Editor
import guitarLogo from '../../assets/icons/guitar-logo.jpg'
import guitarEditor from '../../assets/screenshots/guitar-editor.png'

// 仿微信记账本
import weixin from '../../assets/svgs/weixin.svg';
import weixinCash from '../../assets/screenshots/weixin-cash.png'

// links
import link from "../../assets/svgs/link.svg";
import chromeExt from '../../assets/icons/chrome-ext.png'
import github from "../../assets/svgs/github.svg";

// 技术栈
import vue from '../../assets/icons/vue.png';
import react from '../../assets/icons/react.png';
import scss from '../../assets/icons/sass.png';
import css from '../../assets/icons/css.png';
import js from "../../assets/icons/js.png";
import npm from "../../assets/icons/npm.png";
import hljs from "../../assets/icons/hljs.png";
import styledComponents from '../../assets/icons/styled-components.png'

const projects: ItemProps[] = [
  {
    logo: overwatchLogo,
    title: 'Overwatch UI',
    content: <Image src={overwatchUI}/>,
    description: <p>一个基于 <HighLight>守望先锋</HighLight> 样式的 UI 库，通过 Vue.js 开发。</p>,
    links: [
      {content: 'https://yanhaixiang.com/overwatch-ui-doc/#/', image: link},
      {content: 'https://github.com/Haixiang6123/overwatch-ui', image: github},
    ],
    techUsed: [
      {content: 'Vue.js', image: vue},
      {content: 'Sass', image: scss},
      {content: 'JavaScript', image: js},
      {content: 'NPM', image: npm},
    ]
  },
  {
    logo: beautifierLogo,
    title: '代码高亮 - Chrome 插件',
    content: <iframe src="//player.bilibili.com/player.html?aid=40197852&bvid=BV1Nt411s7Gy&cid=70598189&page=1"
  scrolling="no" frameBorder="no" allowFullScreen/>,
    description: <p>本插件主要用于 <HighLight>高亮</HighLight> Medium 里文章的代码块，现在已经可以高亮所有带有 pre 元素的网站，如简书, 知乎等。</p>,
    links: [
      {content: 'https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn', image: chromeExt},
      {content: 'https://github.com/Haixiang6123/codeblock-beautifier', image: github},
    ],
    techUsed: [
      {content: 'JavaScript', image: js},
      {content: 'Highlight.js', image: hljs},
    ]
  },
  {
    logo: guitarLogo,
    title: '吉他谱编辑器',
    content: <Image src={guitarEditor}/>,
    description: (<p>使用 React.js 开发的吉他谱编辑器，在线编辑和生成吉他谱。</p>),
    links: [
      {content: 'https://yanhaixiang.com/guitar-editor/#/', image: link},
      {content: 'https://github.com/Haixiang6123/guitar-editor', image: github},
    ],
    techUsed: [
      {content: 'React.js', image: react},
      {content: 'CSS', image: css},
      {content: 'JavaScript', image: js},
    ]
  },
  {
    logo: weixin,
    title: '仿微信记账本',
    content: <Image src={weixinCash}/>,
    description: (<p>用 React.js + TypeScript 写的一个仿微信记账本。</p>),
    links: [
      {content: 'https://yanhaixiang.com/weixin-cash/#/', image: link},
      {content: 'https://github.com/Haixiang6123/weixin-cash', image: github},
    ],
    techUsed: [
      {content: 'React.js', image: react},
      {content: 'Styled-Components', image: styledComponents},
      {content: 'Type', image: js},
    ]
  }
]

export default projects
