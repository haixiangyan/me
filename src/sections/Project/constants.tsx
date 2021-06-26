import * as React from "react";
import { Image } from "antd";
import {ItemProps} from "./Item";
// Overwatch UI
import overwatch from '../../assets/icons/overwatch.png'
import overwatchUI from '../../assets/images/overwatch-ui.png'

// links
import link from "../../assets/svgs/link.svg";
import github from "../../assets/svgs/github.svg";

// 技术栈
import vue from '../../assets/icons/vue.png';
import hljs from "../../assets/icons/hljs.png";
import js from "../../assets/icons/js.png";

const projects: ItemProps[] = [
  {
    logo: overwatch,
    title: 'Overwatch UI',
    content: <Image src={overwatchUI}/>,
    description: (<p>一个基于守望先锋样式的 UI 库，通过 Vue.js 开发。</p>),
    links: [
      {content: 'https://yanhaixiang.com/overwatch-ui-doc/#/', image: link},
      {content: 'https://github.com/Haixiang6123/overwatch-ui', image: github},
    ],
    techUsed: [
      {content: 'Vue.js', image: vue},
      {content: 'JavaScript', image: js},
    ]
  }
]

export default projects
