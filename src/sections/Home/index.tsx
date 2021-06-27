import React, { FC } from 'react';
import { Col, Row } from 'antd';
import styles from './styles.module.scss';
import HandDown from './HandDown';
import useTyped from '../../hooks/useTyped';

const strings = [
  '哈喽，我是帅哥',
  '不对不对，让我想想',
  '我是海怪，<br>一个热爱生活的前端开发。<br/>拒绝996和内卷，<br/>偶尔聊聊技术或分享生活。',
];

const Home: FC = () => {
  const el = useTyped(strings);

  return (
    <section className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <span ref={el} />
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <div className={styles.ball}>
            H
          </div>
        </Col>

        <Col className={styles.next} span={24}>
          <HandDown />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
