import * as React from "react"
import {AllHTMLAttributes, FC} from "react"
import { Image, Tooltip } from "antd";
import styles from './styles.module.scss'

import link from '../../../assets/svgs/link.svg'
import github from '../../../assets/svgs/github.svg'
import js from '../../../assets/icons/js.png'
import hljs from '../../../assets/icons/hljs.png'

interface Image {
  image: string;
  content: string;
}

interface Props extends AllHTMLAttributes<HTMLDivElement> {
  title: string;
  links: Image[];
  techUsed: Image[];
  logo?: string;
  content?: string;
  description?: string;
}

const Item: FC = (props) => {
  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <img className={styles.logo} src="https://www.macbaler.me/img/webrtclogocropW.b95e2850.png" alt="logo"/>

        <h4 className={styles.title}>WebRtc Checker</h4>

        <div className={styles.content}>
          <Image src="https://www.macbaler.me/img/ss.d7961b29.png"/>
        </div>

        <div className={styles.description}>
          <p>
            Created while working at Weblio in Japan. Helps users test & troubleshoot their video/audio devices, as well as video/audio bandwidth settings. Allowed preemptive test of setup before entering online lesson room. Utilized a fork of PeerJS and manipulated the MediaStream API to create a WebRTC video call with oneself.
          </p>
        </div>

        <div className={styles.links}>
          <a href="#" target="_blank">
            <img src={link} alt=""/>
          </a>
          <a href="#" target="_blank">
            <img src={github} alt=""/>
          </a>
        </div>

        <div className={styles.techUsed}>
          <h4>技术栈</h4>
          <ul>
            <li>
              <Tooltip placement="bottom" title="JavaScript" color="black">
                <img src={js} alt="techUsed"/>
              </Tooltip>
            </li>
            <li>
              <Tooltip placement="bottom" title="highlight.js" color="black">
                <img src={hljs} alt="techUsed"/>
              </Tooltip>
            </li>
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Item
