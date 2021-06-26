import * as React from "react";
import { Image } from "antd";
import {ItemProps} from "./Item";
import HighLight from "../../components/HighLight";

// 造轮子
import npmWheelScreenshot from '../../assets/screenshots/npm-wheel.png';

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

// lintcode
import leetcode from '../../assets/icons/leetcode.png';
import lintcode from '../../assets/svgs/lintcode.svg'
import lintcodeScreenShot from '../../assets/screenshots/lintcode.png'

// tenet
import tenet from '../../assets/icons/tenet.webp'
import vscode from '../../assets/icons/vscode.webp';
import tenetScreenshot from '../../assets/screenshots/tenet.gif';

// 技术栈
import vue from '../../assets/icons/vue.png';
import react from '../../assets/icons/react.png';
import scss from '../../assets/icons/sass.png';
import css from '../../assets/icons/css.png';
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import npm from "../../assets/icons/npm.png";
import hljs from "../../assets/icons/hljs.png";
import python from '../../assets/icons/python.png';
import styledComponents from '../../assets/icons/styled-components.png'
import babel from '../../assets/icons/babel.png'
import webpack from '../../assets/icons/webpack.png'

// links
import link from "../../assets/svgs/link.svg";
import chromeExt from '../../assets/icons/chrome-ext.png'
import github from "../../assets/svgs/github.svg";
import juejin from '../../assets/svgs/juejin.svg';
import zhihu from '../../assets/svgs/zhihu.svg';

const projects: ItemProps[] = [
  {
    logo: npm,
    title: '一天学习一个 npm 轮子，十天后变成轮子哥',
    content: <Image src={npmWheelScreenshot}/>,
    description: <p>这本小书会带你造 10 个非常实用的 npm 库 📦</p>,
    links: [
      {content: 'https://www.zhihu.com/column/c_1371023921513472000', image: zhihu},
      {content: 'https://juejin.cn/column/6965512526624718856', image: juejin},
      {content: 'https://github.com/Haixiang6123/one-day-one-npm-lib', image: github},
    ],
    techUsed: [
      {content: 'NPM', image: npm},
      {content: 'JavaScript', image: js},
      {content: 'React.js', image: react},
    ]
  },
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
      {content: 'Babel', image: babel},
      {content: 'Webpack', image: webpack},
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
      {content: 'Babel', image: babel},
      {content: 'Webpack', image: webpack},
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
      {content: 'TypeScript', image: ts},
      {content: 'Babel', image: babel},
      {content: 'Webpack', image: webpack},
    ]
  },
  {
    logo: leetcode,
    title: 'LeetCode/LintCode 题解',
    content: <Image src={lintcodeScreenShot}/>,
    description: (<p>难受一批的 LeetCode/LintCode 题解，使用 Python 解题。</p>),
    links: [
      {content: 'https://www.lintcode.com/user/Haixiang', image: lintcode},
      {content: 'https://leetcode.com/HaixiangYan/', image: leetcode},
      {content: 'https://github.com/Haixiang6123/leetcode-python', image: github},
    ],
    techUsed: [
      {content: 'Python', image: python},
    ]
  },
  {
    logo: tenet,
    title: 'Tenet',
    content: <Image src={tenetScreenshot}/>,
    description: (<p>最近看《信条》没怎么看懂，到是觉得里面“逆向思维”的有点意思，想试试用“逆向思维”来写代码会怎么样，哈哈哈哈，然后造了一个沙雕 VsCode 插件 - tenet。</p>),
    links: [
      {content: 'https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet', image: vscode},
      {content: 'https://github.com/Haixiang6123/tenet', image: github},
    ],
    techUsed: [
      {content: 'TypeScript', image: ts},
    ]
  },
]

export default projects
