import {Tooltip} from "antd";
import Paragraph from "../../components/Paragraph";
import styles from './styles.module.scss'

// 图标
import react from '../../assets/icons/react.png'
import antd from '../../assets/icons/antd.png'
import eslint from '../../assets/icons/eslint.png'
import ts from '../../assets/icons/ts.png'
import sass from '../../assets/icons/sass.png'

const techs = [
  {
    content: 'React.js',
    image: react
  },
  {
    content: 'TypeScript',
    image: ts
  },
  {
    content: 'Eslint',
    image: eslint
  },
  {
    content: 'Antd',
    image: antd
  },
  {
    content: 'Sass',
    image: sass
  },
]

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Paragraph>第三次重改个人主页成功 🙌， 使用了:</Paragraph>
      <div className={styles.techList}>
        {techs.map(tech => (
          <Tooltip key={tech.content} placement="top" title={tech.content} color="black">
            <img src={tech.image} alt="tech"/>
          </Tooltip>
        ))}
      </div>
    </footer>
  )
}

export default Footer
