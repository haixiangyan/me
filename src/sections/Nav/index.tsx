import {FC, useState} from "react";
import styles from './styles.module.scss'
import classNames from "classnames";

interface NavItem {
  text: string;
  toEl: string;
}

const navItems: NavItem[] = [
  {text: '首页', toEl: '#home'},
  {text: '关于', toEl: '#about'},
  {text: '项目', toEl: '#project'},
  {text: '文章', toEl: '#article'},
  {text: '找我', toEl: '#contact'},
]

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState('#home');

  const scroll = (toEl: string) => {
    const $toEl = document.querySelector(toEl)
    if ($toEl) {
      setActiveItem(toEl)
      $toEl.scrollIntoView({behavior: "smooth"})
    }
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span>海怪</span>
      </div>

      <ul>
        {navItems.map(n => (
          <li
            key={n.toEl}
            className={classNames({[styles.active]: n.toEl === activeItem})}
            onClick={() => scroll(n.toEl)}
          >
            {n.text}
          </li>
        ))}
        <li>简历</li>
      </ul>
    </nav>
  )
}

export default Nav
