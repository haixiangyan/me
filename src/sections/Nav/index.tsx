import React, { FC, useState } from 'react';
import classNames from 'classnames';
import { CloseOutlined, MenuOutlined } from '@ant-design/icons';
import styles from './styles.module.scss';
import { navItems } from './constants';
import useScrollActive from '../../hooks/useScrollActive';

export interface NavItem {
  text: string;
  toEl: string;
}

const selectors = navItems.map((nav) => nav.toEl);

const Nav: FC = () => {
  const [activeItem, setActiveItem] = useState<string>('#home');
  const [verticalVisible, setVerticalVisible] = useState<boolean>(false);

  useScrollActive(selectors, setActiveItem);

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

      {/* 横版 nav */}
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

      {/* 竖版 nav */}
      {verticalVisible && (
        <ul className={styles.vertical}>
          {navItems.map((nav) => (
            <li
              key={nav.toEl}
              className={classNames({ [styles.active]: nav.toEl === activeItem })}
              onClick={() => {
                setVerticalVisible(false);
                scroll(nav.toEl);
              }}
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
