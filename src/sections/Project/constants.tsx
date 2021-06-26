import * as React from "react";
import { Image } from "antd";
import {ItemProps} from "./Item";
import HighLight from "../../components/HighLight";

// Overwatch UI
import overwatchLogo from '../../assets/icons/overwatchLogo.png'
import overwatchUI from '../../assets/screenshots/overwatch-ui.png'

// Guitar Editor
import guitarLogo from '../../assets/icons/guitarLogo.jpg'
import guitarEditor from '../../assets/screenshots/guitar-editor.png'

// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";

// 技术栈
import vue from '../../assets/icons/vue.png';
import react from '../../assets/icons/react.png';
import js from "../../assets/icons/js.png";

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
      {content: 'JavaScript', image: js},
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
      {content: 'JavaScript', image: js},
    ]
  }
]

export default projects
