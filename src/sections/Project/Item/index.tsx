import * as React from "react"
import {FC, ReactChild} from "react"
import {Image, Tooltip} from "antd";
import styles from './styles.module.scss'

interface Image {
  image: string;
  content: string;
}

export interface ItemProps {
  logo: string;
  title: string | ReactChild;
  content: string | ReactChild;
  description: string | ReactChild;
  links: Image[];
  techUsed: Image[];
}

const Item: FC<ItemProps> = (props) => {
  const {logo, title, content, description, links, techUsed} = props

  return (
    <li className={styles.item}>
      <div className={styles.container}>
        <img className={styles.logo} src={logo} alt="logo"/>

        <h4 className={styles.title}>{title}</h4>

        <div className={styles.content}>{content}</div>

        <div className={styles.description}>{description}</div>

        <div className={styles.links}>
          {links.map(link => (
            <a key={link.content} href={link.content} target="_blank">
              <img src={link.image} alt=""/>
            </a>
          ))}
        </div>

        <div className={styles.techUsed}>
          <h4>技术栈</h4>
          <ul>
            {techUsed.map(tech => (
              <li>
                <Tooltip placement="bottom" title={tech.content} color="black">
                  <img src={tech.image} alt="techUsed"/>
                </Tooltip>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  )
}

export default Item
