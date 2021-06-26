import React, { FC } from 'react';
import styles from './styles.module.scss';
import HandDown from './HandDown';
import useTyped from '../../hooks/useTyped';

const strings = [
  '哈喽，我是帅哥',
  '不对不对，让我想想',
  '我是海怪，<br>一个热爱生活的前端工程师。<br/>拒绝996和内卷，<br/>偶尔聊聊技术或分享生活。',
];

const Home: FC = () => {
  const el = useTyped(strings);

  return (
    <section className={styles.home}>
      <div className={styles.content}>
        <div className={styles.intro}>
          <span ref={el} />
        </div>

        <figure className={styles.ballWrapper}>
          <div className={styles.ball}>
            H
          </div>
        </figure>
      </div>

      <HandDown />
    </section>
  );
};

export default Home;
