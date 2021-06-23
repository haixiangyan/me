import {FC} from "react";
import styles from './styles.module.scss'

const Nav: FC = () => {
  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span>海怪</span>
      </div>

      <ul>
        <li>首页</li>
        <li>关于</li>
        <li>项目</li>
        <li>文章</li>
        <li>找我</li>
        <li>简历</li>
      </ul>
    </nav>
  )
}

export default Nav
