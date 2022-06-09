import React from "react";
import { Image } from "antd";
import { ProjectItem } from "./Item";
import HighLight from "../../components/HighLight";

// jest-tutorial
import jestTutorialScreenshot from "../../assets/screenshots/jest-tutorial.png";

// linter-guide
import linterGuideScreenshot from "../../assets/screenshots/linter-guide.png";

// 企业微信
import qywx from "../../assets/icons/qywx.png";
import qywxGithub from "../../assets/screenshots/qywx-github.png";
import qiankun from "../../assets/icons/qiankun.png";
import express from "../../assets/icons/express.png";

// 造轮子
import npmWheelScreenshot from "../../assets/screenshots/npm-wheel.png";

// OverWatch UI
import overwatchLogo from "../../assets/icons/overwatch-logo.png";
import overwatchUI from "../../assets/screenshots/overwatch-ui.png";

// Code Block Beautifier
import beautifierLogo from "../../assets/icons/beautifier.jpg";

// Guitar Editor
import guitarLogo from "../../assets/icons/guitar-logo.jpg";
import guitarEditor from "../../assets/screenshots/guitar-editor.png";

// 仿微信记账本
import weixin from "../../assets/svgs/weixin.svg";
import weixinCash from "../../assets/screenshots/weixin-cash.png";

// lintcode
import leetcode from "../../assets/icons/leetcode.png";
import lintcode from "../../assets/svgs/lintcode.svg";
import lintcodeScreenShot from "../../assets/screenshots/lintcode.png";

// tenet
import tenet from "../../assets/icons/tenet.webp";
import vscode from "../../assets/icons/vscode.webp";
import tenetScreenshot from "../../assets/screenshots/tenet.gif";

// node-autodoc
import nodeAutodoc from "../../assets/screenshots/node-autodoc.png";

// 技术栈
import vue from "../../assets/icons/vue.png";
import react from "../../assets/icons/react.png";
import scss from "../../assets/icons/sass.png";
import css from "../../assets/icons/css.png";
import js from "../../assets/icons/js.png";
import ts from "../../assets/icons/ts.png";
import npm from "../../assets/icons/npm.png";
import hljs from "../../assets/icons/hljs.png";
import python from "../../assets/icons/python.png";
import styledComponents from "../../assets/icons/styled-components.png";
import babel from "../../assets/icons/babel.png";
import webpack from "../../assets/icons/webpack.png";
import karma from "../../assets/icons/karma.png";
import mocha from "../../assets/icons/mocha.png";
import sinon from "../../assets/icons/sinon.png";
import travis from "../../assets/icons/travis.webp";
import jest from "../../assets/icons/jest.png";
import eslint from "../../assets/icons/eslint.png";

// links
import link from "../../assets/svgs/link.svg";
import chromeExt from "../../assets/icons/chrome-ext.png";
import github from "../../assets/svgs/github.svg";
import juejin from "../../assets/svgs/juejin.svg";

// 可视项目
export const projects: ProjectItem[] = [
  {
    logo: jest,
    title: "Jest 实践指南",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/jest-tutorial?style=flat-square",
      "https://coveralls.io/repos/github/haixiangyan/jest-tutorial-example/badge.svg?branch=main",
    ],
    content: <Image src={jestTutorialScreenshot} />,
    description: (
      <div>
        <p>
          Jest 上手 <HighLight isDark>完全指南</HighLight>， 从 0 到 1
          学会前端测试的技巧、思路、策略和套路。
        </p>
      </div>
    ),
    links: [
      {
        content: "https://github.yanhaixiang.com/jest-tutorial/",
        image: link,
      },
    ],
    techUsed: [
      { content: "VuePress", image: vue },
      { content: "Jest", image: jest },
    ],
  },
  {
    logo: eslint,
    title: "Linter 上手指南",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/linter-tutorial?style=flat-square",
    ],
    content: <Image src={linterGuideScreenshot} />,
    description: (
      <div>
        <p>
          前端最全
          <HighLight isDark>解决方案</HighLight>的 Linter 上手指南。
        </p>
      </div>
    ),
    links: [
      {
        content: "https://github.yanhaixiang.com/linter-tutorial/",
        image: link,
      },
    ],
    techUsed: [
      { content: "VuePress", image: vue },
      { content: "Linter", image: eslint },
    ],
  },
  {
    logo: qywx,
    title: "企业微信侧边栏开发指南",
    content: <Image src={qywxGithub} />,
    badges: [
      "https://img.shields.io/github/stars/wecom-sidebar?style=flat-square",
    ],
    description: (
      <div>
        <p>
          提供开发企业微信侧边栏的一些
          <HighLight isDark>解决方案</HighLight>和
          <HighLight isDark>开发模板</HighLight>。
        </p>
      </div>
    ),
    links: [
      { content: "https://wecom-sidebar.github.io/", image: link },
      { content: "https://github.com/wecom-sidebar", image: github },
    ],
    techUsed: [
      { content: "TypeScript", image: ts },
      { content: "React", image: react },
      { content: "Express", image: express },
      { content: "Qiankun", image: qiankun },
    ],
  },
  {
    logo: npm,
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/make-wheels?style=flat-square",
    ],
    title: "一天学一个轮子",
    content: <Image src={npmWheelScreenshot} />,
    description: (
      <div>
        <p>
          这本小书会带你造 10 个非常实用的
          <HighLight isDark>npm 库 📦</HighLight>。
        </p>
        <p>
          每篇文章里的对每个轮子都会从简单的需求开始，首先做一个最 Low
          的解决方法出来， 然后慢慢优化它，最后推导成{" "}
          <HighLight isDark>源码</HighLight> 的样子。整个从 0 到 1
          的设计与思考过程会完整地呈现给读者。
        </p>
      </div>
    ),
    links: [
      {
        content: "https://github.com/haixiangyan/make-wheels",
        image: link,
      },
      {
        content: "https://juejin.cn/column/6965512526624718856",
        image: juejin,
      },
    ],
    techUsed: [
      { content: "NPM", image: npm },
      { content: "TypeScript", image: ts },
      { content: "JavaScript", image: js },
      { content: "React.js", image: react },
    ],
  },
  {
    logo: overwatchLogo,
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/overwatch-ui?style=flat-square",
      "https://img.shields.io/npm/dm/overwatch-ui?style=flat-square",
    ],
    title: "Overwatch UI",
    content: <Image src={overwatchUI} />,
    description: (
      <p>
        一个基于
        <HighLight isDark>守望先锋</HighLight> 样式的 UI 库，通过 Vue.js 开发。
      </p>
    ),
    links: [
      {
        content: "https://github.yanhaixiang.com/overwatch-ui-doc/#/",
        image: link,
      },
      {
        content: "https://github.com/haixiangyan/overwatch-ui",
        image: github,
      },
    ],
    techUsed: [
      { content: "Vue.js", image: vue },
      { content: "Sass", image: scss },
      { content: "JavaScript", image: js },
      { content: "NPM", image: npm },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
      { content: "Karma", image: karma },
      { content: "Sinon", image: sinon },
      { content: "Mocha", image: mocha },
      { content: "Travis CI", image: travis },
    ],
  },
  {
    logo: beautifierLogo,
    badges: [
      "https://img.shields.io/chrome-web-store/users/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square",
      "https://img.shields.io/github/stars/haixiangyan/codeblock-beautifier?style=flat-square",
      "https://img.shields.io/chrome-web-store/stars/gpcjjddhdnilcbddlonlfgdbejfboonn?style=flat-square",
    ],
    title: "代码高亮 - Chrome 插件",
    content: (
      <iframe
        title="codeblock-beautifier"
        src="//player.bilibili.com/player.html?aid=40197852&bvid=BV1Nt411s7Gy&cid=70598189&page=1"
        scrolling="no"
        frameBorder="no"
        allowFullScreen
      />
    ),
    description: (
      <p>
        一个 <HighLight isDark>Chrome 插件</HighLight>
        。主要用于高亮 Medium 里文章的代码块， 现在已经可以高亮所有带有 pre
        元素的网站，如简书, 知乎等。
      </p>
    ),
    links: [
      {
        content:
          "https://chrome.google.com/webstore/detail/code-block-beautifier/gpcjjddhdnilcbddlonlfgdbejfboonn",
        image: chromeExt,
      },
      {
        content: "https://github.com/haixiangyan/codeblock-beautifier",
        image: github,
      },
    ],
    techUsed: [
      { content: "JavaScript", image: js },
      { content: "Highlight.js", image: hljs },
    ],
  },
  {
    logo: guitarLogo,
    title: "吉他谱编辑器",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/guitar-tabs-editor?style=flat-square",
    ],
    content: <Image src={guitarEditor} />,
    description: (
      <div>
        <p>
          使用 React.js 开发的
          <HighLight isDark>吉他谱编辑器</HighLight>
          ，在线编辑和生成吉他谱。
        </p>
        <p>
          还能提供自动生成和弦的
          <HighLight isDark>React 组件</HighLight>
          ，一键生成和弦 SVG。
        </p>
      </div>
    ),
    links: [
      {
        content: "https://github.yanhaixiang.com/guitar-tabs-editor/#/",
        image: link,
      },
      {
        content: "https://github.com/haixiangyan/guitar-tabs-editor",
        image: github,
      },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "CSS", image: css },
      { content: "JavaScript", image: js },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    logo: leetcode,
    title: "LeetCode/LintCode 题解",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/leetcode-python?style=flat-square",
    ],
    content: <Image src={lintcodeScreenShot} />,
    description: (
      <p>
        难受一批的
        <HighLight isDark>LeetCode/LintCode 题解</HighLight>
        ，使用 Python 解题。
      </p>
    ),
    links: [
      { content: "https://www.lintcode.com/user/Haixiang", image: lintcode },
      { content: "https://leetcode.com/HaixiangYan/", image: leetcode },
      {
        content: "https://github.com/haixiangyan/leetcode-python",
        image: github,
      },
    ],
    techUsed: [{ content: "Python", image: python }],
  },
  {
    logo: weixin,
    title: "仿微信记账本",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/weixin-cash?style=flat-square",
    ],
    content: <Image src={weixinCash} />,
    description: (
      <div>
        <p>
          用<HighLight isDark>React.js + TypeScript + ECharts </HighLight>{" "}
          写的一个仿微信记账本。
        </p>
        <p>没有花里胡哨的操作，仅仅是一个记账本 😋。</p>
      </div>
    ),
    links: [
      { content: "https://github.yanhaixiang.com/weixin-cash/#/", image: link },
      { content: "https://github.com/haixiangyan/weixin-cash", image: github },
    ],
    techUsed: [
      { content: "React.js", image: react },
      { content: "Styled-Components", image: styledComponents },
      { content: "TypeScript", image: ts },
      { content: "Babel", image: babel },
      { content: "Webpack", image: webpack },
    ],
  },
  {
    logo: tenet,
    title: "Tenet",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/tenet?style=flat-square",
      "https://img.shields.io/visual-studio-marketplace/i/HaixiangYan.tenet?style=flat-square",
      "https://img.shields.io/visual-studio-marketplace/stars/HaixiangYan.tenet",
    ],
    content: <Image src={tenetScreenshot} />,
    description: (
      <div>
        <p>
          最近看《信条》没怎么看懂，到是觉得里面“逆向思维”的有点意思， 想试试用{" "}
          <HighLight isDark>“逆向思维”</HighLight> 来写代码会怎么样
        </p>
        <p>
          哈哈哈哈，然后造了一个沙雕
          <HighLight isDark> VsCode 插件 - tenet</HighLight>。
        </p>
      </div>
    ),
    links: [
      {
        content:
          "https://marketplace.visualstudio.com/items?itemName=HaixiangYan.tenet",
        image: vscode,
      },
      { content: "https://github.com/haixiangyan/tenet", image: github },
    ],
    techUsed: [{ content: "TypeScript", image: ts }],
  },
  {
    logo: jest,
    title: "node-autodoc",
    badges: [
      "https://img.shields.io/github/stars/haixiangyan/node-autodoc?style=flat-square",
      "https://coveralls.io/repos/github/Haixiang6123/node-autodoc/badge.svg?branch=main",
      "https://img.shields.io/npm/dm/node-autodoc?style=flat-square",
    ],
    content: <Image src={nodeAutodoc} />,
    description: (
      <div>
        <p>
          一个
          <HighLight isDark>测试驱动文档</HighLight> 的生成器。灵感来源于 Ruby
          的 autodoc 和 JavaScript 社区的 supertest。
        </p>
        <p>希望通过测试来保证 API 文档的正确性。</p>
      </div>
    ),
    links: [
      { content: "https://www.npmjs.com/package/node-autodoc", image: npm },
      {
        content: "https://github.com/haixiangyan/node-autodoc",
        image: github,
      },
    ],
    techUsed: [
      { content: "Eslint", image: eslint },
      { content: "JavaScript", image: js },
      { content: "Jest", image: jest },
      { content: "Travis CI", image: travis },
    ],
  },
];

// iframe 里的项目
export const moreProjects = [
  {
    title: "香蕉",
    url: "https://github.yanhaixiang.com/banana/",
  },
  {
    title: "皮卡丘",
    url: "https://github.yanhaixiang.com/pikachu/",
  },
  {
    title: "立方体",
    url: "https://github.yanhaixiang.com/cube/",
  },
  {
    title: "小画板",
    url: "https://github.yanhaixiang.com/sketch-book/",
  },
];

// 瀑布流的列数
export const mdPx = 768;
export const lgPx = 992;
