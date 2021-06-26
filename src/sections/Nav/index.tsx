import React, { FC, useState } from 'react';
import classNames from 'classnames';
import styles from './styles.module.scss';

interface NavItem {
  text: string;
  toEl: string;
}

const navItems: NavItem[] = [
  { text: '首页', toEl: '#home' },
  { text: '关于', toEl: '#about' },
  { text: '项目', toEl: '#project' },
  { text: '找我', toEl: '#contact' },
];

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState('#home');

  const scroll = (toEl: string) => {
    const $toEl = document.querySelector(toEl);
    if ($toEl) {
      setActiveItem(toEl);
      $toEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.title}>
        <span>海怪</span>
      </div>

      <ul>
        {navItems.map((n) => (
          <li
            key={n.toEl}
            className={classNames({ [styles.active]: n.toEl === activeItem })}
            onClick={() => scroll(n.toEl)}
          >
            {n.text}
          </li>
        ))}
        <li>
          <a href="https://yanhaixiang.com/resume-generator/" target="_blank" rel="noreferrer">简历</a>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
