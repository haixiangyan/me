import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { navItems } from './constants';

export interface NavItem {
  text: string;
  toEl: string;
}

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>('#home');
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);

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
        <span>Me</span>
      </div>

      <ul className={styles.horizontal}>
        {navItems.map((nav) => (
          <li
            key={nav.toEl}
            className={classNames({ [styles.active]: nav.toEl === activeItem })}
            onClick={() => scroll(nav.toEl)}
          >
            {nav.text}
          </li>
        ))}
        <li>
          <a href="https://yanhaixiang.com/resume-generator/" target="_blank" rel="noreferrer">简历</a>
        </li>

        {/* 缩小版菜单栏 */}
        <li className={styles.navBtn} onClick={() => setVerticalVisible(!verticalVisible)}>
          {verticalVisible ? <CloseOutlined /> : <MenuOutlined /> }
        </li>
      </ul>

      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({ [styles.active]: nav.toEl === activeItem })}
              onClick={() => scroll(nav.toEl)}
            >
              {nav.text}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Nav;
