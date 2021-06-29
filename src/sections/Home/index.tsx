import React, { FC, useEffect, useRef } from 'react';
import { Col, Row } from 'antd';
import Fade from 'react-reveal/Fade';
import lottie from 'lottie-web';
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
  const animationRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (animationRef.current) {
      lottie.loadAnimation({
        container: animationRef.current, // Required
        path: 'https://assets3.lottiefiles.com/private_files/lf30_lgesk2nm.json', // Required
        renderer: 'svg', // Required
        loop: true, // Optional
        autoplay: true, // Optional
        name: 'Hello World', // Name for future reference. Optional.
      });
    }
  }, []);

  return (
    <section id="home" className={styles.home}>
      <Row className={styles.content}>
        <Col span={24} md={15} className={styles.intro}>
          <span ref={el} />
        </Col>

        <Col span={24} md={9} className={styles.ballWrapper}>
          <Fade bottom>
            <div className={styles.ball}>
              <div ref={animationRef} />
            </div>
          </Fade>
        </Col>

        <Col className={styles.next} span={24}>
          <HandDown />
        </Col>
      </Row>
    </section>
  );
};

export default Home;
