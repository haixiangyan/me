import * as React from "react"
import {AllHTMLAttributes, FC} from "react"
import styles from './styles.module.scss'
import {Tooltip} from "antd"

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

const Item: FC<Props> = (props) => {
  const {title, links, techUsed, logo, content, description} = props

  return (
    <li className={styles.item}>
      {logo && <img src={logo} alt="logo"/>}

      <h4 className={styles.title}>{title}</h4>

      <div className={styles.content}>{content}</div>

      <div className={styles.description}>{description}</div>

      <ul className={styles.links}>
        {links.map(link => (
          <li>
            <a href={link.content}>
              <img src={link.image} alt="icon"/>
            </a>
          </li>
        ))}
      </ul>

      <div className={styles.techUsed}>
        <h4>技术栈</h4>
        <ul>
          {techUsed.map(tech => (
            <li>
              <img src={tech.image} alt="techUsed"/>
            </li>
          ))}
        </ul>
      </div>
    </li>
  )
}

export default Item
